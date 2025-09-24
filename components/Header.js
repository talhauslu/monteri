'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="w-full pr-6 pl-6 pb-2 pt-2 flex justify-between bg-green-950 space-evenly md:pr-4 md:pl-4 sm:pr-2 sm:pl-2">
        <a className="text-base text-white" href='mailto:daylanbahadir@gmail.com'>daylanbahadir@gmail.com</a>
        <a className="text-base text-white" href='tel:+905425629933'>+905425629933</a>
      </div>
      <div className="w-full pl-6 pr-6 pt-4 pb-4 bg-white text-green-950 flex flex-row justify-between items-center">
        <Link href="/">
          <div className='text-center'>
            <h1 className="text-6xl font-bold">Monteri</h1>
            <p className="text-sm">✨ Birinci Sınıf Yaşam Alanları</p>
          </div>
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
          <ul className="flex space-x-4 text-lg font-medium">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <span className="text-gray-300">|</span>
            <li>
              <Link href="/products" className="hover:underline">Products</Link>
            </li>
            <span className="text-gray-300">|</span>
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <span className="text-gray-300">|</span>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu, hidden by default, slide in with transition */}
      <div className={`lg:hidden absolute w-full bg-white text-green-950 z-10 overflow-hidden transition-max-height duration-750 ease-linear ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col text-center font-bold space-y-4 pt-4 pb-4">
          <li>
            <Link href="/" className="hover:underline block" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:underline block" onClick={toggleMenu}>Products</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline block" onClick={toggleMenu}>About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline block" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}