import React, { useState, useEffect } from 'react';

const HomeSection = () => {
  const titles = [
    "Software Engineer",
    "Web Developer",
    "Content Creator",
    "Front End Developer",
    "Back End Developer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-red/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan/5 to-red/5 rounded-full blur-2xl"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full">
          {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-white text-center lg:text-left">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
                  Welcome to My Portfolio
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]">
                  Hi, I'm a{' '}
                  <span className={`text-red animate-neon-glow inline-block ${
                    isTyping ? 'animate-pulse opacity-50' : 'opacity-100 transition-opacity duration-300'
                  }`}>
                    {titles[currentTitleIndex]}
                  </span>
                </h1>
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
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.645.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
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
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-4 lg:mt-0 flex items-center justify-center lg:justify-end lg:-translate-y-10 xl:-translate-y-14">
            <div className="relative z-10">
               {/* Main Image Container */}
               <div className="relative group animate-float">
                 <img 
                   src="/images/hexaPic3.png" 
                   alt="Software Engineer"
                   className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 group-hover:shadow-cyan/20 group-hover:shadow-2xl"
                 />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan/20 via-red/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-glow"></div>
                
                {/* Floating Animation Container */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-transparent to-red/10 animate-pulse"></div>
                </div>
                
                {/* Matrix Rain Effect */}
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-px h-full bg-cyan/30 animate-matrix-rain" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-0 left-1/2 w-px h-full bg-red/30 animate-matrix-rain" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-0 left-3/4 w-px h-full bg-cyan/30 animate-matrix-rain" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
              
              {/* Animated Decorative Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-cyan to-red rounded-full mix-blend-screen opacity-25 blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-red to-cyan rounded-full mix-blend-screen opacity-25 blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
              
              {/* Floating Particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan rounded-full animate-particle" style={{animationDuration: '2s'}}></div>
              <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-red rounded-full animate-particle" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan rounded-full animate-particle" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-2 border-cyan/20 rounded-lg animate-rotate-slow"></div>
                <div className="absolute w-3/4 h-3/4 border border-red/20 rounded-lg animate-rotate-reverse"></div>
              </div>
            </div>
            
             {/* Background Glow Effects */}
             <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-40 sm:h-40 bg-red rounded-full mix-blend-screen opacity-15 blur-2xl animate-pulse" style={{animationDuration: '4s'}}></div>
             <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 bg-cyan rounded-full mix-blend-screen opacity-15 blur-2xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

