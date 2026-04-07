import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduVerse — Professional Online Courses",
  description:
    "Learn in-demand tech skills with expert-led online courses. MERN Stack, Java Full Stack, Data Analytics, AI/ML, IoT & Embedded Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-100">
        {children}
      </body>
    </html>
  );
}
