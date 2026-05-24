"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Instagram, Search, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { vendors } from "@/lib/data";

const categories = ["Semua", "Decoration", "Tent", "Stage", "Photographer", "Videographer", "Makeup artist", "MC"];

export function VendorDirectory() {
  const [active, setActive] = useState("Semua");
  const filtered = useMemo(() => active === "Semua" ? vendors : vendors.filter((vendor) => vendor.category === active), [active]);

  return (
    <section className="section-pad warm-radial">
      <div className="container">
        <SectionHeading eyebrow="Event partnership ecosystem" title="Partner vendor pilihan untuk event yang terasa effortless." description="Filter kategori, lihat portfolio preview, lalu lanjut ke Instagram vendor atau konsultasi paket lengkap bersama Yumma." />
        <div className="mx-auto mb-8 flex max-w-5xl gap-2 overflow-x-auto rounded-full border border-white/70 bg-white/70 p-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-card/70">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)} className={`h-10 flex-none rounded-full px-4 text-sm font-black transition ${active === category ? "bg-primary text-primary-foreground shadow-lg shadow-orange-500/20" : "text-muted-foreground hover:bg-muted"}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? filtered.map((vendor, index) => (
            <motion.div key={vendor.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <Card className="group overflow-hidden rounded-[1.75rem] border-white/70 bg-card/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={vendor.image} alt={vendor.name} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="33vw" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-black text-primary backdrop-blur">
                    <Star className="h-4 w-4 fill-current" /> {vendor.rating}
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-black">{vendor.name}</h2>
                      <p className="text-sm font-semibold text-muted-foreground">{vendor.category}</p>
                    </div>
                    <Badge className="bg-primary/10">{vendor.category}</Badge>
                  </div>
                  <p className="leading-7 text-muted-foreground">{vendor.description}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {vendor.portfolio.map((item) => (
                      <div key={item} className="rounded-2xl bg-muted p-3 text-xs font-black leading-5">{item}</div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="mt-5 w-full bg-background/70">
                    <a href={vendor.instagram}><Instagram className="h-4 w-4" /> Lihat Instagram</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )) : (
            <Card className="col-span-full">
              <CardContent className="grid place-items-center gap-3 p-10 text-center">
                <Search className="h-8 w-8 text-primary" />
                <p className="font-black">Belum ada vendor di kategori ini.</p>
                <p className="text-sm text-muted-foreground">Tim Yumma sedang mengkurasi partner terbaik.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
