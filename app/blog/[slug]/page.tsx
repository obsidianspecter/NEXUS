import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const posts = {
  "leveraging-neural-networks": {
    title: "Leveraging Neural Networks for Predictive Maintenance",
    content:
      "How AI can predict and prevent machine failures using sensory data. This involves analyzing patterns and anomalies in data streams from various sensors to anticipate potential failures before they occur.",
    date: "Jan 27, 2024",
    category: "Predictive Maintenance",
  },
  "understanding-sensor-data": {
    title: "Understanding Sensor Data in AI Systems",
    content:
      "Sensor data is crucial for AI-based predictive maintenance. It includes temperature, vibration, and pressure readings that AI models analyze to detect abnormalities and predict machine failures.",
    date: "Jan 26, 2024",
    category: "Sensor Data Analysis",
  },
  "model-deployment-strategies": {
    title: "Model Deployment Strategies for AI Systems",
    content:
      "Deploying AI models efficiently requires choosing the right infrastructure, ensuring scalability, and monitoring performance over time to adapt to changing data patterns.",
    date: "Jan 25, 2024",
    category: "Model Deployment",
  },
  "anomaly-detection-ai": {
    title: "Anomaly Detection with AI",
    content:
      "AI-driven anomaly detection helps identify potential failures in industrial machines by learning normal operational patterns and flagging deviations.",
    date: "Jan 24, 2024",
    category: "Anomaly Detection",
  },
  "iot-ai-integration": {
    title: "Integrating IoT and AI for Smart Maintenance",
    content:
      "Combining IoT devices with AI models enables real-time monitoring and predictive insights, reducing downtime and improving operational efficiency.",
    date: "Jan 23, 2024",
    category: "IoT and AI Integration",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">← Back to Blog</Link>
        </Button>
        <div className="text-sm text-muted-foreground mb-2">
          {post.category} • {post.date}
        </div>
        <h1 className="text-4xl font-bold tracking-tighter mb-8">{post.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}
