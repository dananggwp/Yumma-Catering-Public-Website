import { Clock, Instagram, MessageCircle, Music2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/form";
import { site } from "@/lib/data";
import { whatsappUrl } from "@/lib/utils";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Yumma Catering via WhatsApp, Instagram, TikTok, atau form kontak."
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Kontak" title="Konsultasi mudah untuk catering harian, wedding, dan event." />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <Card><CardContent className="p-6"><MessageCircle className="mb-4 h-8 w-8 text-primary" /><h2 className="text-xl font-bold">WhatsApp Admin</h2><p className="mt-2 text-muted-foreground">Cara tercepat untuk pesan dan tanya slot.</p><Button asChild className="mt-5"><a href={whatsappUrl("Halo Yumma Catering, saya ingin konsultasi.")}>Chat WhatsApp</a></Button></CardContent></Card>
            <Card><CardContent className="grid gap-3 p-6 text-sm"><a href={site.instagram} className="flex items-center gap-3"><Instagram className="h-5 w-5 text-primary" /> @yummacatering</a><a href={site.tiktok} className="flex items-center gap-3"><Music2 className="h-5 w-5 text-primary" /> TikTok Yumma</a><p className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> Senin-Jumat 08.00-17.00, weekend untuk event</p></CardContent></Card>
            <iframe title="Yumma Catering Maps" src={site.maps} className="h-72 w-full rounded-[1.5rem] border" loading="lazy" />
          </div>
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-5 text-2xl font-black">Form kontak</h2>
              <form className="grid gap-4">
                <Input placeholder="Nama" />
                <Input placeholder="Nomor WhatsApp" />
                <Input placeholder="Email opsional" />
                <Textarea placeholder="Tulis kebutuhan kamu..." />
                <Button asChild size="lg"><a href={whatsappUrl("Halo Yumma Catering, saya sudah mengisi form kontak dan ingin dibantu admin.")}>Kirim via WhatsApp</a></Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
