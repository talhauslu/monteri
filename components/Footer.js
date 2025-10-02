export default function Footer() {
  return (
    <footer className="w-full p-12 bg-stone-950 text-white mt-8">
      <p className="text-center text-xl font-medium mb-2">&copy; {new Date().getFullYear()} Monteri. All rights reserved.</p>
      <p className="text-center text-xs font-extralight mt-2">Designed and Developed by <a target="_blank" href="https://github.com/talhauslu">Talha Uslu</a></p>
    </footer>
  );
}