import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-tl from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-red/5 via-transparent to-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/10 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-red/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-64 h-64 bg-cyan/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-red/5 to-cyan/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-l from-cyan/5 to-red/5 rounded-full blur-2xl"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full">
          {/* Text Content */}
            <div className="space-y-6 sm:space-y-8 text-white text-center">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
                  About Me
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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
                <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-4 sm:p-6 rounded-xl border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent"></div>
                  <div className="relative z-10">
                    <h4 className="text-cyan text-sm sm:text-base font-semibold mb-2">Frontend Development</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Creating responsive, interactive user interfaces with React, Vue.js, and modern CSS frameworks.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-4 sm:p-6 rounded-xl border border-red/20 hover:border-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-red/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red/5 to-transparent"></div>
                  <div className="relative z-10">
                    <h4 className="text-red text-sm sm:text-base font-semibold mb-2">Backend Development</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Building robust server-side applications with Node.js, Python, and cloud technologies.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-4 sm:p-6 rounded-xl border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent"></div>
                  <div className="relative z-10">
                    <h4 className="text-cyan text-sm sm:text-base font-semibold mb-2">Mobile Development</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Developing cross-platform mobile applications using React Native and Flutter.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-4 sm:p-6 rounded-xl border border-red/20 hover:border-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-red/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red/5 to-transparent"></div>
                  <div className="relative z-10">
                    <h4 className="text-red text-sm sm:text-base font-semibold mb-2">DevOps & Cloud</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Implementing CI/CD pipelines and deploying applications on AWS, Azure, and Google Cloud.
                    </p>
                  </div>
                </div>
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

          {/* Visual Content */}
          <div className="relative mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="relative z-10">
              {/* Profile Card */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-700/50 shadow-2xl">
                  <div className="text-center space-y-4">
                    {/* Profile Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-r from-cyan to-red rounded-full flex items-center justify-center overflow-hidden ring-4 ring-gray-700/30">
                      <img 
                        src="/images/me.jpg" 
                        alt="Chethiya Vishwa - Software Engineer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold">Chethiya Vishwa</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Software Engineer</p>
                    <div className="flex justify-center space-x-4">
                      <div className="w-2 h-2 bg-red rounded-full"></div>
                      <div className="w-2 h-2 bg-cyan rounded-full"></div>
                      <div className="w-2 h-2 bg-red rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-64 sm:h-64 bg-red rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-64 sm:h-64 bg-cyan rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
