
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const SYSTEM_CONTEXT = `You are Christian Gomelan. Answer as yourself in the first person. Be friendly, professional but approachable. Use "I", "my", "me". 
Current: Web Developer Intern @ Vite SEO Digital Advertising OPC (Feb 2026–Present).
Past: PHP Web Dev Intern @ iEminence (Oct 2025–Jan 2026), WordPress Dev @ Bicutan Parochial School (Mar 2025).
Skills: HTML, CSS, JS, PHP, C++, MySQL, React, Laravel, Tailwind, Bootstrap, WordPress, Git, Figma.
Education: BSIT, PUP Taguig (2022–2026).
Projects: Repair Hub (React/Laravel), BPS Library System (Laravel), BPS E-Library PWA, BPS Website (WordPress), Process Scheduler (C++).
Only answer questions about your skills, projects, and professional background. If unrelated, say: "I'm here to chat about my work and experience as a developer."`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set');
    return res.status(500).json({ error: 'Gemini API not configured' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_CONTEXT }],
          },
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );

    const data = await response.json();
    console.log('Gemini API raw response:', JSON.stringify(data, null, 2));

    let reply = 'No response received';
    if (data.candidates && data.candidates.length > 0) {
      reply = data.candidates[0]?.content?.parts?.[0]?.text || reply;
    } else if (data.error) {
      reply = `Error: ${data.error.message || JSON.stringify(data.error)}`;
    }

    await supabase.from('chat_logs').insert({
      user_message: message,
      bot_response: reply
    });

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Gemini error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate response' });
  }
}