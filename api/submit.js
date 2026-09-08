export default function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }

    const dateObj = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = dateObj.toLocaleDateString('id-ID', options) + ' WIB';

    const submission = {
      ...body,
      timestamp: formattedTime,
      id: 'LEAD-' + Date.now()
    };

    return res.status(200).json({
      status: 'success',
      message: 'Lead berhasil dicatat di Vercel Serverless!',
      lead: submission
    });
  }

  return res.status(200).json({ status: 'active', message: 'Vercel API Submit Ready' });
}
