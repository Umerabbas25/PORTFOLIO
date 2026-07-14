import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Umer Abbas — AI/ML Engineer | GenAI Developer',
  description:
    'Umer Abbas is an AI/ML Engineer and AI Undergraduate at COMSATS Lahore, specializing in RAG pipelines, Agentic AI, and GenAI development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
