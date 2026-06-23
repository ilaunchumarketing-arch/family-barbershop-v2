// Vercel serverless function — Meta Conversions API (CAPI) for Family Barbershop.
// The browser fires a Lead / ViewContent event to the pixel AND posts the same
// event here with the SAME event_id, so Meta de-duplicates browser + server into
// ONE event. Improves match quality and survives iOS / ad-blockers.
//
// The secret access token comes from the META_CAPI_TOKEN env var — it is NEVER
// committed to the repo. The pixel id is public (it's in the browser snippet).

const PIXEL_ID = process.env.META_PIXEL_ID || '1699302127751630';
const TOKEN = process.env.META_CAPI_TOKEN;
const GRAPH = 'https://graph.facebook.com/v21.0';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'POST only' });
  }
  if (!TOKEN) {
    return res.status(200).json({ ok: false, error: 'META_CAPI_TOKEN not set' });
  }
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const {
      event_name = 'Lead',
      event_id,
      event_source_url,
      custom_data = {},
      fbp,
      fbc,
      test_event_code,
    } = body;

    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    const ua = req.headers['user-agent'] || '';

    const user_data = {};
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;
    if (ip) user_data.client_ip_address = ip;
    if (ua) user_data.client_user_agent = ua;

    const payload = {
      data: [{
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: event_source_url || req.headers.referer || 'https://www.familybarbershopfl.com/',
        event_id,
        user_data,
        custom_data,
      }],
    };
    if (test_event_code) payload.test_event_code = test_event_code;

    const r = await fetch(`${GRAPH}/${PIXEL_ID}/events?access_token=${encodeURIComponent(TOKEN)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const out = await r.json();
    return res.status(200).json({
      ok: r.ok && !out.error,
      events_received: out.events_received,
      fbtrace_id: out.fbtrace_id,
      error: out.error,
    });
  } catch (e) {
    return res.status(200).json({ ok: false, error: String((e && e.message) || e) });
  }
};
