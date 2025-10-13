"use client";
import Image from 'next/image';
import { useEffect } from 'react';

export default function ProductCard({ img, name }) {

  useEffect(() => {
    // disable right-click (Safari için daha güçlü)
    const handleContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Her yerde dinle
    document.addEventListener("contextmenu", handleContextMenu, true);
    window.addEventListener("contextmenu", handleContextMenu, true);

    // disable image dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    document.addEventListener("dragstart", handleDragStart, true);

    // Touch events için (Safari iOS) - SADECE resimler için
    const handleTouchStart = (e) => {
      if (e.target.tagName === "IMG") {
        // Long press'i engelle ama normal touch'a izin ver
        const timer = setTimeout(() => {
          e.preventDefault();
        }, 500);

        const clearTimer = () => clearTimeout(timer);
        e.target.addEventListener("touchend", clearTimer, { once: true });
        e.target.addEventListener("touchmove", clearTimer, { once: true });
      }
    };
    document.addEventListener("touchstart", handleTouchStart, { passive: false });

    // optional: disable certain key combos
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown, true);

    // cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      window.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("keydown", handleKeyDown, true);
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
        className="absolute top-0 left-0 w-full px-6 py-5 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,.75) 0%, rgba(0,0,0,0) 95%)'
        }}
      >
        <h2 className="text-2xl font-semibold text-white drop-shadow-logo drop-shadow-sm">{name}</h2>
      </div>
    </div>
  );
}
