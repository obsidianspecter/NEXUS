"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BlogList } from "./components/BlogList"

export default function BlogPage() {
  return (
    <motion.div
      className="container py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Blog</h1>
        <BlogList />
      </motion.div>
    </motion.div>
  )
}
