// app/layout.jsx

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"; // Named import
import { Navigation } from "@/components/navigation"; // Lowercase filename
import { Footer } from "@/components/footer"; // Lowercase filename
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  title: "Nexus - AI and Machine Learning Blog",
  description: "Exploring the frontiers of artificial intelligence and machine learning, covering insights, tutorials, and latest trends.",
  keywords: [
    "AI Blog",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "AI Trends",
  ],
  authors: [{ name: "Nexus Team", url: "https://nexus.com" }],
  openGraph: {
    title: "Nexus - AI and Machine Learning Blog",
    description: "Exploring AI frontiers with expert insights and tutorials.",
    url: "https://nexus.com",
    siteName: "Nexus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus AI Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Additional meta tags can be added here if needed */}
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col transition-all duration-300">
            {/* === Navigation === */}
            <Navigation />

            {/* === Main Content === */}
            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
              {children}
            </main>

            {/* === Footer === */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
