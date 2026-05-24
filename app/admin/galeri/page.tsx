import Image from "next/image";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/form";
import { gallery } from "@/lib/data";

export default function AdminGalleryPage() {
  return (
    <div className="grid gap-6">
      <div><h1 className="text-3xl font-black">Gallery Management</h1><p className="text-muted-foreground">Upload dan kelola gambar Supabase Storage.</p></div>
      <Card><CardContent className="grid gap-4 p-6 md:grid-cols-[1fr_1fr_auto]"><Input placeholder="Judul foto" /><Select><option>Catering</option><option>Wedding</option><option>Sweet Corner</option><option>Events</option><option>Behind The Scene</option></Select><Button><Upload className="h-4 w-4" /> Upload</Button><Input type="file" className="md:col-span-3" /></CardContent></Card>
      <div className="grid gap-4 md:grid-cols-3">{gallery.map((item) => <Card key={item.id} className="overflow-hidden"><div className="relative aspect-[4/3]"><Image src={item.image} alt={item.title} fill className="object-cover" /></div><CardContent className="p-4"><p className="font-bold">{item.title}</p><p className="text-sm text-muted-foreground">{item.category}</p></CardContent></Card>)}</div>
    </div>
  );
}
