import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/obsidianspecter", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/anvin141", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="border-t border-gradient-to-r from-background to-muted">
      <div className="container flex flex-col items-center justify-between gap-8 py-12 md:h-32 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="h-6 w-6 bg-foreground" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
            <span className="font-bold text-lg md:text-xl">
              Nexus
              <span className="text-primary">AI</span>
            </span>
          </Link>
          <p className="text-center text-sm leading-loose md:text-left md:text-gray-600">
            Built with ❤️ by <span className="font-medium">NEXORIS</span>. The source code is available on{" "}
            <a
              href="https://github.com/obsidianspecter/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex space-x-8 md:ml-8">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground py-8 border-t border-muted">
        © {new Date().getFullYear()} Nexus. All rights reserved.
        <br className="hidden md:block" />
        <span className="text-primary">Empowering AI Innovation</span>
      </div>
    </footer>
  )
}
