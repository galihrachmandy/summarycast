export default async function handler(req, res) {
  const { text } = req.body;

  // Fake AI Summary: kamu bisa ganti ini dengan API OpenAI nanti
  const summary = `Ringkasan dari teks: ${text.slice(0, 80)}...`;

  res.status(200).json({ summary });
}
