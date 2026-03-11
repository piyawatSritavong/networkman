import type { Metadata } from "next";
import { Noto_Sans_Thai, Space_Grotesk } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Network Man | Private Network & Smart Automation",
  description:
    "Network Man ให้บริการออกแบบและติดตั้ง Private Network, ที่ปรึกษาระบบ On-Premises/On-Cloud, และพัฒนา Software + Hardware + IoT Automation แบบครบวงจร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
