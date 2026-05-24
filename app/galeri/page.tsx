"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/data";

const categories = ["Semua", "Catering", "Wedding", "Sweet Corner", "Events", "Behind The Scene"];

export default function GalleryPage() {
  const [active, setActive] = useState("Semua");
  const [lightbox, setLightbox] = useState<(typeof gallery)[number] | null>(null);
  const items = active === "Semua" ? gallery : gallery.filter((item) => item.category === active);

  return (
    <section className="section-pad warm-radial">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="Visual Yumma yang terasa hangat, modern, dan Instagrammable." description="Filter catering, wedding, sweet corner, event, dan behind the scene. Klik foto untuk preview besar." />
        <div className="mx-auto mb-8 flex max-w-4xl gap-2 overflow-x-auto rounded-full border border-white/70 bg-white/70 p-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-card/70">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)} className="flex-none">
              <Badge className={`px-4 py-2 transition ${active === category ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:bg-muted"}`}>{category}</Badge>
            </button>
          ))}
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setLightbox(item)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[1/1]" : "aspect-[4/3]"}`}>
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(min-width: 1024px) 33vw, 100vw" loading={index < 2 ? "eager" : "lazy"} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="font-black">{item.title}</p>
                  <p className="text-xs font-semibold text-white/75">{item.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      {lightbox ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <motion.div initial={{ y: 30, scale: 0.98 }} animate={{ y: 0, scale: 1 }} className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Button size="icon" className="absolute right-4 top-4 z-10" onClick={() => setLightbox(null)} aria-label="Tutup"><X className="h-4 w-4" /></Button>
            <div className="relative aspect-[16/10]"><Image src={lightbox.image} alt={lightbox.title} fill className="object-cover" sizes="90vw" /></div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div><h2 className="text-xl font-black">{lightbox.title}</h2><p className="text-muted-foreground">{lightbox.category}</p></div>
              <Badge><Camera className="mr-1 h-3.5 w-3.5" /> Yumma Gallery</Badge>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
