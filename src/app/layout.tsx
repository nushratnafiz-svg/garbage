import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description: "Full Stack Developer specializing in React, TypeScript, and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}