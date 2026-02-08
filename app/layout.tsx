import type { Metadata } from "next";
import { Inter, Prompt, Kanit, Sarabun } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  weight: ["300", "400", "500", "700"],
  subsets: ["thai", "latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Genoveq | ผลิตภัณฑ์เสริมอาหารแม่นยำเพื่อสุขภาพเชิงรุก",
  description: "คืนความสมดุลพื้นฐาน เพื่อศักยภาพสูงสุดของชีวิต ด้วยวิทยาศาสตร์เบื้องหลังสุขภาพองค์รวม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${inter.variable} ${prompt.variable} ${kanit.variable} ${sarabun.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
