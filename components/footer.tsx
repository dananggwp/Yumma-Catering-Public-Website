import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
          <Image
          src="/images/logo/yumma-catering-logo-2.jpg"
          alt="Yumma Catering"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover shadow-sm shadow-orange-500/20"
        />
            <span className="text-xl font-black">Yumma Catering</span>
          </div>
          <p className="max-w-md leading-7 text-muted-foreground">{site.description}</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Layanan</h3>
          <div className="grid gap-3 text-sm text-muted-foreground">
            <Link href="/menu">Menu Mingguan</Link>
            <Link href="/paket">Paket Catering</Link>
            <Link href="/wedding-event">Wedding & Event</Link>
            <Link href="/vendor">Partner Vendor</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Kontak Cepat</h3>
          <div className="grid gap-3 text-sm text-muted-foreground">
            <a className="flex items-center gap-2" href={whatsappUrl("Halo Yumma Catering, saya ingin informasi layanan.")}><MessageCircle className="h-4 w-4" /> WhatsApp Admin</a>
            <a className="flex items-center gap-2" href={site.instagram}><Instagram className="h-4 w-4" /> Instagram</a>
            <Link className="flex items-center gap-2" href="/kontak"><MapPin className="h-4 w-4" /> Lokasi & Jam Operasional</Link>
          </div>
        </div>
      </div>
      <div className="container border-t py-5 text-sm text-muted-foreground">
        © 2026 Yumma Catering. Dibangun untuk keluarga, event, dan partner terbaik.
      </div>
    </footer>
  );
}
