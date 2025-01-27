import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const featuredPosts = [
  {
    title: "Understanding Neural Networks",
    description: "A comprehensive guide to the fundamentals of neural networks, covering architecture, applications, and optimization techniques.",
    category: "Deep Learning",
    date: "Jan 27, 2024",
    slug: "understanding-neural-networks",
  },
  {
    title: "The Future of AI",
    description: "Exploring upcoming trends in artificial intelligence, including ethical considerations, emerging technologies, and industry applications.",
    category: "AI Trends",
    date: "Jan 26, 2024",
    slug: "future-of-ai",
  },
  {
    title: "Machine Learning Best Practices",
    description: "Essential tips for implementing ML solutions effectively, covering data preprocessing, model selection, and evaluation strategies.",
    category: "Best Practices",
    date: "Jan 25, 2024",
    slug: "ml-best-practices",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow flex items-center justify-center bg-background py-20">
        <div className="container px-4 space-y-6 text-center">
          <div
            className="mx-auto w-24 h-24 bg-foreground"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Welcome to Nexus</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
            Your gateway to artificial intelligence, machine learning, and the future of technology. Discover insightful articles, hands-on tutorials, and stay updated with the latest trends in AI development.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/topics">Explore Topics</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-muted-foreground">
                    {post.category} • {post.date}
                  </div>
                  <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Subscribe to our newsletter for the latest articles and updates. Get weekly insights, expert opinions, and in-depth technical tutorials straight to your inbox.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
