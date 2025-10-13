'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="w-full pr-3 pl-3 pb-2 pt-2 flex justify-center items-center bg-logolight-700 md:pr-4 md:pl-4 sm:pr-2 sm:pl-2">
        {/* <a className="text-base text-white" href='mailto:info@monteri.tr'><i className='fa fa-envelope-o mr-2'></i><span>info@monteri.tr</span></a>
        <a className="text-base text-white" href='tel:+90 224 715 0 532'><span>+90 224 715 0 532</span><i className='fa fa-phone ml-2'></i></a> */}
        <p className='text-white text-shadow-white italic'>{t('sublogo')}</p>
      </div>
      <div className="w-full pl-10 pr-10 pt-10 pb:6 sm:pb-10 bg-white text-logo flex flex-row justify-between items-center">
        <Link href="/">
          <div className='logo w-45 sm:w-55'>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1067}
              height={348}
              className="w-full h-auto select-none"
            />
          </div>
          {/* <div className='text-center'>
            <h1 className="text-6xl font-bold">Monteri</h1>
            <p className="text-sm">{t('sublogo')}</p>
          </div> */}
        </Link>
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Regular menu for desktop */}
        <div className="hidden lg:flex justify-center">
          <ul className="flex text-sm font-medium">
            <li>
              <Link href="/" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">{t('nav.home')}</Link>
            </li>
            <span className="text-gray-300 select-none">|</span>
            <li>
              <Link href="/about" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">{t('nav.about')}</Link>
            </li>
            <span className="text-gray-300 select-none">|</span>
            <li>
              <Link href="/products" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">{t('nav.products')}</Link>
            </li>
            <span className="text-gray-300 select-none">|</span>
            <li>
              <a href="https://gympouf.com/" target="_blank" rel="noopener noreferrer" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">GYMPOUF</a>
            </li>
            <span className="text-gray-300 select-none">|</span>
            <li>
              <Link href="/contact" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">{t('nav.contact')}</Link>
            </li>
            <span className="text-gray-300 select-none">|</span>
            <li>
              <Link href="/catalogs" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">KATALOG</Link>
            </li>
            <span className="text-gray-300 select-none">|</span>
            <li>
              <Link href="/bayilik" className="transition-all transform duration-400 ease-in-out rounded-full mx-2 px-2 py-2 hover:bg-black/10 hover:opacity-70">BAYİLİK</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu, hidden by default, slide in with transition */}
      <div className={`pt-2 lg:hidden absolute w-full bg-white text-logo z-10 overflow-hidden transition-max-height duration-750 ease-linear ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col text-logolight-800 text-md text-center space-y-4 pt-4 pb-4">
          <li>
            <Link href="/" className="hover:opacity-50 transition-opacity duration-300" onClick={toggleMenu}>{t('nav.home')}</Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-50 transition-opacity duration-300" onClick={toggleMenu}>{t('nav.about')}</Link>
          </li>
          <li>
            <Link href="/products" className="hover:opacity-50 transition-opacity duration-300 font-" onClick={toggleMenu}>{t('nav.products')}</Link>
          </li>
          <li>
            <a href="https://gympouf.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-300" onClick={toggleMenu}>GYMPOUF</a>
          </li>
          <li>
            <Link href="/contact" className="hover:opacity-50 transition-opacity duration-300" onClick={toggleMenu}>{t('nav.contact')}</Link>
          </li>
          <li>
            <Link href="/catalogs" className="hover:opacity-50 transition-opacity duration-300" onClick={toggleMenu}>KATALOG</Link>
          </li>
          <li>
            <Link href="/bayilik" className="hover:opacity-50 transition-opacity duration-300" onClick={toggleMenu}>BAYİLİK</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}