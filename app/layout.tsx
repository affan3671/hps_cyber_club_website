import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HPS Cybersecurity Club",
  description:
    "Official Cybersecurity Awareness Club of Hamdard Public School. Learn safe digital habits, identify online scams, and take the Cyber Safety Pledge.",
  keywords: [
    "Cyber Shield HPS",
    "Hamdard Public School",
    "cybersecurity club",
    "student cyber safety",
    "phishing prevention",
    "1930 helpline",
    "cybercrime awareness",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark antialiased selection:bg-[#ff0055] selection:text-white`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} min-h-screen flex flex-col bg-[#060709] text-[#f4f4f5]`}
      >
        {children}
      </body>
    </html>
  );
}
