import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
