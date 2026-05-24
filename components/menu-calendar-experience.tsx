"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Calendar, CheckCircle2, Flame, Heart, Leaf, MessageCircle, Smile, X } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { menus } from "@/lib/data";
import { whatsappUrl } from "@/lib/utils";
import type { MenuItem, MenuTag } from "@/types";

const tagStyles: Record<MenuTag, { icon: typeof Flame; label: string; className: string }> = {
  spicy: { icon: Flame, label: "Spicy", className: "bg-red-500/10 text-red-600 dark:text-red-300" },
  healthy: { icon: Leaf, label: "Healthy", className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  favorite: { icon: Heart, label: "Favorite", className: "bg-primary/10 text-primary" },
  "kids friendly": { icon: Smile, label: "Kids friendly", className: "bg-sky-500/10 text-sky-700 dark:text-sky-300" }
};

export function MenuCalendarExperience() {
  const [view, setView] = useState<"weekly" | "monthly">("weekly");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const monthDays = useMemo(() => Array.from({ length: 35 }, (_, i) => i + 1), []);

  return (
    <section className="section-pad warm-radial">
      <div className="container">
        <SectionHeading
          eyebrow="Menu calendar"
          title="Menu mingguan yang rapi, visual, dan mudah dipesan."
          description="Lihat menu Senin-Jumat, cek badge favorit, healthy, spicy, lalu pesan langsung ke WhatsApp tanpa registrasi."
        />
        <div className="mx-auto mb-8 flex w-full max-w-md rounded-full border border-white/70 bg-white/70 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-card/70">
          <button onClick={() => setView("weekly")} className={`h-11 flex-1 rounded-full text-sm font-black transition ${view === "weekly" ? "bg-primary text-primary-foreground shadow-lg shadow-orange-500/20" : "text-muted-foreground hover:bg-muted"}`}>Mingguan</button>
          <button onClick={() => setView("monthly")} className={`h-11 flex-1 rounded-full text-sm font-black transition ${view === "monthly" ? "bg-primary text-primary-foreground shadow-lg shadow-orange-500/20" : "text-muted-foreground hover:bg-muted"}`}>Bulanan</button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.42fr_0.88fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {menus.map((menu, index) => (
              <motion.button
                key={menu.id}
                type="button"
                onClick={() => setSelected(menu)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group overflow-hidden rounded-[1.75rem] border bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={menu.image} alt={menu.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(min-width: 768px) 45vw, 100vw" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <Badge className="border-white/40 bg-white/90 text-primary">
                      {new Date(menu.date).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "short" })}
                    </Badge>
                  </div>
                  {menu.tags.includes("favorite") ? <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-foreground">Favorit</span> : null}
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-sm font-bold text-muted-foreground">{menu.portion}</p>
                    {menu.halal ? <span className="flex items-center gap-1 text-xs font-black text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="h-4 w-4" /> Halal</span> : null}
                  </div>
                  <h2 className="text-xl font-black leading-tight">{menu.title}</h2>
                  <p className="mt-2 line-clamp-2 leading-7 text-muted-foreground">{menu.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {menu.tags.map((tag) => {
                      const item = tagStyles[tag];
                      const Icon = item.icon;
                      return <span key={tag} className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black ${item.className}`}><Icon className="h-3.5 w-3.5" /> {item.label}</span>;
                    })}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <Card className="h-fit overflow-hidden rounded-[1.75rem] border-white/70 bg-white/80 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-card/80">
            <CardContent className="p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Calendar className="h-5 w-5" /></span>
                <div>
                  <h2 className="font-black">Mei 2026</h2>
                  <p className="text-sm text-muted-foreground">{view === "weekly" ? "Fokus minggu aktif" : "Preview kalender bulanan"}</p>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-black text-muted-foreground">
                {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((day) => <span key={day}>{day}</span>)}
              </div>
              <div className="mt-3 grid grid-cols-7 gap-2">
                {monthDays.map((day) => {
                  const active = day >= 25 && day <= 29;
                  const weekend = day === 30 || day === 31;
                  return (
                    <button
                      key={day}
                      className={`aspect-square rounded-2xl border p-1 text-xs transition ${active ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-orange-500/20" : weekend ? "border-accent bg-accent/60 text-accent-foreground" : "bg-background text-muted-foreground hover:border-primary/30"}`}
                    >
                      {day <= 31 ? day : ""}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 rounded-[1.35rem] bg-secondary p-4 text-sm leading-6">
                Weekend difokuskan untuk sweet corner, wedding tasting, dan kolaborasi event. Admin dapat memperbarui menu dari dashboard Supabase.
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="skeleton h-16" />
                <div className="skeleton h-16" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 grid place-items-end bg-black/70 p-3 backdrop-blur-sm md:place-items-center" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-3xl overflow-hidden rounded-[1.75rem] bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <Image src={selected.image} alt={selected.title} fill className="object-cover" sizes="90vw" />
              <Button size="icon" className="absolute right-4 top-4" onClick={() => setSelected(null)} aria-label="Tutup detail menu"><X className="h-4 w-4" /></Button>
            </div>
            <div className="p-6">
              <Badge>{new Date(selected.date).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" })}</Badge>
              <h2 className="mt-4 text-3xl font-black">{selected.title}</h2>
              <p className="mt-3 leading-8 text-muted-foreground">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => {
                  const item = tagStyles[tag];
                  const Icon = item.icon;
                  return <span key={tag} className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black ${item.className}`}><Icon className="h-3.5 w-3.5" /> {item.label}</span>;
                })}
              </div>
              <Button asChild size="lg" className="mt-6 w-full">
                <a href={whatsappUrl(`Halo Yumma Catering, saya ingin pesan menu ${selected.title} untuk tanggal ${selected.date}.`)}>
                  <MessageCircle className="h-4 w-4" /> Pesan via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
