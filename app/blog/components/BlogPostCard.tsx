"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostCardProps {
  post: {
    title: string
    description: string
    category: string
    date: string
    slug: string
  }
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="text-sm text-muted-foreground">
            {post.category} • {post.date}
          </div>
          <CardTitle className="text-2xl mt-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-base">{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
            Read more →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
} 