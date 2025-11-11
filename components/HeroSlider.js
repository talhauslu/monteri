"use client";
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useState, useEffect, useRef } from 'react';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/images/COLORIUM SEHPA SET/10.webp',
        '/images/BOHO SEHPA SET/8.JPG',
        '/images/EXCOTİC SEHPA SET/6.jpeg',
        '/images/LOTUS KAPLAMA/6.jpg',
        '/images/LOTUS TRAVERTEN/9.jpg',
        '/images/LUNA SEHPA SET/11.JPG',
        '/images/MATRİX/7.JPG',
        '/images/MONO/5.JPG',
        '/images/OSLO/10.JPG',
        '/images/PIETRA SEHPA SETİ/15.jpg',
        '/images/ROYAL/3.JPG',
        '/images/TRAVE/8.JPG',
        '/images/TRİO SET/12.JPG',
        '/images/VERONA/11.JPG'
    ];
    const products = [
        'COLORIUM',
        'BOHO',
        'EXCOTIC',
        'LOTUS V2',
        'LOTUS V3',
        'LUNA V1',
        'MATRIX V1',
        'MONO',
        'OSLO',
        'PIETRA',
        'ROYAL',
        'TRAVE',
        'TRIO',
        'VERONA'
    ];

    const timerRef = useRef();

    // Auto-slide effect
    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
        // eslint-disable-next-line
    }, [currentSlide, slides.length]);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        startTimer();
    };

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
        <div className="hero-slider relative h-[50vh] md:h-screen overflow-hidden">
            {/* Left Arrow */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full"
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            <div
                className="flex transition-transform duration-800 h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((src, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        <Link key={index} href={`/products/${products[index].toLowerCase().replace(/\s+/g, '-')}`}>
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                // fill
                                width={1600}
                                height={1035}
                                // sizes="100vw"
                                className="object-contain w-full h-full"
                                priority={index === 0}
                            />
                        </Link>
                        <div
                            className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
                        >
                            <span
                                style={{
                                    transform: "rotate(-10deg)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <Image src="/images/logo.png" alt="Logo" className="w-30 sm:w-60 h-auto opacity-15 select-none" width={400} height={200} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-black/60' : 'bg-black/30'
                            } hover:bg-black/60`}
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}