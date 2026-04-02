import React from 'react';
import gsap from 'gsap';
import { useTilt } from '../../hooks/useTilt';

const EducationSection = () => {


  const educationData = [
    {
      id: 1,
      degree: "BSc (Hons) Information Technology for Business",
      institution: "NIBM – Coventry University",
      location: "Sri Lanka",
      year: "2026 - Present",
      gpa: "Ongoing",
      description: "Bachelor's degree programme in Information Technology for Business, awarded by Coventry University (UK) and delivered through NIBM Sri Lanka. Covering enterprise systems, business analytics, software development, and IT management.",
      achievements: [
        "Enterprise IT & business systems",
        "Business analytics & data management",
        "Software engineering principles",
        "IT project & resource management"
      ],
      color: "cyan"
    },
    {
      id: 2,
      degree: "Professional Certificate in Artificial Intelligence",
      institution: "Informatics Institute of Technology (IIT)",
      location: "Sri Lanka",
      year: "2025 - 2026",
      gpa: "Completed",
      description: "Advanced studies in artificial intelligence, machine learning, and data science. Gaining expertise in modern AI technologies and applications.",
      achievements: [
        "Specialized AI coursework",
        "Hands-on machine learning projects",
        "Industry-relevant AI applications",
        "Advanced data analysis techniques"
      ],
      color: "red"
    },
    {
      id: 3,
      degree: "Higher National Diploma in Software Engineering",
      institution: "National Institute of Business Management",
      location: "Sri Lanka",
      year: "2024 - 2025",
      gpa: "Completed",
      description: "Comprehensive software engineering program covering modern development practices, system design, and project management methodologies.",
      achievements: [
        "Advanced software development skills",
        "System architecture design",
        "Project management methodologies",
        "Industry best practices"
      ],
      color: "cyan"
    },
    {
      id: 4,
      degree: "Diploma in Software Engineering",
      institution: "National Institute of Business Management",
      location: "Sri Lanka",
      year: "2022 - 2023",
      gpa: "Completed",
      description: "Foundation program in software engineering covering programming fundamentals, database management, and web development technologies.",
      achievements: [
        "Programming fundamentals",
        "Database management systems",
        "Web development technologies",
        "Software development lifecycle"
      ],
      color: "red"
    },
    {
      id: 5,
      degree: "Certificate Courses in English",
      institution: "Aquinas College of Higher Studies",
      location: "Sri Lanka",
      year: "2023",
      gpa: "Completed",
      description: "Professional English language courses focusing on technical communication, business writing, and presentation skills.",
      achievements: [
        "Technical communication skills",
        "Business writing proficiency",
        "Presentation skills development",
        "Professional communication"
      ],
      color: "cyan"
    },
    {
      id: 6,
      degree: "G.C.E A/L - Science Stream",
      institution: "Maliyadeva Model School (MMS)",
      location: "Sri Lanka",
      year: "2018 - 2020",
      gpa: "Completed",
      description: "Advanced Level examination in Science stream with subjects in Biology, Physics, and Chemistry. Strong foundation in scientific principles and analytical thinking.",
      achievements: [
        "Biology, Physics, Chemistry",
        "Scientific methodology",
        "Analytical thinking skills",
        "Research and experimentation"
      ],
      color: "red"
    }
  ];

  const certifications = [
    {
      name: "Microsoft Learn Student Ambassador",
      issuer: "Microsoft Corporation",
      year: "2024",
      icon: "🏆",
      description: "Full Stack Web Development with Next.js 14: From Concept to Azure Deployment"
    },
    {
      name: "Higher National Diploma in Software Engineering",
      issuer: "National Institute of Business Management",
      year: "2024 - 2025",
      icon: "🎓",
      description: "Comprehensive software engineering program covering modern development practices and system design"
    },
    {
      name: "Diploma in Software Engineering",
      issuer: "National Institute of Business Management",
      year: "2022 - 2023",
      icon: "📜",
      description: "Foundation program in software engineering covering programming fundamentals and web development"
    },
    {
      name: "Professional Reference",
      issuer: "Mr. Manjula Kulathunga, CEO, Wysheit Technologies",
      year: "2024",
      icon: "👨‍💼",
      contact: "pmkkulathunga@gmail.com | +94 776200029"
    }
  ];

  const { handleMouseEnter, handleMouseMove, handleMouseLeave } = useTilt({
    rotationIntensity: 2,
    scale: 1.02
  });

  return (
    <section id="education" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-transparent dark:bg-transparent relative overflow-hidden transition-colors duration-300">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-red/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-cyan/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 right-20 w-64 h-64 bg-red/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-l from-red/5 to-cyan/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
            Education
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white mt-4 font-rubik-wet-paint">
            Academic{' '}
            <span className="text-red animate-neon-glow delay-300">Journey</span>
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 animate-text-reveal delay-500">
            My educational background and continuous learning journey that has shaped my expertise in software development and technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-red to-cyan"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => {
              const hoverClasses =
                education.color === 'red'
                  ? 'hover:border-red/30 hover:shadow-red/20'
                  : 'hover:border-cyan/30 hover:shadow-cyan/10';

              return (
                <div
                  key={education.id}
                  className="relative flex items-start space-x-6 sm:space-x-8 animate-text-reveal"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-${education.color} to-${education.color}/80 flex items-center justify-center border-4 border-black shadow-lg`}>
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-${education.color} animate-pulse`}></div>
                  </div>

                  {/* Education Card */}
                  <div
                    onMouseEnter={(e) => handleMouseEnter(e, `edu-${education.id}`)}
                    onMouseMove={(e) => handleMouseMove(e, `edu-${education.id}`)}
                    onMouseLeave={(e) => handleMouseLeave(e, `edu-${education.id}`)}
                    className={`flex-1 bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700/50 transition-all duration-500 hover:shadow-lg group relative overflow-hidden ${hoverClasses}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4" style={{ transform: 'translateZ(20px)' }}>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold text-${education.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                        {education.degree}
                      </h3>
                      <p className="text-white font-semibold text-lg sm:text-xl mb-1">
                        {education.institution}
                      </p>
                      <p className="text-white text-sm sm:text-base">
                        {education.location} • {education.year}
                      </p>
                    </div>
                    <div className={`mt-2 sm:mt-0 px-4 py-2 bg-gradient-to-r from-${education.color}/20 to-${education.color}/10 rounded-full border border-${education.color}/30`}>
                      <span className={`text-${education.color} font-bold text-sm sm:text-base`}>
                        {education.gpa}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-3">Key Achievements:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {education.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center space-x-2 text-white text-xs sm:text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${education.color} flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${education.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 animate-text-reveal delay-1000">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                onMouseEnter={(e) => handleMouseEnter(e, `cert-${index}`)}
                onMouseMove={(e) => handleMouseMove(e, `cert-${index}`)}
                onMouseLeave={(e) => handleMouseLeave(e, `cert-${index}`)}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-cyan/40 transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan/20 cursor-pointer"
                style={{
                  animationDelay: `${1200 + (index * 100)}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-3" style={{ transform: 'translateZ(20px)' }}>
                    {cert.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base mb-2 group-hover:text-cyan transition-colors" style={{ transform: 'translateZ(30px)' }}>
                    {cert.name}
                  </h4>
                  <p className="text-white text-xs sm:text-sm mb-1" style={{ transform: 'translateZ(20px)' }}>
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-white text-xs mb-2 leading-relaxed" style={{ transform: 'translateZ(20px)' }}>
                      {cert.description}
                    </p>
                  )}
                  {cert.contact && (
                    <p className="text-cyan text-xs mb-2" style={{ transform: 'translateZ(20px)' }}>
                      {cert.contact}
                    </p>
                  )}
                  <p className="text-cyan text-xs font-medium" style={{ transform: 'translateZ(20px)' }}>
                    {cert.year}
                  </p>
                </div>
                {/* Glass sheen effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ transform: 'translateZ(1px)' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
