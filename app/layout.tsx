import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { content } from "@/data/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${content.personal.name} - ${content.personal.title}`,
  description: content.personal.tagline,
  // TODO: Add your own Open Graph and Twitter Card metadata
  // openGraph: {
  //   title: `${content.personal.name} - ${content.personal.title}`,
  //   description: content.personal.tagline,
  //   url: 'https://yourdomain.com',
  //   siteName: `${content.personal.name} Portfolio`,
  //   images: [{ url: '/og-image.png' }],
  //   locale: 'en_US',
  //   type: 'website',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          
          {/* Analytics Placeholder */}
          {/* 
          TODO: Add analytics integration
          
          Option 1: Plausible Analytics (Privacy-friendly)
          <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
          
          Option 2: Google Analytics
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}} />
          */}
        </ThemeProvider>
      </body>
    </html>
  );
}

