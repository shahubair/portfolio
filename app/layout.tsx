import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Shah Ubair | AI + Full Stack Developer",
  description: "AI Engineer & Full Stack Developer. NIT Srinagar. Building intelligent systems that matter.",
  keywords: ["Shah Ubair", "AI Engineer", "Full Stack Developer", "NIT Srinagar", "Portfolio"],
  openGraph: {
    title: "Shah Ubair | AI + Full Stack Developer",
    description: "AI Engineer & Full Stack Developer based in Srinagar, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;600;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
