import type { Metadata } from "next";
import { resume } from "@/content/resume";
import "./globals.css";

export const metadata: Metadata = {
  title: `${resume.name} 이력서`,
  description: `${resume.name} 이력서`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
