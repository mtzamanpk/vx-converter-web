import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "VX Converter — Rich Social Embeds for Discord",
    template: "%s | VX Converter",
  },
  description:
    "VX Converter turns X/Twitter, TikTok, and Instagram links into rich Discord embeds instantly. Safer, cleaner, and faster sharing for your server.",
  keywords: [
    "Discord bot",
    "link unroller",
    "Twitter embeds",
    "TikTok embeds",
    "Instagram embeds",
    "Discord",
    "VX Converter",
  ],
  applicationName: "VX Converter",
  metadataBase: new URL("https://vx-converter.example"),
  openGraph: {
    type: "website",
    title: "VX Converter — Rich Social Embeds for Discord",
    description:
      "Transform social links into beautiful, safe Discord embeds. Supports X/Twitter, TikTok, and Instagram.",
    url: "https://vx-converter.example",
    images: [
      {
        url: "/VX_Converter_logo.jpg",
        width: 1200,
        height: 630,
        alt: "VX Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VX Converter — Rich Social Embeds for Discord",
    description:
      "Transform social links into beautiful, safe Discord embeds. Supports X/Twitter, TikTok, and Instagram.",
    images: ["/VX_Converter_logo.jpg"],
  },
  icons: {
    icon: [{ url: "/vx-icon.svg", type: "image/svg+xml" }],
    shortcut: "/vx-icon.svg",
    apple: "/VX_Converter_logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#151715",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
