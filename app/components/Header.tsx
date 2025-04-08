"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/public/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/app/components/ui/Drawer";
import { Button } from "@/app/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Changement de style du header au scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-6",
        isScrolled
          ? "bg-background/90 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-medium tracking-tight">
          Patrick David
        </a>

        <nav className="hidden md:flex space-x-8 text-sm">
          <a
            href="#work"
            className="hover-underline transition-colors hover:text-foreground/80"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover-underline transition-colors hover:text-foreground/80"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover-underline transition-colors hover:text-foreground/80"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[60vh]">
              <div className="flex flex-col space-y-6 p-6 items-center justify-center h-full">
                <Link
                  href="#work"
                  className="text-xl font-medium hover-underline transition-colors hover:text-foreground/80 animate-fade-in"
                  style={{ animationDelay: "100ms" }}
                >
                  Work
                </Link>
                <Link
                  href="#about"
                  className="text-xl font-medium hover-underline transition-colors hover:text-foreground/80 animate-fade-in"
                  style={{ animationDelay: "200ms" }}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-xl font-medium hover-underline transition-colors hover:text-foreground/80 animate-fade-in"
                  style={{ animationDelay: "300ms" }}
                >
                  Contact
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
