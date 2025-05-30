export default async function handler(req, res) {
  const { text } = req.body;

  // Simulasi AI Ringkasan
  const summary = `Ringkasan dari teks: ${text.slice(0, 80)}...`;

  res.status(200).json({ summary });
}
