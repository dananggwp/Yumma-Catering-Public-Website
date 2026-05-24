import Link from "next/link";
import { BarChart3, ImageIcon, MessageSquare, PackageOpen, Store, Utensils } from "lucide-react";

const nav = [
  ["Overview", "/admin", BarChart3],
  ["Menu", "/admin/menu", Utensils],
  ["Vendor", "/admin/vendor", Store],
  ["Galeri", "/admin/galeri", ImageIcon],
  ["Inquiry", "/admin/inquiry", MessageSquare],
  ["FAQ", "/admin/faq", PackageOpen]
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t bg-muted/35">
      <div className="container grid min-h-screen gap-6 py-6 lg:grid-cols-[250px_1fr]">
        <aside className="h-fit rounded-[1.5rem] border bg-card p-3 lg:sticky lg:top-24">
          <p className="px-3 py-3 text-sm font-black uppercase tracking-wider text-muted-foreground">Admin Yumma</p>
          <nav className="grid gap-1">
            {nav.map(([label, href, Icon]) => (
              <Link key={String(href)} href={String(href)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold hover:bg-muted">
                <Icon className="h-4 w-4 text-primary" /> {String(label)}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
