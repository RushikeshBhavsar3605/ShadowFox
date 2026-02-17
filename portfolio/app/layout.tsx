import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rushikesh Bhavsar | Software Engineer",
    template: "%s | Rushikesh Bhavsar",
  },
  description:
    "Rushikesh Bhavsar - Software Engineer. Backend engineer focused on distributed systems, building production-grade infrastructure.",
  keywords: [
    "Rushikesh Bhavsar",
    "Software Engineer",
    "Distributed Systems",
    "Golang",
    "Microservices",
    "TypeScript",
  ],
  authors: [{ name: "Rushikesh Bhavsar" }],
  creator: "Rushikesh Bhavsar",

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    url: "/",
    title: "Rushikesh Bhavsar — Software Engineer",
    description:
      "Software Engineer focused on distributed systems, building production-grade infrastructure.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rushikesh Bhavsar — Software Engineer",
      },
    ],
    siteName: "Rushikesh Bhavsar",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Bhavsar — Software Engineer",
    description:
      "Software Engineer | Golang | Next.js | TypeScript | Distributed Systems",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rushikesh Bhavsar — Software Engineer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: "Rushikesh Bhavsar",
    url: siteUrl,
    image: `${siteUrl}/profile-avatar.png`,
    jobTitle: "Software Engineer",
    description:
      "Backend engineer focused on distributed systems and scalable infrastructure.",
    knowsAbout: [
      "Distributed Systems",
      "Golang",
      "Next.js",
      "TypeScript",
      "System Design",
      "Microservices",
    ],
    sameAs: [
      "https://github.com/RushikeshBhavsar3605",
      "https://www.linkedin.com/in/rushikesh-bhavsar-swe",
      "https://leetcode.com/u/rushikesh-bhavsar",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
