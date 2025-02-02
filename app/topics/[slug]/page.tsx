"use client"; 
import { useParams } from "next/navigation";

const TopicDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const topicDetails: Record<string, { title: string; description: string }> = {
    "deep-learning": {
      title: "Deep Learning",
      description: "A comprehensive guide to deep learning, its architectures, and real-world applications.",
      category: "Artificial Intelligence",
      date: "Feb 2, 2024",
      slug: "deep-learning",
      content: {
        introduction: "Deep learning is a subset of machine learning that uses artificial neural networks to process and learn from vast amounts of data. It has revolutionized industries by enabling AI to perform complex tasks such as image recognition, natural language processing, and autonomous driving.",
        sections: [
          {
            title: "1.1 Introduction to Deep Learning",
            content: JSON.stringify({
              type: 'table',
              headers: ['Concept', 'Description', 'Example'],
              rows: [
                ['Artificial Neural Networks (ANNs)', 'Computational models inspired by the human brain.', 'Image classification, fraud detection'],
                ['Deep Learning', 'Neural networks with multiple hidden layers for complex feature extraction.', 'Speech recognition, self-driving cars'],
                ['Supervised Learning', 'Training models on labeled datasets.', 'Spam detection, facial recognition'],
                ['Unsupervised Learning', 'Finding patterns in unlabeled data.', 'Customer segmentation, anomaly detection']
              ]
            }),
            subsections: [
              {
                title: "Why Deep Learning is Important",
                content: JSON.stringify({
                  type: 'table',
                  headers: ['Advantage', 'Description'],
                  rows: [
                    ['Feature Extraction', 'Automatically extracts complex features from raw data.'],
                    ['High Accuracy', 'Outperforms traditional machine learning in many applications.'],
                    ['Scalability', 'Can handle vast amounts of data using parallel computing.'],
                    ['End-to-End Learning', 'Processes raw data to predictions without manual intervention.']
                  ]
                })
              },
              {
                title: "Recommended Video: Introduction to Deep Learning",
                content: JSON.stringify({
                  type: 'video',
                  title: 'MIT Introduction to Deep Learning | 6.S191',
                  url: 'https://www.youtube.com/watch?v=ErnWZxJovaM',
                  description: 'This lecture from MIT provides a foundational overview of deep learning concepts and applications.'
                })
              }
            ]
          },
          {
            title: "1.2 Deep Learning Architectures",
            content: "Deep learning models are categorized based on their structure and applications.",
            subsections: [
              {
                title: "Types of Deep Learning Models",
                content: JSON.stringify({
                  type: 'table',
                  headers: ['Model Type', 'Description', 'Best Use Cases'],
                  rows: [
                    ['Feedforward Neural Networks (FNNs)', 'Basic neural networks with forward-only data flow.', 'Simple classification tasks'],
                    ['Convolutional Neural Networks (CNNs)', 'Neural networks designed for spatial data processing.', 'Image recognition, object detection'],
                    ['Recurrent Neural Networks (RNNs)', 'Networks with memory for sequential data.', 'Time-series forecasting, speech recognition'],
                    ['Long Short-Term Memory (LSTM)', 'Advanced RNN variant for long-term dependencies.', 'Chatbots, stock market prediction'],
                    ['Transformers', 'State-of-the-art models with attention mechanisms.', 'NLP, text generation, AI assistants']
                  ]
                })
              },
              {
                title: "Recommended Video: Deep Learning Architectures",
                content: JSON.stringify({
                  type: 'video',
                  title: 'Deep Learning: Architectures - Part 1',
                  url: 'https://www.youtube.com/watch?v=WJ-Es3gtR-M',
                  description: 'This video discusses the evolution of deep learning architectures from LeNet to GoogLeNet.'
                })
              }
            ]
          },
          {
            title: "1.3 Training Deep Learning Models",
            content: "Training deep learning models requires large datasets, computing power, and careful tuning of hyperparameters.",
            subsections: [
              {
                title: "Key Components of Training",
                content: JSON.stringify({
                  type: 'table',
                  headers: ['Component', 'Purpose', 'Example'],
                  rows: [
                    ['Dataset', 'Provides input data for training.', 'ImageNet, COCO dataset'],
                    ['Loss Function', 'Measures error between predictions and actual values.', 'Cross-entropy, Mean Squared Error'],
                    ['Optimizer', 'Adjusts weights to minimize loss.', 'SGD, Adam, RMSprop'],
                    ['Epochs', 'Complete passes through the dataset.', '50-100 epochs for deep networks'],
                    ['Batch Size', 'Number of samples processed at a time.', '32, 64, 128']
                  ]
                })
              },
              {
                title: "Recommended Video: Training Deep Learning Models",
                content: JSON.stringify({
                  type: 'video',
                  title: 'Practical Deep Learning for Coders: Lesson 1',
                  url: 'https://www.youtube.com/watch?v=8SF_h3xF3cE',
                  description: 'This lesson introduces practical aspects of training deep learning models, including data handling and model building.'
                })
              }
            ]
          }
        ]
      }
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