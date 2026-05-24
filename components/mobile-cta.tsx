"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

export function MobileStickyCta() {
  return (
    <>
      <a
        href={whatsappUrl("Halo Yumma Catering, saya ingin dibantu memilih paket catering.")}
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-900/20 md:hidden"
        aria-label="Chat WhatsApp Yumma"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-3 bottom-3 z-40 rounded-[1.15rem] border bg-background/95 p-2 shadow-lg backdrop-blur-md md:hidden">
        <Button asChild size="lg" className="h-12 w-full">
          <a href={whatsappUrl("Halo Yumma Catering, saya ingin pesan atau konsultasi.")}>
            <MessageCircle className="h-4 w-4" /> Konsultasi Yumma
          </a>
        </Button>
      </div>
    </>
  );
}
