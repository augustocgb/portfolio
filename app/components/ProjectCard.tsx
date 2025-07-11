import { Card } from "./Card";
import { CardNoPadding } from "./CardNoPadding";
import { ImageCarousel } from "./ImageCarousel";
import { Button } from "./Button";

export interface ProjectCardProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  tech: string[];
  category: string;
  date: string; // ISO string or year
  links?: { href: string; icon: React.ReactNode; label: string }[];
}

export function ProjectCard({
  title,
  description,
  images,
  tech,
  category,
  date,
  links = [],
}: ProjectCardProps) {
  return (
    <Card>
      <div className="grid gap-8 md:grid-cols-1 items-start">

        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="mt-4 text-sm opacity-70">{category} &middot; {date}</div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 items-start">
          <p className="animate-fade-up mb-2">{description}</p>

        <div>
            <CardNoPadding>
                <div className="w-full">
                <ImageCarousel images={images} className="w-full" style={{ display: "block" }} />
                </div>
            </CardNoPadding>

            {links.length > 0 && (
                <div className="flex gap-2 justify-end mt-4">
                {links.map((link) => (
                    <Button key={link.href} {...link} />
                ))}
                </div>
            )}
        </div>

        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((label) => (
            <span
                key={label}
                className="bg-[--bg-secondary] text-[--text-primary] px-3 py-1 rounded-full text-xs font-semibold shadow border border-[--border]"
              >
                {label}
              </span>
            ))}
        </div>
    </Card>
  );
}
