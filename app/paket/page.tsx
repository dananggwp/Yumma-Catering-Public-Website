import { Check, MessageCircle, PackageCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { packages } from "@/lib/data";
import { formatRupiah, whatsappUrl } from "@/lib/utils";

export const metadata = {
  title: "Paket Catering",
  description: "Paket catering mingguan, bulanan, keluarga, kantor, dan healthy Yumma."
};

export default function PackagePage() {
  return (
    <section className="section-pad warm-radial">
      <div className="container">
        <SectionHeading
          eyebrow="Catering subscription"
          title="Paket fleksibel untuk keluarga, kantor, dan gaya hidup sehat."
          description="Pilih paket, konsultasi preferensi, lalu lanjutkan pemesanan lewat WhatsApp. Tidak perlu registrasi untuk pelanggan publik."
        />
        <div className="mb-10 grid gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-xl md:grid-cols-3 dark:border-white/10 dark:bg-card/70">
          {[
            ["Tanpa login", "Pemesanan tetap ramah untuk pelanggan lama."],
            ["Menu rotasi", "Senin-Jumat berbeda, weekend fokus event."],
            ["Admin bantu pilih", "Preferensi keluarga, kantor, atau healthy."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.25rem] bg-background/70 p-4">
              <p className="font-black">{title}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.id} className={`premium-card relative overflow-hidden ${item.featured ? "border-primary/50" : ""}`}>
              {item.featured ? <div className="absolute right-5 top-5"><Badge className="bg-primary text-primary-foreground"><Sparkles className="mr-1 h-3.5 w-3.5" /> Paling populer</Badge></div> : null}
              <CardContent className="p-6">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><PackageCheck className="h-6 w-6" /></span>
                <h2 className="text-2xl font-black">{item.name}</h2>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">{item.serving}</p>
                <div className="mt-5">
                  <span className="text-4xl font-black tracking-tight">{formatRupiah(item.price)}</span>
                  <span className="text-muted-foreground"> / {item.cadence}</span>
                </div>
                <div className="mt-6 grid gap-3">
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3 text-sm leading-6"><Check className="mt-0.5 h-4 w-4 flex-none text-primary" /> {benefit}</div>
                  ))}
                </div>
                <Button asChild className="mt-7 w-full"><a href={whatsappUrl(`Halo Yumma Catering, saya ingin pesan ${item.name}.`)}><MessageCircle className="h-4 w-4" /> Order WhatsApp</a></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
