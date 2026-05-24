import type { Metadata } from 'next';
import './globals.css';
import { MithasProvider } from '@/lib/store';
import { Toaster } from '@/components/ui/toaster';
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { AuthSystem } from "@/components/AuthSystem";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: 'Mithas - Lucknow ka Swad, Mandiron ka Aashirwad',
  description: 'Premium sweets and authenticated temple Prasad delivery from Lucknow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Mukta:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <MithasProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <CartDrawer />
          <AuthSystem />
          <WhatsAppFAB />
          <Toaster />
        </MithasProvider>
      </body>
    </html>
  );
}

