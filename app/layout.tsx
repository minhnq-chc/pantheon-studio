import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pantheon — Autonomous AI Game Studio Operating System",
  description:
    "14 AI agents running a full indie game studio 24/7. Solo founder ships 4–6 games per year, operating like a 30-person studio. Built with Claude Code.",
  keywords: [
    "AI agents",
    "autonomous game studio",
    "indie games",
    "multi-agent systems",
    "Claude Code",
    "AI-driven development",
    "LiveOps automation",
  ],
  openGraph: {
    title: "Pantheon — Autonomous AI Game Studio OS",
    description:
      "14 AI agents. One solo founder. A full indie game studio that ships, operates, and evolves itself.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantheon — Autonomous AI Game Studio OS",
    description:
      "14 AI agents running a full indie game studio 24/7. Built with Claude Code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
