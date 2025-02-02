import { notFound } from "next/navigation"
import { posts } from "../components/BlogData"
import { BlogPostContent } from "../components/BlogPostContent"

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}