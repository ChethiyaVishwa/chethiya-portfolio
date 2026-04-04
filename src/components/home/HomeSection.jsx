import React, { useState, useEffect } from 'react';

// Detect touch/coarse device once — video autoplay is very heavy on mobile
const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const HomeSection = () => {
  const titles = [
    "Software Engineer",
    "Web Developer",
    "Data Analyst",
    "Project Manager",
    "Business Analyst",
    "Prompt Engineer",
    "Content Creator"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTimeout(() => {
          setIsTyping(false);
        }, 50);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-[85vh] flex items-center px-4 sm:px-6 md:px-10 lg:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-16 md:pb-20 lg:pb-24 relative">
      {/* Video Background — skipped on mobile to avoid video decode overhead */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        {!isCoarsePointer && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src={`${import.meta.env.BASE_URL}images/section-bg6.mp4`} type="video/mp4" />
          </video>
        )}
        {/* Deep Navy/Black Color Grade Overlay to match the new dark theme */}
        <div className="absolute inset-0 bg-[#04091a]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[rgba(10,20,50,0.4)] mix-blend-color"></div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan/5 to-red/5 rounded-full blur-2xl"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-white text-center lg:text-left">
            <div className="space-y-1 sm:space-y-4">
              <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
                Welcome to My Portfolio
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight min-h-[40px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px]">
                Hi, I'm{' '}
                <span className="text-red animate-neon-glow font-rubik-wet-paint">Chethiya Vishwa.</span>
              </h1>
              <div className="mt-0 sm:mt-3 md:mt-4">
                <span
                  className={`inline-block relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${isTyping
                      ? 'opacity-0 scale-95 translate-y-2'
                      : 'opacity-100 scale-100 translate-y-0'
                    } transition-all duration-500 ease-out`}
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #ef4444 50%, #06b6d4 100%)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: isTyping ? 'none' : 'gradient-shift 3s ease infinite',
                    textShadow: '0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(239, 68, 68, 0.2)',
                    filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))'
                  }}
                >
                  {titles[currentTitleIndex]}
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-text-reveal delay-500">
                Passionate about creating innovative solutions and building
                impactful software that makes a difference. I specialize in
                modern web technologies and clean, efficient code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-5 mt-6 sm:mt-8 mb-3 sm:mb-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-red to-cyan text-white rounded-full hover:from-cyan hover:to-red transition-all duration-500 font-semibold text-sm sm:text-base lg:text-lg animate-gradient-shift delay-700 hover:scale-105 hover:shadow-lg hover:shadow-red/30 group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#skills"
                className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white rounded-full hover:bg-gray-800 hover:text-white transition-all duration-500 font-semibold text-sm sm:text-base lg:text-lg delay-800 hover:scale-105 hover:shadow-lg hover:shadow-white/30 group relative overflow-hidden"
              >
                <span className="relative z-10">View My Skills</span>
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-5 lg:gap-6 pt-1 sm:pt-2 lg:pt-3 justify-center lg:justify-start">
              <a
                href="https://github.com/ChethiyaVishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red transition-all duration-300 hover:scale-110 group delay-900"
              >
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-glitch" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.645.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <div className="absolute inset-0 bg-red/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan transition-all duration-300 hover:scale-110 group delay-1000"
              >
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-hologram" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <div className="absolute inset-0 bg-cyan/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
              <a
                href="https://facebook.com/chethiyavishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 group delay-1100"
              >
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-6 lg:mt-0 flex items-center justify-center lg:justify-end translate-y-2 sm:translate-y-1 md:translate-y-0 lg:translate-y-1 xl:translate-y-2">
            <div className="relative z-10 md:-translate-x-2 lg:-translate-x-3 xl:-translate-x-4 transition-transform duration-500">
              {/* Main Image Container with modern frame */}
              <div className="relative group animate-float w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px]">
                {/* Outer neon gradient frame */}
                <div className="pointer-events-none absolute -inset-1 sm:-inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-cyan via-red to-cyan opacity-70 group-hover:opacity-100 blur-md sm:blur-lg transition-all duration-500 group-hover:scale-[1.02]"></div>

                {/* Glass card frame */}
                <div className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.75)] group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.9)] transition-all duration-500">
                  {/* Subtle inner gradient wash */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,113,113,0.18),transparent_55%)] opacity-80 mix-blend-screen"></div>

                  <img
                    src={`${import.meta.env.BASE_URL}images/me2.jpg`}
                    alt="Software Engineer"
                    className="relative w-full h-auto rounded-[1.9rem] transform group-hover:scale-[1.03] group-hover:translate-y-0.5 transition-all duration-500"
                  />
                </div>

                {/* Offset cyber frame accent */}
                <div className="pointer-events-none absolute -bottom-6 -right-7 sm:-bottom-8 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 border border-cyan/40 rounded-3xl rotate-12 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-[18deg] transition-transform duration-500"></div>
                <div className="pointer-events-none absolute -top-6 -left-8 sm:-top-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 border border-red/35 rounded-3xl -rotate-6 group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:-rotate-[12deg] transition-transform duration-500"></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan rounded-full animate-particle shadow-cyanShadow" style={{ animationDuration: '2s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-red rounded-full animate-particle shadow-cyanShadow" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange rounded-full animate-particle shadow-cyanShadow" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-lightCyan rounded-full animate-particle shadow-cyanShadow" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-lightRed rounded-full animate-particle shadow-cyanShadow" style={{ animationDuration: '2.8s', animationDelay: '0.7s' }}></div>

              {/* Ripple rings removed */}
            </div>

            {/* Background glow effects removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

