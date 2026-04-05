import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sedat Irtas | Full-Stack Developer & AI Systems Engineer",
  description: "130K+ lines production code, 400+ API endpoints, autonomous agent systems. Full-stack developer specializing in real-time data systems, AI agents, and scalable platform architecture.",
  metadataBase: new URL("https://sedatirtas.vercel.app"),
  openGraph: {
    title: "Sedat Irtas | Full-Stack Developer & AI Systems Engineer",
    description: "130K+ lines production code, 400+ API endpoints, autonomous agent systems",
    url: "https://sedatirtas.vercel.app",
    type: "website",
    siteName: "Sedat Irtas Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedat Irtas | Full-Stack Developer & AI Systems Engineer",
    description: "130K+ lines production code, 400+ API endpoints, autonomous agent systems",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sedatirtas.vercel.app",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        {/* SSR/SEO fix: ensure content is visible before JS hydration.
            Framer Motion sets inline opacity:0 on initial render which
            hides content from crawlers. This overrides it until JS loads
            and adds the 'hydrated' class. */}
        <style dangerouslySetInnerHTML={{ __html: `
          html:not(.hydrated) [style*="opacity: 0"],
          html:not(.hydrated) [style*="opacity:0"] {
            opacity: 1 !important;
            filter: none !important;
          }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('DOMContentLoaded', function() {
            requestAnimationFrame(function() {
              document.documentElement.classList.add('hydrated');
            });
          });
        `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
