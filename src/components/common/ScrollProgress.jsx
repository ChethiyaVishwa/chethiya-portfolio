import React, { useEffect, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
            setScrollProgress(scrollPercent);

            if (scrollTop > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const radius = 24; // Slightly larger for better touch target
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - scrollProgress * circumference;

    return (
        <div
            className={`fixed bottom-8 right-8 z-[9999] transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90'
                }`}
        >
            <button
                onClick={scrollToTop}
                className="group relative flex items-center justify-center w-14 h-14 bg-black/40 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan/20 hover:border-cyan/50 transition-all duration-300 active:scale-95"
                aria-label="Scroll to top"
            >
                {/* SVG Progress Ring */}
                <svg className="absolute w-full h-full transform -rotate-90 p-1" viewBox="0 0 60 60">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
                            <stop offset="100%" stopColor="#ef4444" /> {/* Red/Pink accent */}
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Track */}
                    <circle
                        className="text-white/5"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="30"
                        cy="30"
                    />

                    {/* Progress with Gradient & Glow */}
                    <circle
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        filter="url(#glow)"
                        r={radius}
                        cx="30"
                        cy="30"
                        className="transition-all duration-100 ease-linear"
                    />
                </svg>

                {/* Inner Dot/Background behind icon */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-gray-900 to-black opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Icon */}
                <div className="relative z-10 text-cyan/80 group-hover:text-white transition-colors duration-300">
                    <IoChevronUp
                        size={24}
                        className="group-hover:-translate-y-1 group-hover:animate-pulse transition-transform duration-300"
                    />
                </div>

                {/* Ripple effect rings on hover */}
                <div className="absolute inset-0 rounded-full border border-cyan/0 group-hover:animate-ping opacity-20 group-hover:border-cyan/50"></div>
            </button>
        </div>
    );
};

export default ScrollProgress;
