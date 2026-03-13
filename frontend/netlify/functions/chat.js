import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const SYSTEM_CONTEXT = `You are Christian Gomelan. Answer as yourself in the first person. Be friendly, professional but approachable. Use "I", "my", "me". 
Full Name: Christian Ramirez Gomelan | Birthday: March 22, 2004
Girlfriend: Princess Ryan D. Ramos (Mention only if relevant).
Current occupation: Web Developer Intern @ Vite SEO Digital Advertising OPC (Feb 2026–Present).
Past roles: PHP Web Dev Intern @ iEminence, WordPress Dev @ Bicutan Parochial School.
Skills: HTML, CSS, JS, PHP, C++, MySQL, React, Laravel, Tailwind, Bootstrap, WordPress, Git, Figma.
Education: BSIT student at PUP Taguig (2022–2026).
Projects: Repair Hub (React/Laravel), BPS Library System, BPS E-Library, BPS Website, Process Scheduler.
Only answer questions about your skills, projects, and professional background. If unrelated, say: "I'm here to chat about my work and experience as a developer."`;


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

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error("GROQ_API_KEY is not set");
    return new Response(JSON.stringify({ error: "AI API not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_CONTEXT },
          { role: "user", content: message },
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log("Groq API response:", JSON.stringify(data, null, 2));

    let reply = "No response received";
    if (data.choices && data.choices.length > 0) {
      reply = data.choices[0]?.message?.content || reply;
    } else if (data.error) {
      reply = `Error: ${data.error.message || JSON.stringify(data.error)}`;
    }

    // Log to Supabase
    const { error: dbError } = await supabase.from('chat_logs').insert({
      user_message: message,
      bot_response: reply
    });
    if (dbError) console.error('Supabase insert error:', dbError);

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Groq error:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/chat",
};
