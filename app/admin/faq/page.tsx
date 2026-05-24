import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/form";
import { faqs } from "@/lib/data";

export default function AdminFaqPage() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between gap-3"><div><h1 className="text-3xl font-black">FAQ Knowledge Base</h1><p className="text-muted-foreground">Kelola pengetahuan chatbot dan FAQ publik.</p></div><Button><Plus className="h-4 w-4" /> Tambah FAQ</Button></div>
      <Card><CardContent className="grid gap-4 p-6"><Input placeholder="Pertanyaan" /><Textarea placeholder="Jawaban ramah dalam Bahasa Indonesia" /></CardContent></Card>
      <div className="grid gap-4">{faqs.map(([q, a]) => <Card key={q}><CardContent className="p-5"><p className="font-bold">{q}</p><p className="mt-2 text-muted-foreground">{a}</p></CardContent></Card>)}</div>
    </div>
  );
}
