import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const inquiries = [
  ["Dewi", "Wedding", "350 tamu", "Baru"],
  ["Pak Andi", "Corporate Catering", "80 pax", "Follow up"],
  ["Ibu Ratna", "Catering Harian", "Paket bulanan", "Selesai"]
];

export default function AdminInquiryPage() {
  return (
    <div className="grid gap-6">
      <div><h1 className="text-3xl font-black">Inquiry Management</h1><p className="text-muted-foreground">Kelola wedding inquiry, catering inquiry, dan data kontak pelanggan.</p></div>
      <div className="grid gap-4">{inquiries.map(([name, type, detail, status]) => <Card key={name}><CardContent className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between"><div><p className="font-bold">{name}</p><p className="text-sm text-muted-foreground">{type} · {detail}</p></div><Badge>{status}</Badge></CardContent></Card>)}</div>
    </div>
  );
}
