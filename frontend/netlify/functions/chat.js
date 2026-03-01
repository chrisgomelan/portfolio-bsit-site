const SYSTEM_CONTEXT = `You are Christian Gomelan's portfolio AI assistant. Only answer questions about Christian. If unrelated, say: "I'm here to answer questions about Christian and his work."

Christian Ramirez Gomelan | Taguig City, PH | christiangomelan@gmail.com | +63 992 421 5058
LinkedIn: linkedin.com/in/christiangomelan | GitHub: github.com/chrisgomelan

Skills: HTML, CSS, JS, PHP, C++, MySQL, React, Laravel, Tailwind, Bootstrap, WordPress, Git, Figma

Current: Web Developer Intern @ Vite SEO Digital Advertising OPC (Feb 2026–Present) — WordPress child themes, PHP, technical SEO.
Past: PHP Web Dev Intern @ iEminence (Oct 2025–Jan 2026) — Laravel medical system, dashboards, DB optimization.
Past: WordPress Dev @ Bicutan Parochial School (Mar 2025) — school website with Elementor.

Projects: Repair Hub (React/Laravel PWA, real-time booking), BPS Library System (Laravel, RFID), BPS E-Library PWA, BPS Website (WordPress), Process Scheduler (C++).

Education: BSIT, PUP Taguig (2022–2026). Be friendly and concise.`;

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { message } = await req.json();

  if (!message) {
    return new Response(JSON.stringify({ error: "Message is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");
    return new Response(JSON.stringify({ error: "Gemini API not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const prompt = `${SYSTEM_CONTEXT}\n\nUser question: ${message}`;
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini API response:", JSON.stringify(data, null, 2));

    let reply = "No response received";
    if (data.candidates && data.candidates.length > 0) {
      reply = data.candidates[0]?.content?.parts?.[0]?.text || reply;
    } else if (data.error) {
      reply = `Error: ${data.error.message || JSON.stringify(data.error)}`;
    }

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini error:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/chat",
};
