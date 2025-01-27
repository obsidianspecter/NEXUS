import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  {
    title: "Leveraging Neural Networks for Predictive Maintenance",
    description: "How AI can predict and prevent machine failures using sensory data.",
    category: "Predictive Maintenance",
    date: "Jan 27, 2024",
    slug: "leveraging-neural-networks",
  },
  {
    title: "Understanding Sensor Data in AI Systems",
    description: "A deep dive into processing and analyzing sensor data for AI applications.",
    category: "Sensor Data Analysis",
    date: "Jan 26, 2024",
    slug: "understanding-sensor-data",
  },
  {
    title: "Model Deployment Strategies for AI Systems",
    description: "Best practices for deploying AI models in production environments.",
    category: "Model Deployment",
    date: "Jan 25, 2024",
    slug: "model-deployment-strategies",
  },
  {
    title: "Anomaly Detection with AI",
    description: "Identifying potential failures through anomaly detection in machine operations.",
    category: "Anomaly Detection",
    date: "Jan 24, 2024",
    slug: "anomaly-detection-ai",
  },
  {
    title: "Integrating IoT and AI for Smart Maintenance",
    description: "Exploring the synergy between IoT devices and AI models for predictive insights.",
    category: "IoT and AI Integration",
    date: "Jan 23, 2024",
    slug: "iot-ai-integration",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.slug}>
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
          ))}
        </div>
      </div>
    </div>
  )
}