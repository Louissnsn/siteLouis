import { cn } from "@/public/lib/utils";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
  className?: string;
}

export default function ProjectCard({
  title,
  category,
  imageUrl,
  link,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block relative overflow-hidden aspect-[4/3] bg-muted",
        className
      )}
    >
      <div className="absolute inset-0 bg-pink group-hover:bg-black/10 transition-colors duration-300"></div>

      <div className="relative h-full w-full overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 overflow-hidden">
        <div className="transform translate-y-2 group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-xs uppercase tracking-wider text-foreground/70 mb-1">
            {category}
          </p>
          <h3 className="text-lg md:text-xl font-medium text-foreground break-words">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
