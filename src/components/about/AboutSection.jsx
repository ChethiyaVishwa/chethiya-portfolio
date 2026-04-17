import React from 'react';
import gsap from 'gsap';
import { useTilt } from '../../hooks/useTilt';

// ✅ PERF: detect touch/coarse pointer once
const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const AboutSection = () => {
  const { handleMouseEnter, handleMouseMove, handleMouseLeave } = useTilt({
    rotationIntensity: 2,
    scale: 1.02
  });

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Vue.js, and modern CSS frameworks.",
      color: "cyan"
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Python, and cloud technologies.",
      color: "red"
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using React Native and Flutter.",
      color: "cyan"
    },
    {
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines and deploying applications on AWS, Azure, and Google Cloud.",
      color: "red"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-red/5 via-transparent to-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/10 to-transparent"></div>

      {/* Decorative Elements — hidden on mobile to save composite layers */}
      <div className="hidden sm:block absolute top-32 right-20 w-80 h-80 bg-red/8 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-32 left-20 w-64 h-64 bg-cyan/8 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-red/5 to-cyan/5 rounded-full blur-2xl" />
      <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-l from-cyan/5 to-red/5 rounded-full blur-2xl" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-white text-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
                About Me
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight font-rubik-wet-paint">
                Passionate{' '}
                <span className="text-red animate-neon-glow delay-300">Developer</span>
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto animate-text-reveal delay-500">
                A dedicated Software Engineering Undergraduate and hard worker seeking opportunities
                to work in challenging organizations. I'm passionate about expanding my skills and
                knowledge with a strong work ethic and ability to overcome challenges in software development.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {services.map((service, index) => {
                  const borderClasses =
                    service.color === 'red'
                      ? 'border-red/20'
                      : 'border-cyan/20';

                  const hoverClasses =
                    service.color === 'red'
                      ? 'hover:border-red/30 hover:shadow-red/20'
                      : 'hover:border-cyan/30 hover:shadow-cyan/10';

                  return (
                    <div
                      key={index}
                      onMouseEnter={(e) => handleMouseEnter(e, index)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={(e) => handleMouseLeave(e, index)}
                      className={`bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-4 sm:p-6 rounded-xl border ${borderClasses} transition-shadow duration-300 hover:shadow-lg relative overflow-hidden group cursor-pointer ${hoverClasses}`}
                      // ✅ PERF: preserve-3d is pointless on touch
                      style={{ transformStyle: isCoarsePointer ? 'flat' : 'preserve-3d' }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-${service.color}/5 to-transparent pointer-events-none`}></div>
                      <div className="relative z-10 pointer-events-none">
                        <h4
                          className={`text-${service.color} text-sm sm:text-base font-semibold mb-2`}
                          style={{ transform: 'translateZ(20px)' }}
                        >
                          {service.title}
                        </h4>
                        <p
                          className="text-gray-300 text-xs sm:text-sm"
                          style={{ transform: 'translateZ(15px)' }}
                        >
                          {service.description}
                        </p>
                      </div>
                      {/* Glass sheen effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                        style={{ transform: 'translateZ(10px)' }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 text-center">
              <a
                href="#skills"
                className="inline-block px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-cyan to-red text-white rounded-full hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl hover:shadow-red/20"
              >
                View My Skills
              </a>
            </div>
          </div>

          {/* Visual Content – About / Resume Card */}
          <div className="relative mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow Accents */}
              <div className="pointer-events-none absolute -top-10 -right-8 w-40 h-40 bg-red/30 rounded-full blur-3xl opacity-40"></div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-44 h-44 bg-cyan/30 rounded-full blur-3xl opacity-40"></div>

              {/* Main Card — backdrop-blur-2xl is very expensive on mobile GPUs, use sm:backdrop-blur-2xl */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-800/90 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:backdrop-blur-2xl">
                {/* Accent strip */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cyan via-red to-cyan opacity-90"></div>

                {/* Subtle background pattern */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,113,113,0.16),transparent_55%)] opacity-80 mix-blend-screen"></div>

                <div className="relative z-10 p-6 sm:p-8 lg:p-9">
                  <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-7">
                    {/* Profile Image */}
                    <div className="flex flex-col items-center sm:items-center gap-3 sm:gap-4">
                      <div className="relative">
                        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-cyan via-red to-cyan opacity-60 blur-md"></div>
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border border-white/15 bg-gray-900">
                          <img
                            src={`${import.meta.env.BASE_URL}images/about-me.jpg`}
                            alt="Chethiya Vishwa - Software Engineer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-xs text-white">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Open to opportunities</span>
                      </div>
                    </div>

                    {/* Text + Resume */}
                    <div className="flex-1 space-y-4">
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.25em] text-cyan">
                          About Me
                        </p>
                        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                          Chethiya Vishwa
                        </h3>
                        <p className="text-cyan text-sm sm:text-base font-medium">
                          Software Engineer & Problem Solver
                        </p>
                      </div>

                      <p className="text-white text-sm sm:text-sm leading-relaxed">
                        I love turning complex problems into simple, beautiful and intuitive experiences.
                        Focused on modern web technologies, clean architecture and performance-driven solutions.
                      </p>

                      {/* Quick stats */}
                      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 flex flex-col gap-0.5">
                          <span className="text-cyan">Experience</span>
                          <span className="text-white font-semibold">2+ Years</span>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 flex flex-col gap-0.5">
                          <span className="text-cyan">Projects</span>
                          <span className="text-white font-semibold">10+ Completed</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-1 flex flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                        <a
                          href={`${import.meta.env.BASE_URL}pdf/chethiya-vishwa.pdf`}
                          download
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red to-cyan text-white text-sm sm:text-base font-semibold shadow-lg shadow-red/25 hover:shadow-cyan/30 hover:scale-[1.03] transition-all duration-300 border border-white/10"
                        >
                          <span>Download Resume</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M12 3v12m0 0-4-4m4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18h16" strokeLinecap="round" />
                          </svg>
                        </a>
                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-xs sm:text-sm text-white hover:bg-white/10 transition-all duration-300"
                        >
                          Let&apos;s collaborate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
