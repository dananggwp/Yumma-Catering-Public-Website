"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn, whatsappUrl } from "@/lib/utils";

const nav = [
  ["Menu", "/menu"],
  ["Paket", "/paket"],
  ["Wedding", "/wedding-event"],
  ["Vendor", "/vendor"],
  ["Galeri", "/galeri"],
  ["Tentang", "/tentang"],
  ["Kontak", "/kontak"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 px-3 py-3 backdrop-blur-xl">
      <nav className="container flex h-[3.75rem] items-center justify-between rounded-full border bg-card/95 px-3 shadow-[0_14px_44px_-34px_rgba(96,54,28,0.55)] backdrop-blur-xl sm:px-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
        <Image
          src="/images/logo/yumma-catering-logo-2.jpg"
          alt="Yumma Catering"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover shadow-sm shadow-orange-500/20"
        />
          <span className="truncate text-[15px] font-black tracking-tight sm:text-lg">Yumma Catering</span>
        </Link>
        <div className="hidden items-center gap-0.5 rounded-full bg-muted/50 p-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-3.5 py-2 text-[13px] font-bold text-muted-foreground transition hover:bg-card hover:text-foreground hover:shadow-sm">
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Ganti tema">
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="hidden h-4 w-4 dark:block" />
          </Button>
          <Button asChild className="h-10 px-4">
          <a
            href={whatsappUrl("Halo Yumma Catering, saya ingin konsultasi catering.")}
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full lg:hidden" onClick={() => setOpen(!open)} aria-label="Buka menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>
      <div className={cn("container mt-2 grid gap-1 overflow-hidden rounded-[1.25rem] border bg-card px-3 shadow-sm transition-all lg:hidden", open ? "max-h-96 py-4" : "max-h-0 border-transparent py-0")}>
        {nav.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold hover:bg-muted">
            {label}
          </Link>
        ))}
        <Button asChild className="mt-2 h-11">
          <a href={whatsappUrl("Halo Yumma Catering, saya ingin bertanya.")}>Pesan via WhatsApp</a>
        </Button>
      </div>
    </header>
  );
}
