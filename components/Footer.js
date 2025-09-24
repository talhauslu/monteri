export default function Footer() {
  return (
    <footer className="w-full p-8 bg-green-950 text-white mt-8">
      <p className="text-center font-medium mb-2">&copy; {new Date().getFullYear()} Monteri. All rights reserved.</p>
      <p className="text-center text-sm font-light mt-2">Designed and Developed by <a target="_blank" href="https://github.com/talhauslu">Talha Uslu</a></p>
    </footer>
  );
}