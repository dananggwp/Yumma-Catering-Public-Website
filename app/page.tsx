import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  ShieldCheck,
  Star
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs, gallery, menus, testimonials, vendors } from "@/lib/data";
import { whatsappUrl } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="container grid min-h-[calc(100vh-4.75rem)] items-center gap-10 pb-16 pt-10 md:gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:pb-20 lg:pt-14">
          <FadeIn>
            <Badge className="mb-5 px-3.5 py-1.5">Catering harian, wedding, dan event organizer</Badge>
            <h1 className="max-w-4xl text-[2.65rem] font-black leading-[1.04] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Catering rumahan premium yang terasa personal, siap tampil di hari besar.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              Yumma memadukan rasa keluarga, presentasi modern, dan alur pemesanan yang tetap ramah WhatsApp untuk pelanggan lama maupun calon pengantin baru.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/menu">Lihat Menu Minggu Ini <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6">
                <a href={whatsappUrl("Halo Yumma Catering, saya ingin memesan paket catering.")}>
                  <FaWhatsapp className="h-4 w-4" /> Pesan via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="dark" className="h-12 px-6">
                <Link href="/wedding-event">Catering Wedding</Link>
              </Button>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["5000+", "porsi dikirim"],
                ["120+", "event ditangani"],
                ["98%", "repeat customer"],
                ["4.9", "rating rasa"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <p className="text-2xl font-black tracking-tight md:text-3xl">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border bg-card shadow-[0_28px_90px_-48px_rgba(112,63,32,0.6)]">
              <Image priority src="/images/hero/hero-catering.jpg" alt="Hidangan catering keluarga Yumma" fill className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-[1.15rem] border bg-card/95 p-4 shadow-lg backdrop-blur-md sm:left-6 sm:right-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-black">Menu Jumat Favorit</p>
                  <p className="text-sm leading-6 text-muted-foreground">Nasi kebuli ayam, acar, sambal goreng</p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-black text-primary">
                  <Star className="h-4 w-4 fill-current" /> 4.9
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-card">
        <div className="container">
          <SectionHeading eyebrow="Menu minggu ini" title="Rotasi menu harian yang familiar, dikemas seperti layanan premium." description="Setiap paket dibuat untuk 4-5 orang, halal, dan mudah dipesan tanpa registrasi." />
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {menus.map((menu) => (
              <Link href="/menu" key={menu.id} className="group overflow-hidden rounded-[1.25rem] border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={menu.image} alt={menu.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="20vw" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-primary backdrop-blur">
                    {new Date(menu.date).toLocaleDateString("id-ID", { weekday: "long" })}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold leading-snug">{menu.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{menu.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="Kenapa Yumma" title="Mudah untuk pelanggan lama, siap untuk ekspansi event." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [ShieldCheck, "Tetap mudah via WhatsApp", "Pelanggan lama tetap bisa pesan tanpa login, tanpa friction, dan tetap dibantu admin."],
              [CalendarDays, "Menu dan inquiry lebih rapi", "Calendar, paket, event inquiry, vendor, dan galeri siap menjadi sistem operasi Yumma."],
              [HeartHandshake, "organizer event", "Catering, dekor, dokumentasi, MC, makeup, dan partner event berada dalam satu pengalaman."]
            ].map(([Icon, title, text]) => (
              <Card key={String(title)} className="premium-card">
                <CardContent className="p-7">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span>
                  <h3 className="text-xl font-bold">{String(title)}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{String(text)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/60">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading className="mx-0 text-left" eyebrow="Cerita pelanggan" title="Dipercaya untuk makan harian dan momen sekali seumur hidup." />
            <Button asChild variant="outline" className="bg-background/70">
              <Link href="/wedding-event">Lihat layanan event <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4">
            {testimonials.map((item) => (
              <Card key={item.name} className="premium-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
                  <p className="leading-8">"{item.quote}"</p>
                  <p className="mt-5 font-bold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="Preview organizer" title="Galeri rasa, partner pilihan, dan peluang kolaborasi." />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 4).map((item, index) => (
                <Link href="/galeri" key={item.id} className={`group relative overflow-hidden rounded-[1.25rem] shadow-sm ${index === 0 ? "row-span-2 min-h-80" : "min-h-40"}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 40vw, 50vw" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <p className="font-black">{item.title}</p>
                    <p className="text-xs font-semibold text-white/75">{item.category}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid gap-4">
              {vendors.slice(0, 3).map((vendor) => (
                <Link href="/vendor" key={vendor.id} className="group rounded-[1.25rem] border bg-card p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <Image src={vendor.image} alt={vendor.name} width={96} height={96} className="h-24 w-24 rounded-[1.25rem] object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <div>
                      <p className="font-bold">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">{vendor.category}</p>
                      <p className="mt-2 flex items-center gap-1 text-sm font-bold text-primary"><Star className="h-4 w-4 fill-current" /> {vendor.rating} partner rating</p>
                    </div>
                  </div>
                </Link>
              ))}
              <Button asChild size="lg" variant="dark">
                <Link href="/vendor">Jelajahi vendor partner <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-card">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan." />
          <div className="mx-auto grid max-w-4xl gap-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-[1.25rem] border bg-background p-5 transition hover:border-primary/30 hover:shadow-sm">
                <summary className="cursor-pointer list-none font-bold">{q}</summary>
                <p className="mt-3 leading-7 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <a href={whatsappUrl("Halo Yumma Catering, saya masih punya pertanyaan.")}>
                Tanya admin Yumma <FaWhatsapp className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
