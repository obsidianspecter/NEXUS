"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/obsidianspecter", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/anvin141", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <motion.footer
      className="border-t border-gradient-to-r from-background to-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container flex flex-col items-center justify-between gap-8 py-12 md:h-32 md:flex-row">
        <motion.div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <motion.div
              className="h-6 w-6 bg-foreground"
              style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="font-bold text-lg md:text-xl">
              Nexus<span className="text-primary">AI</span>
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
        </motion.div>
        <motion.div
          className="flex space-x-8 md:ml-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="text-center text-sm text-muted-foreground py-8 border-t border-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        © {new Date().getFullYear()} Nexus. All rights reserved.
        <br className="hidden md:block" />
        <span className="text-primary">Empowering AI Innovation</span>
      </motion.div>
    </motion.footer>
  )
}
