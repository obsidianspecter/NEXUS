"use client"; 
import { useParams } from "next/navigation";

const TopicDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const topicDetails: Record<string, { title: string; description: string }> = {
    "deep-learning": {
      title: "Deep Learning",
      description: "Explore neural networks, CNNs, RNNs, and more in deep learning.",
    },
    "machine-learning": {
      title: "Machine Learning",
      description: "Discover machine learning algorithms, models, and applications.",
    },
    "ai-ethics": {
      title: "AI Ethics",
      description: "Learn about responsible AI development and implementation.",
    },
    "computer-vision": {
      title: "Computer Vision",
      description: "Object detection, image segmentation, and more.",
    },
    "natural-language-processing": {
      title: "Natural Language Processing",
      description: "Text processing, sentiment analysis, and chatbots.",
    },
    "ai-in-healthcare": {
      title: "AI in Healthcare",
      description: "Explore AI applications in healthcare and medicine.",
    },
    "predictive-maintenance": {
      title: "Predictive Maintenance",
      description: "Leveraging AI for predictive maintenance and failure prevention.",
    },
    "sensor-data-analysis": {
      title: "Sensor Data Analysis",
      description: "Processing sensory data for intelligent decision-making.",
    },
    "model-deployment": {
      title: "Model Deployment",
      description: "Deploying machine learning models in production environments.",
    },
    "anomaly-detection": {
      title: "Anomaly Detection",
      description: "Detecting anomalies in machine operations using AI.",
    },
    "iot-and-ai-integration": {
      title: "IoT and AI Integration",
      description: "Combining IoT devices with AI for predictive insights.",
    },
  };

  const topic = topicDetails[slug];

  if (!topic) {
    return <div className="container py-12">Topic not found.</div>;
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">{topic.title}</h1>
      <p className="text-lg text-muted-foreground">{topic.description}</p>
    </div>
  );
};

export default TopicDetailPage;