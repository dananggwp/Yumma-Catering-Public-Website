import OpenAI from "openai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { faqs, menus, packages, vendors } from "@/lib/data";

const schema = z.object({
  messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1) })).max(12)
});

export async function POST(request: Request) {
  const body = schema.safeParse(await request.json());
  if (!body.success) return NextResponse.json({ reply: "Maaf, format pesan belum sesuai." }, { status: 400 });

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      reply: "Halo, untuk saat ini admin Yumma bisa bantu paling cepat via WhatsApp. Kamu bisa tanya menu harian, wedding, sweet corner, atau rekomendasi vendor."
    });
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const context = JSON.stringify({
    menus: menus.map(({ title, date, tags, portion }) => ({ title, date, tags, portion })),
    packages: packages.map(({ name, price, serving }) => ({ name, price, serving })),
    vendors: vendors.map(({ name, category, rating }) => ({ name, category, rating })),
    faqs
  });

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.5,
    messages: [
      {
        role: "system",
        content:
          "Kamu adalah asisten Yumma Catering. Jawab dalam Bahasa Indonesia yang hangat, sopan, casual profesional, singkat, dan membantu. Bantu pertanyaan catering harian, wedding, event, sweet corner, vendor, dan FAQ. Jika tidak yakin, sarankan hubungi admin WhatsApp."
      },
      { role: "system", content: `Data bisnis Yumma: ${context}` },
      ...body.data.messages
    ]
  });

  return NextResponse.json({ reply: completion.choices[0]?.message.content ?? "Maaf, admin Yumma bisa bantu lanjut via WhatsApp." });
}
