"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/form";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError("Email atau password belum sesuai.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <section className="grid min-h-[80vh] place-items-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-7">
          <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Lock className="h-6 w-6" /></span>
          <h1 className="text-2xl font-black">Login Admin Yumma</h1>
          <p className="mt-2 text-sm text-muted-foreground">Akses khusus tim untuk mengelola menu, vendor, galeri, inquiry, dan FAQ chatbot.</p>
          <form onSubmit={submit} className="mt-6 grid gap-4">
            <Input type="email" placeholder="Email admin" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error ? <p className="text-sm font-semibold text-destructive">{error}</p> : null}
            <Button disabled={loading}>{loading ? "Memeriksa..." : "Masuk Dashboard"}</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
