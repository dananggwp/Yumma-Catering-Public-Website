import { ImageIcon, MessageSquare, Store, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { gallery, menus, vendors } from "@/lib/data";

export const metadata = { title: "Admin Dashboard" };

export default function AdminPage() {
  const stats: [string, number, LucideIcon][] = [
    ["Total menu items", menus.length, Utensils],
    ["Total inquiries", 18, MessageSquare],
    ["Total vendors", vendors.length, Store],
    ["Total gallery uploads", gallery.length, ImageIcon]
  ];

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-black">Dashboard Overview</h1>
        <p className="mt-2 text-muted-foreground">Ringkasan operasional Yumma Catering.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, Icon]) => <Card key={String(label)}><CardContent className="p-5"><Icon className="mb-5 h-7 w-7 text-primary" /><p className="text-sm font-semibold text-muted-foreground">{String(label)}</p><p className="mt-2 text-3xl font-black">{String(value)}</p></CardContent></Card>)}
      </div>
      <Card><CardContent className="p-6"><h2 className="text-xl font-bold">Hari ini</h2><div className="mt-5 grid gap-3 text-sm text-muted-foreground"><p>3 inquiry wedding menunggu follow up.</p><p>Menu Jumat paling sering diklik minggu ini.</p><p>2 partner vendor siap ditampilkan setelah kurasi portfolio.</p></div></CardContent></Card>
    </div>
  );
}
