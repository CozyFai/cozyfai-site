export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        listIds: [2], // tu lista actual
        updateEnabled: true
      })
    });

    if (!response.ok) {
      return res.status(400).json({ error: "Failed to subscribe" });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
