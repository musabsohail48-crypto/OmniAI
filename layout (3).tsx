import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ContentAI Toolkit",
  description: "All-in-one AI content creation toolkit.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}