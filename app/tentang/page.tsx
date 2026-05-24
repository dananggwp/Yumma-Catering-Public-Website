import Image from "next/image";
import { Heart, Home, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Tentang Yumma",
  description: "Cerita Yumma Catering dari dapur rumah hingga partner event terpercaya."
};

export default function AboutPage() {
  return (
    <section className="section-pad">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image src="/images/gallery/kitchen-behind-scenes.jpg" alt="Dapur Yumma" fill className="object-cover" priority />
        </div>
        <div className="self-center">
          <SectionHeading className="mx-0 text-left" eyebrow="Tentang Yumma" title="Berawal dari catering rumah, tumbuh lewat rasa percaya." description="Yumma Catering lahir dari kebiasaan memasak untuk keluarga: rasa yang akrab, bahan yang dipilih baik, dan pelayanan yang hangat. Kini Yumma memperluas layanan ke wedding, event, sweet corner, corporate catering, serta ekosistem partner." />
          <div className="grid gap-4">
            {[
              [Home, "Nilai keluarga", "Porsi dan rasa dibuat agar nyaman untuk meja makan rumah."],
              [ShieldCheck, "Kualitas terjaga", "Menu halal, dapur rapi, dan komunikasi jelas."],
              [Heart, "Trusted event partner", "Dari harian ke hari spesial, Yumma hadir dengan tim dan vendor yang bisa diandalkan."]
            ].map(([Icon, title, text]) => <Card key={String(title)}><CardContent className="flex gap-4 p-5"><Icon className="h-7 w-7 flex-none text-primary" /><div><h2 className="font-bold">{String(title)}</h2><p className="mt-1 text-muted-foreground">{String(text)}</p></div></CardContent></Card>)}
          </div>
        </div>
      </div>
    </section>
  );
}
