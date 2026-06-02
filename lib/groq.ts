const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type GroqChatResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

export async function chatWithGroq(
  messages: ChatMessage[],
  knowledgeBase: string,
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const model = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";

  const systemPrompt = `You are the ClientFlow website assistant. Answer questions using ONLY the knowledge base below. Be specific about services: custom websites, GoHighLevel, HubSpot, inbound/outbound call automation, email/SMS follow-up, and n8n/Make workflows. Keep answers concise and helpful. If the user wants to work together, guide them to book a free strategy call or email hello@clientflow.ai. Do not make up prices or guarantees not in the knowledge base.

--- KNOWLEDGE BASE ---
${knowledgeBase}
--- END KNOWLEDGE BASE ---`;

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.35,
      max_tokens: 600,
    }),
  });

  const data = (await response.json()) as GroqChatResponse;

  if (!response.ok) {
    throw new Error(data.error?.message ?? "Groq API request failed");
  }

  const reply = data.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    throw new Error("Empty response from Groq");
  }

  return reply;
}
