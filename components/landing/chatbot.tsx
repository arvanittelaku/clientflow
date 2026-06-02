"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, MessageCircle, Send, X } from "lucide-react";
import { chatbotQuickReplies, chatbotWelcome } from "@/components/landing/data";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function messageId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function toApiHistory(msgs: Message[]) {
  return msgs
    .filter((m) => m.id !== "welcome")
    .map((m) => ({
      role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
      content: m.text,
    }));
}

async function fetchGroqReply(
  history: Array<{ role: "user" | "assistant"; content: string }>,
): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history }),
  });

  const data = (await response.json()) as { reply?: string; error?: string };

  if (!response.ok) {
    throw new Error(data.error ?? "Failed to get a response");
  }

  if (!data.reply) {
    throw new Error("Empty response");
  }

  return data.reply;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "bot", text: chatbotWelcome },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, loading]);

  async function sendToAssistant(userText: string) {
    const trimmed = userText.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = {
      id: messageId("user"),
      role: "user",
      text: trimmed,
    };

    const updatedMessages = [...messages, userMessage];
    const historyForApi = toApiHistory(updatedMessages);

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await fetchGroqReply(historyForApi);
      setMessages((prev) => [
        ...prev,
        { id: messageId("bot"), role: "bot", text: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: messageId("bot-err"),
          role: "bot",
          text: "Sorry, I could not reach the assistant right now. Email hello@clientflow.ai or use the contact section to book a free strategy call.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleQuickReply(reply: string) {
    void sendToAssistant(reply);
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[min(520px,75vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-900/95 shadow-2xl shadow-blue-900/40 backdrop-blur-xl sm:right-8"
            role="dialog"
            aria-label="ClientFlow chat assistant"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-blue-600/20 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">ClientFlow AI</p>
                <p className="text-xs text-blue-200">Powered by your knowledge base + Groq</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white"
                        : "border border-white/10 bg-slate-800/80 text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
              {loading ? (
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              ) : null}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {chatbotQuickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    disabled={loading}
                    onClick={() => handleQuickReply(reply)}
                    className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-100 transition hover:bg-blue-500/20 disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  void sendToAssistant(input);
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about GHL, HubSpot, voice AI..."
                  disabled={loading}
                  className="flex-1 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 text-white transition hover:bg-blue-500 disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center text-xs font-medium text-blue-300 hover:text-blue-200"
              >
                Or book your free consultation →
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 transition hover:bg-blue-500 sm:right-8"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat assistant"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {open ? "Close" : "Chat with us"}
      </button>
    </>
  );
}
