import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from 'next'
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from "../../GoogleAnalytics";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: 
    { media: '(prefers-color-scheme: dark)', color: 'black' }
}
const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  metadataBase: new URL('https://lavoiedubienetre.be'),
  title: 'Massage relaxant Courcelles | Shiatsu - Reiki - Reflexologie plantaire',
  description: 'Votre massage relaxant à Courcelles vous permettra de vous détendre pleinement. Venez également essayer une séance de Shiatsu - Reiki - Reflexologie plantaire',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'La voie du bien-être | Détente et Relaxation',
    description: 'Profitez d’un massage unique à Courcelles. Shiatsu, Reiki, et relaxation profonde vous attendent.',
    url: 'https://lavoiedubienetre.be',
    siteName: 'La voie du bien-être',
    locale: 'fr_BE',
    type: 'website',
    images: [{
      url: 'https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg',
      width: 1200,
      height: 627,
      alt: 'La voie du bien-être à Courcelles',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'La voie du bien-être | Shiatsu Reiki Massage à Courcelles',
    card: 'summary_large_image',
    images: 'https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg',
    site:'@voiedubienetre',
    description:'Centre de massage à Courcelles | Shiatsu Reiki Reflexologie Plantaire | La voie du bien-être'

  },
  verification: {
    google: 'google1b18195b39af5559',
    yandex: '',
  },
  alternates: {
		canonical: "https://lavoiedubienetre.be",
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
       <GoogleAnalytics />
       <body className="antialiased max-w-5xl mb-5  md:flex-row mx-4  lg:mx-auto">
   
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      
        </body>
    </html>
  );
}
