"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topics = [
  {
    title: "Deep Learning",
    description: "Explore neural networks, CNNs, RNNs, and transformers.",
    slug: "deep-learning",
    count: 18,
  },
  {
    title: "Machine Learning",
    description: "Learn about supervised and unsupervised ML techniques.",
    slug: "machine-learning",
    count: 14,
  },
  {
    title: "AI Ethics",
    description: "Understand responsible AI development and implementation.",
    slug: "ai-ethics",
    count: 8,
  },
  {
    title: "Computer Vision",
    description: "Object detection, image segmentation, and more.",
    slug: "computer-vision",
    count: 10,
  },
  {
    title: "Natural Language Processing",
    description: "Text processing, sentiment analysis, and chatbots.",
    slug: "nlp",
    count: 12,
  },
  {
    title: "AI in Healthcare",
    description: "Explore AI applications in healthcare and medicine.",
    slug: "ai-healthcare",
    count: 7,
  },
  {
    title: "Predictive Maintenance",
    description: "Leveraging AI for predictive maintenance and failure prevention.",
    slug: "predictive-maintenance",
    count: 9,
  },
  {
    title: "Sensor Data Analysis",
    description: "Processing sensory data for intelligent decision-making.",
    slug: "sensor-data-analysis",
    count: 6,
  },
  {
    title: "Model Deployment",
    description: "Deploying machine learning models in production environments.",
    slug: "model-deployment",
    count: 11,
  },
  {
    title: "Anomaly Detection",
    description: "Detecting anomalies in machine operations using AI.",
    slug: "anomaly-detection",
    count: 8,
  },
  {
    title: "IoT and AI Integration",
    description: "Combining IoT devices with AI for predictive insights.",
    slug: "iot-ai-integration",
    count: 7,
  },
]

export default function TopicsPage() {
  return (
    <motion.div
      className="container py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold tracking-tight mb-12 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Explore AI Topics
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Dive into various AI topics ranging from deep learning to ethical AI, and discover insights that can help you
        advance your knowledge and career.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {topics.map((topic) => (
          <motion.div
            key={topic.slug}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card
              className="hover:shadow-2xl transition-all rounded-xl overflow-hidden border border-border"
            >
              <CardHeader className="bg-muted px-6 py-4">
                <CardTitle className="text-xl font-bold text-primary">{topic.title}</CardTitle>
                <CardDescription className="text-md">{topic.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-6 py-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {topic.count} articles
                </span>
                <Link
                  href={`/topics/${topic.slug}`}
                  className="text-primary font-medium hover:underline transition-all"
                >
                  View articles →
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
