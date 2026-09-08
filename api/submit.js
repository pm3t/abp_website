export default async function handler(req, res) {
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

    // Forward to Webhook / Google Sheet / Telegram if configured in Vercel Environment Variables
    const webhookUrl = process.env.WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK;
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission)
        });
      }

      if (tgToken && tgChatId) {
        const text = `📥 *LEAD BARU WEBSITE ABP*\n\n` +
                     `⏰ *Waktu:* ${formattedTime}\n` +
                     `👤 *Nama:* ${submission.nama || '-'}\n` +
                     `🏢 *Perusahaan:* ${submission.firm || '-'}\n` +
                     `📧 *Email:* ${submission.email || '-'}\n` +
                     `📞 *Telepon:* ${submission.phone || '-'}\n` +
                     `📦 *Produk:* ${submission.produk || '-'}\n` +
                     `💬 *Pesan:* ${submission.pesan || '-'}`;

        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: text,
            parse_mode: 'Markdown'
          })
        });
      }
    } catch (err) {
      console.error('Webhook / Telegram dispatch error:', err);
    }

    return res.status(200).json({
      status: 'success',
      message: 'Lead berhasil dicatat!',
      lead: submission
    });
  }

  return res.status(200).json({ status: 'active', message: 'Vercel API Submit Ready' });
}
