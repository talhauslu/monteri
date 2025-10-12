import Link from "next/link";
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full p-4 bg-stone-950 text-white mt-8">
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
        {/* Left: About */}
        <div className="flex-1 p-6 flex items-center flex-col">
          <h3 className="text-lg font-semibold mb-2"> {t('about.title')}</h3>
          <hr className="mb-2 w-1/3" />
          <p className="text-sm text-center pl-6 pr-6">
             {t('about.description')}
          </p>
        </div>
        {/* Center: Contact-Info */}
        <div className="flex-1 p-6 flex items-center flex-col">
          <h3 className="text-lg font-semibold mb-2"> {t('contact')}</h3>
          <hr className="mb-2 w-1/3" />
          <p className="">Mahmudiye Mahallesi, Özlem Sokak No:3</p>
          <p className="mb-2">Bursa/İnegöl 16400</p>
          <p className="mb-1">
            <a href="mailto:info@monteri.com" className="hover:underline">info@monteri.com</a>
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="https://www.facebook.com/monterisofas/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa fa-facebook-official fa hover:text-blue-500" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/monteri.tr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa fa-instagram fa hover:text-pink-500" aria-hidden="true"></i>
            </a>
            <a href="https://wa.me/905425629933" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <i className="fa fa-whatsapp fa hover:text-green-500" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        {/* Right: Quick-Links */}
        <div className="flex-1 p-6 flex items-center flex-col">
          <h3 className="text-lg font-semibold mb-2"> {t('quick_links.title')}</h3>
          <hr className="mb-2 w-1/3" />
          <ul className="text-center">
            <li className="mb-1"><Link href="/" className="hover:underline"> {t('quick_links.home')}</Link></li>
            <li className="mb-1"><Link href="/products" className="hover:underline"> {t('quick_links.products')}</Link></li>
            <li className="mb-1"><Link href="/about" className="hover:underline"> {t('quick_links.about')}</Link></li>
            <li className="mb-1"><Link href="/contact" className="hover:underline"> {t('quick_links.contact')}</Link></li>
          </ul>
        </div>

      </div>
      <p className="text-center text-md font-medium mb-2">&copy; {new Date().getFullYear()} Monteri. {t('rights_reserved')}</p>
      <p className="text-center text-xs font-thin mt-2">Designed and Developed by <a target="_blank" href="https://github.com/talhauslu">Talha Uslu</a></p>
    </footer>
  );
}