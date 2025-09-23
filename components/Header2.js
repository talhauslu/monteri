import Link from 'next/link';

export default function Header2() {
  return (
    <header className="w-full p-4 bg-green-950 text-white">
      <div className="flex justify-between space-evenly mb-4">
        <p className="text-sm">info@monteri.com</p>
        <div className='text-center'>
          <h1 className="text-6xl font-bold">Monteri</h1>
          <p className="text-sm">✨ Birinci Sınıf Yaşam Alanları</p>
        </div>
        <p className="text-sm">+905111111111</p>
      </div>
      <nav className="mt-2 border-t pt-2 flex justify-center">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About Us</Link>
          </li>
          <li>
            <Link href="/products" className="hover:underline">Products</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}