import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/form";
import { vendors } from "@/lib/data";

export default function AdminVendorPage() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between gap-3"><div><h1 className="text-3xl font-black">Vendor Management</h1><p className="text-muted-foreground">Kelola data partner vendor.</p></div><Button><Plus className="h-4 w-4" /> Tambah vendor</Button></div>
      <Card><CardContent className="grid gap-4 p-6 md:grid-cols-2"><Input placeholder="Nama vendor" /><Select><option>Decoration</option><option>Tent</option><option>Stage</option><option>Photographer</option><option>Videographer</option><option>Makeup artist</option><option>MC</option></Select><Input placeholder="Instagram URL" /><Input placeholder="Rating" /><Textarea className="md:col-span-2" placeholder="Deskripsi singkat" /></CardContent></Card>
      <div className="grid gap-4">{vendors.map((vendor) => <Card key={vendor.id}><CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center"><Image src={vendor.image} alt={vendor.name} width={88} height={88} className="h-20 w-20 rounded-2xl object-cover" /><div className="flex-1"><p className="font-bold">{vendor.name}</p><p className="text-sm text-muted-foreground">{vendor.category} - rating {vendor.rating}</p></div><Button variant="outline">Edit</Button></CardContent></Card>)}</div>
    </div>
  );
}
