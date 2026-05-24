"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  label
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 56;
    const timer = window.setInterval(() => {
      frame += 1;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(value * eased));
      if (frame >= total) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[1.35rem] border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-card/80"
    >
      <p className="text-2xl font-black tracking-tight md:text-3xl">
        {count.toLocaleString("id-ID")}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
    </motion.div>
  );
}
