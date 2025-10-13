"use client";
import Image from 'next/image';
import { useEffect } from 'react';

export default function ProductCard({ img, name }) {
  useEffect(() => {
    // disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // disable image dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("dragstart", handleDragStart);

    // optional: disable certain key combos (Ctrl+S / Ctrl+U)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      style={{ aspectRatio: '1600 / 1035', minHeight: 0 }}>
      <Image
        src={`/images/${img}`}
        alt={name}
        width={1600}
        height={1035}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
      >
        <span
          style={{
            transform: "rotate(-10deg)",
            whiteSpace: "nowrap",
          }}
        >
          <Image src="/images/logo.png" alt="Logo" className="w-30 sm:w-45 h-auto opacity-10 select-none" width={400} height={200} />
        </span>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full px-6 py-4 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 95%)'
        }}
      >
        <h2 className="text-2xl font-semibold text-white drop-shadow">{name}</h2>
      </div>
    </div>
  );
}
