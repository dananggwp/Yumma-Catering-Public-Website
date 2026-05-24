import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/form";
import { menus } from "@/lib/data";

export default function AdminMenuPage() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div><h1 className="text-3xl font-black">Menu Management</h1><p className="text-muted-foreground">CRUD menu, foto, deskripsi, tag, tanggal, dan kategori.</p></div>
        <Button><Plus className="h-4 w-4" /> Tambah menu</Button>
      </div>
      <Card><CardContent className="grid gap-4 p-6 md:grid-cols-2"><Input placeholder="Nama menu" /><Input type="date" /><Select><option>Daily Catering</option><option>Sweet Corner</option><option>Corporate</option></Select><Input placeholder="Tag: favorite, healthy" /><Textarea className="md:col-span-2" placeholder="Deskripsi menu" /><Input className="md:col-span-2" type="file" /></CardContent></Card>
      <div className="grid gap-4">
        {menus.map((menu) => <Card key={menu.id}><CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center"><Image src={menu.image} alt={menu.title} width={96} height={96} className="h-24 w-24 rounded-2xl object-cover" /><div className="flex-1"><p className="font-bold">{menu.title}</p><p className="text-sm text-muted-foreground">{menu.date} · {menu.tags.join(", ")}</p></div><Button variant="outline">Edit</Button></CardContent></Card>)}
      </div>
    </div>
  );
}
