"use client"

import { motion } from "framer-motion"
import { BlogPostCard } from "./BlogPostCard"
import { posts } from "./BlogData" // Removed BlogPost import as it may not be needed

export function BlogList() {
  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {posts.map((post: BlogPost) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </motion.div>
  )
} 