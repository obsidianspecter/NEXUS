"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <motion.div
      className="container py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <motion.h1
          className="text-5xl font-extrabold tracking-tight mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-primary">Nexus</span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground leading-relaxed mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nexus is your gateway to understanding artificial intelligence, machine learning, and the future of technology.
        </motion.p>

        {/* Mission Section */}
        <motion.div
          className="bg-muted rounded-lg p-8 shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our goal is to make complex AI concepts accessible to everyone, from beginners to experts. Through insightful articles, 
            hands-on tutorials, and comprehensive resources, we guide you through the ever-evolving landscape of artificial intelligence.
          </p>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="bg-background mt-10 rounded-lg p-8 shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-6">
            Have questions or suggestions? We'd love to hear from you. Reach out to us and let’s explore the possibilities together.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="px-8 py-4 text-lg font-medium hover:scale-105 transition-transform duration-200"
              aria-label="Contact us via email"
            >
              <Link href="mailto:contact@nexus.com">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Additional Section for Social Media Links */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Connect with Us</h2>
          <div className="flex justify-center gap-6">
            <Link href="https://github.com/obsidianspecter" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="px-4 py-2">
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/anvin141" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="px-4 py-2">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="px-4 py-2">
                Twitter
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
