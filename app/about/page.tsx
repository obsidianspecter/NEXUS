import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-10">About Nexus</h1>
        <div className="prose dark:prose-invert text-lg leading-relaxed">
          <p className="text-muted-foreground">
            Nexus is your gateway to understanding artificial intelligence, machine learning, and the future of technology.
          </p>
          <h2 className="text-3xl font-bold mt-8">Our Mission</h2>
          <p>
            Our goal is to make complex AI concepts accessible to everyone, from beginners to experts. 
            Through insightful articles, hands-on tutorials, and comprehensive resources, 
            we guide you through the ever-evolving landscape of artificial intelligence.
          </p>
          <h2 className="text-3xl font-bold mt-8">Get in Touch</h2>
          <p>Have questions or suggestions? We'd love to hear from you.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild className="px-8 py-4 text-lg">
              <Link href="mailto:contact@nexus.com">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
