export default function Footer() {
  return (
    <footer className="w-full p-4 bg-green-950 text-white mt-8">
      <p className="text-center">&copy; {new Date().getFullYear()} Monteri. All rights reserved.</p>
    </footer>
  );
}