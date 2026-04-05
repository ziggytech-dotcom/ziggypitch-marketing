import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZiggyPitch – Send proposals that close",
  description:
    "ZiggyPitch is the modern proposal tool for agencies, consultants, and freelancers. Built-in e-signature, proposal analytics, video intros, and more — all for $29/mo.",
  metadataBase: new URL("https://ziggypitch.com"),
  openGraph: {
    title: "ZiggyPitch – Send proposals that close",
    description:
      "Proposals your clients actually read. Built-in e-sign, analytics, video intros, and expiration timers. $29/mo flat.",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} antialiased`} style={{ background: "#0a0a0a", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
