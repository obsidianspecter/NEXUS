"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="flex-grow flex items-center justify-center bg-gradient-to-b from-background via-muted to-background py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-6 text-center space-y-8">
          {/* Logo with Glow Effect */}
          <motion.div
            className="mx-auto w-28 h-28 bg-foreground relative"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            animate={{
              boxShadow: "0px 0px 20px 5px rgba(29, 78, 216, 0.8)", // Glow Effect
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          />
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="text-primary">Nexus</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your gateway to artificial intelligence, machine learning, and the future of technology. Discover insightful
            articles, hands-on tutorials, and stay updated with the latest trends in AI development.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" asChild className="px-6 py-3 font-semibold">
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-6 py-3 font-semibold">
              <Link href="/topics">Explore Topics</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-muted">
        <div className="container px-6">
          <motion.h2
            className="text-4xl font-bold tracking-tight mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground">
                      {post.category} • {post.date}
                    </div>
                    <CardTitle className="text-2xl mt-4">{post.title}</CardTitle>
                    <CardDescription className="text-lg">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={
                        post.category === "Deep Learning" || post.category === "Topics"
                          ? `/topics/${post.slug}`
                          : `/blog/${post.slug}`
                      }
                      className="text-primary hover:underline font-medium"
                    >
                      Read more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-background to-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Stay Updated</h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto mb-10 leading-relaxed">
            Subscribe to our newsletter for the latest articles and updates. Get weekly insights, expert opinions, and
            in-depth technical tutorials straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 text-lg rounded-md" />
            <Button type="submit" className="px-6 py-3 font-semibold text-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
