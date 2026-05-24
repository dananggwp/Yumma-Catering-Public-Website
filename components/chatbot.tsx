"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form";
import { whatsappUrl } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Halo, saya Yumi. Mau tanya menu harian, wedding, atau rekomendasi vendor?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!input.trim() || loading) return;
    const next = [...messages, { role: "user" as const, content: input.trim() }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Maaf, asisten sedang tidak tersedia. Admin Yumma bisa bantu langsung via WhatsApp."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-40 right-4 z-50 md:bottom-5 md:right-5">
      {open ? (
        <div className="mb-3 flex h-[520px] w-[calc(100vw-2.5rem)] max-w-sm flex-col rounded-[1.5rem] border bg-card shadow-soft">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Bot className="h-5 w-5" /></span>
              <div>
                <p className="font-bold">Yumi</p>
                <p className="text-xs text-muted-foreground">Teman ngobrol untuk menu & event</p>
              </div>
            </div>
            <Button size="icon" variant="ghost" onClick={() => setOpen(false)} aria-label="Tutup chat">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={message.role === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? <div className="inline-block rounded-2xl bg-muted px-4 py-3 text-sm">Sebentar ya...</div> : null}
          </div>
          <a className="mx-4 mb-3 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground" href={whatsappUrl("Halo Yumma Catering, saya ingin dibantu admin.")}>
            Hubungi admin WhatsApp
          </a>
          <form onSubmit={submit} className="flex gap-2 border-t p-4">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tulis pertanyaan..." />
            <Button size="icon" aria-label="Kirim"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      ) : null}
      <Button size="lg" onClick={() => setOpen(true)} className="h-14 rounded-full shadow-2xl">
        <MessageCircle className="h-5 w-5" /> Yumma Assistant
      </Button>
    </div>
  );
}
