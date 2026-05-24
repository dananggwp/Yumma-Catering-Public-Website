"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Camera, Gem, Handshake, MessageCircle, Sparkles, Star, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/form";
import { gallery } from "@/lib/data";
import { formatRupiah, whatsappUrl } from "@/lib/utils";

const eventPackages = [
  ["Intimate Akad", "150-250 tamu", "Buffet hangat, coffee corner, keluarga inti"],
  ["Premium Reception", "300-600 tamu", "Buffet, food stall, sweet corner, tasting"],
  ["Luxury Celebration", "600+ tamu", "Multi-station, live cooking, vendor orchestration"]
];

export default function WeddingEventPage() {
  const [guest, setGuest] = useState(300);
  const [tier, setTier] = useState(95000);
  const estimate = useMemo(() => guest * tier, [guest, tier]);

  return (
    <>
      <section className="relative -mt-24 overflow-hidden bg-foreground pt-24 text-background">
        <div className="absolute inset-0">
          <Image src="/images/wedding/wedding-hero.jpg" alt="Wedding catering Yumma" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-foreground to-transparent" />
        </div>
        <div className="container relative grid min-h-[86vh] items-end pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <Badge className="mb-5 border-orange-200/40 bg-orange-50/10 text-orange-100 backdrop-blur">Wedding & Event Catering</Badge>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-balance md:text-7xl">Bukan sekadar buffet. Ini pengalaman makan yang ikut dikenang.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50/90 md:text-xl">
              Yumma merancang rasa, alur layanan, sweet corner, live cooking, dan partner event agar hari besar terasa hangat, elegan, dan tenang.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><a href="#inquiry"><MessageCircle className="h-4 w-4" /> Konsultasi Wedding</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20"><Link href="/galeri">Lihat Galeri <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-foreground text-background">
        <div className="container grid gap-5 md:grid-cols-3">
          {eventPackages.map(([name, size, text]) => (
            <Card key={name} className="border-white/10 bg-white/8 text-background backdrop-blur-xl">
              <CardContent className="p-6">
                <Gem className="mb-5 h-7 w-7 text-orange-200" />
                <h2 className="text-2xl font-black">{name}</h2>
                <p className="mt-2 font-bold text-orange-100">{size}</p>
                <p className="mt-4 leading-7 text-orange-50/80">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-pad warm-radial">
        <div className="container">
          <SectionHeading eyebrow="Atmosphere" title="Setiap sudut dirancang untuk rasa, foto, dan flow tamu." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [Gem, "Wedding catering", "Buffet premium, stall pilihan, nasi box keluarga, dan tasting."],
              [Sparkles, "Sweet corner", "Dessert table, jajanan pasar modern, cake bites, dan hampers."],
              [Utensils, "Live cooking", "Station interaktif yang membuat event terasa hidup."],
              [Handshake, "Vendor collaboration", "Dekor, dokumentasi, MC, makeup, panggung, dan tenda."]
            ].map(([Icon, title, text]) => (
              <Card key={String(title)} className="premium-card">
                <CardContent className="p-6">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span>
                  <h2 className="text-xl font-black">{String(title)}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{String(text)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-pad bg-card">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading className="mx-0 text-left" eyebrow="Budget planner" title="Mulai dari jumlah tamu, lalu bangun pengalaman impian." description="Estimasi awal untuk membantu diskusi. Admin akan konfirmasi venue, menu, vendor, dan style layanan." />
            <Card className="premium-card">
              <CardContent className="grid gap-5 p-6">
                <label className="grid gap-2 text-sm font-black">Jumlah tamu <Input type="number" min={50} value={guest} onChange={(e) => setGuest(Number(e.target.value))} /></label>
                <label className="grid gap-2 text-sm font-black">Paket per pax <Select value={tier} onChange={(e) => setTier(Number(e.target.value))}><option value={75000}>Classic - Rp75.000</option><option value={95000}>Premium - Rp95.000</option><option value={140000}>Luxury - Rp140.000</option></Select></label>
                <div className="rounded-[1.35rem] bg-primary/10 p-5"><p className="text-sm font-black text-primary">Estimasi mulai dari</p><p className="text-4xl font-black tracking-tight">{formatRupiah(estimate)}</p></div>
              </CardContent>
            </Card>
          </div>
          <Card className="premium-card">
            <CardContent className="p-6">
              <h2 className="mb-2 text-2xl font-black">Form inquiry event</h2>
              <p className="mb-5 text-sm text-muted-foreground">Isi cepat, lanjutkan percakapan nyaman di WhatsApp.</p>
              <form className="grid gap-4">
                <Input placeholder="Nama lengkap" />
                <Input placeholder="Nomor WhatsApp" />
                <Select><option>Wedding</option><option>Sweet Corner</option><option>Corporate Event</option><option>Private Event</option></Select>
                <Input type="date" />
                <Textarea placeholder="Ceritakan venue, mood acara, jumlah tamu, kebutuhan menu, dan vendor yang dibutuhkan." />
                <Button asChild size="lg"><a href={whatsappUrl(`Halo Yumma Catering, saya ingin inquiry event dengan estimasi ${guest} tamu dan budget sekitar ${formatRupiah(estimate)}.`)}>Kirim Inquiry via WhatsApp</a></Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="Cinematic gallery" title="Visual event yang terasa hangat, elegan, dan siap dibagikan." />
          <div className="grid gap-4 md:grid-cols-4">
            {gallery.slice(1, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[1.75rem] shadow-soft ${index === 0 ? "md:col-span-2 md:row-span-2 min-h-96" : "min-h-64"}`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(min-width: 768px) 35vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <div className="mb-2 flex gap-1 text-orange-200">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-3.5 w-3.5 fill-current" />)}</div>
                  <p className="flex items-center gap-2 font-black"><Camera className="h-4 w-4" /> {item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
