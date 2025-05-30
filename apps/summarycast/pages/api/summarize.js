export default async function handler(req, res) {
  const { text } = req.body;

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an assistant that summarizes any given text clearly and briefly.",
        },
        {
          role: "user",
          content: `Please summarize the following text:\n\n${text}`,
        },
      ],
      temperature: 0.5,
    }),
  });

  const result = await response.json();

  if (response.ok) {
    const summary = result.choices[0].message.content.trim();
    res.status(200).json({ summary });
  } else {
    res.status(500).json({ error: result });
  }
}
