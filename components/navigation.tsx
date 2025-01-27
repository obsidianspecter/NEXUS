"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Twitter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/topics", label: "Topics" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "https://github.com/obsidianspecter", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/anvin141", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-foreground" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
            <span className="hidden font-bold sm:inline-block">Nexus</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname.startsWith(item.href) ? "text-foreground font-bold" : "text-foreground/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            {socialLinks.map((link) => (
              <Button key={link.href} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
            <ModeToggle />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 border-t pt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg ${pathname.startsWith(item.href) ? "text-foreground font-bold" : "text-foreground/60"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
