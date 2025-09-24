"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/images/0205202568154dcebd0f0.jpeg',
        '/images/020520256815528407e21-1200x1290.jpeg',
        '/images/0205202568154a16bca0a-1200x921.jpeg',
        '/images/0205202568154f32d0dce.jpeg'
    ];

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

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
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
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
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                            } hover:bg-white`}
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}