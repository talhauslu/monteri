import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Header2 from '@/components/Header2';
import LanguagePicker from '@/components/LanguagePicker';

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  
  // Check if the locale is valid
  if (!routing.locales.includes(lang)) {
    notFound();
  }
  
  // Get messages
  const messages = await getMessages();
  
  return (
    <html lang={lang} suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <div className="fixed bottom-8 left-8 z-50">
            <LanguagePicker currentLang={"en"} />
            
          </div>
          <div className="fixed bottom-8 right-8 z-50">
            <a
              href="https://wa.me/905425629933"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Monteri | Prime Living',
  description: '✨ Birinci Sınıf Yaşam Alanları',
  icon: '/favicon.ico',
};