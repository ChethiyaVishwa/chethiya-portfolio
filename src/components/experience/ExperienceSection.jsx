import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "Adventure Travel",
      location: "Sri Lanka",
      period: "2024 - Present",
      type: "Full-time",
      description: "Developing and maintaining web applications for travel management system. Working with modern web technologies to create user-friendly interfaces and robust backend systems.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Developed responsive web applications for travel booking system",
        "Implemented user authentication and data management features",
        "Optimized database queries improving performance by 30%",
        "Collaborated with team to deliver projects on time"
      ],
      color: "cyan"
    },
    {
      id: 2,
      title: "Intern Web Developer",
      company: "SLT Mobitel",
      location: "Sri Lanka",
      period: "2024 - 2025",
      type: "Internship",
      description: "Gained hands-on experience in web development through internship program. Worked on real-world projects including management systems and product information hubs.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Developed SLT Mobitel Intern Management System",
        "Created SLT Mobitel Product Info Hub",
        "Learned industry best practices and development workflows",
        "Contributed to team projects and gained valuable experience"
      ],
      color: "red"
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Adventure Travel",
      description: "A modern travel agency website with fully responsive design and comprehensive admin management system. Features complete tour package management, vehicle booking, destination guides, and real-time customer support with advanced AI integration.",
      image: "/images/adventure-travel.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "PHP", "PHPMailer", "API Integration", "AI Chatbase"],
      features: ["Tour package manager", "Vehicle package manager", "Tour destinations & hotels", "Real-time chat support", "AI chatbot", "Fully admin management dashboard", "Mobile responsive design", "Map integration"],
      github: "https://github.com/ChethiyaVishwa/adventure-travel",
      live: "#",
      color: "cyan"
    },
    {
      id: 2,
      name: "Sirasa Oil Centre",
      description: "A modern oil mart website with fully responsive design and comprehensive admin management system. Features complete oil brand management, product catalog, and streamlined business operations for oil distribution.",
      image: "/images/sirasa-oil.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "PHP"],
      features: ["Oil brands management", "Other product management", "Fully admin management dashboard", "Mobile responsive design", "Product catalog system", "Inventory management"],
      github: "https://github.com/ChethiyaVishwa/sirasa-oil-centre",
      live: "#",
      color: "red"
    },
    {
      id: 3,
      name: "NIMZY Fashion Store",
      description: "A modern clothing store website with fully responsive design and comprehensive admin management system. Features complete product management, inventory control, and streamlined e-commerce operations for fashion retail.",
      image: "/images/nimzy-fashion.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "PHP"],
      features: ["All product details manager", "Fully admin management website", "Mobile responsive design", "Product catalog system", "Inventory management", "Fashion category management"],
      github: "https://github.com/ChethiyaVishwa/nimzy-fashion-store",
      live: "#",
      color: "cyan"
    },
    {
      id: 4,
      name: "SLT Mobitel Intern Management System",
      description: "A comprehensive management system for SLT Mobitel internship program, built with modern web technologies for efficient intern tracking and management.",
      image: "/images/project1.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      features: ["Intern registration", "Progress tracking", "Document management", "Reporting system"],
      github: "https://github.com/ChethiyaVishwa/slt-intern-management",
      live: "#",
      color: "red"
    },
    {
      id: 5,
      name: "SLT Mobitel Product Info Hub",
      description: "A centralized information hub for SLT Mobitel products and services, providing detailed product information and specifications to customers.",
      image: "/images/project2.jpg",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      features: ["Product catalog", "Search functionality", "Product details", "Responsive design"],
      github: "https://github.com/ChethiyaVishwa/slt-product-hub",
      live: "#",
      color: "cyan"
    },
    {
      id: 6,
      name: "Movie Ticket Booking System",
      description: "A full-stack movie ticket booking application with user authentication, seat selection, and payment processing capabilities.",
      image: "/images/project3.jpg",
      technologies: ["React", "HTML", "CSS", "JavaScript", "MySQL"],
      features: ["User authentication", "Seat selection", "Payment processing", "Booking management"],
      github: "https://github.com/ChethiyaVishwa/movie-booking",
      live: "#",
      color: "red"
    },
    {
      id: 7,
      name: "End-to-End Chat Application",
      description: "A real-time chat application with security features, built using React and Firebase for seamless communication.",
      image: "/images/project4.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "React JS", "Firestore"],
      features: ["Real-time messaging", "User authentication", "Message encryption", "Group chats"],
      github: "https://github.com/ChethiyaVishwa/chat-app",
      live: "#",
      color: "cyan"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-bl from-gray-800 via-black to-gray-900 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 via-transparent to-red/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/10 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-cyan/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-red/5 to-cyan/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mt-4">
            Professional{' '}
            <span className="text-red animate-neon-glow delay-300">Journey</span>
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 animate-text-reveal delay-500">
            My professional experience and notable projects that showcase my expertise in software development and problem-solving.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center animate-text-reveal delay-600">
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:border-${exp.color}/30 transition-all duration-500 hover:shadow-lg hover:shadow-${exp.color}/10 group relative overflow-hidden animate-text-reveal`}
                style={{animationDelay: `${(index + 1) * 200}ms`}}
              >
                {/* Experience Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className={`text-xl sm:text-2xl font-bold text-${exp.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                      {exp.title}
                    </h4>
                    <p className="text-white font-semibold text-lg sm:text-xl mb-1">
                      {exp.company}
                    </p>
                    <p className="text-white text-sm sm:text-base">
                      {exp.location} • {exp.period} • {exp.type}
                    </p>
                  </div>
                  <div className={`mt-2 sm:mt-0 px-4 py-2 bg-gradient-to-r from-${exp.color}/20 to-${exp.color}/10 rounded-full border border-${exp.color}/30`}>
                    <span className={`text-${exp.color} font-bold text-sm sm:text-base`}>
                      {exp.period.split(' - ')[0]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold text-sm sm:text-base mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r from-${exp.color}/20 to-${exp.color}/10 text-${exp.color} text-xs sm:text-sm rounded-full border border-${exp.color}/30 hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-white font-semibold text-sm sm:text-base mb-3">Key Achievements:</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2 text-white text-xs sm:text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color} flex-shrink-0 mt-2`}></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center animate-text-reveal delay-1000">
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 rounded-2xl border border-gray-700/50 hover:border-${project.color}/30 transition-all duration-500 hover:shadow-lg hover:shadow-${project.color}/10 group relative overflow-hidden animate-text-reveal`}
                style={{animationDelay: `${1200 + (index * 200)}ms`}}
              >
                {/* Project Image/Video */}
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                  {project.id === 1 ? (
                    // Video preview for Adventure Travel project
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/images/adventure.mp4" type="video/mp4" />
                    </video>
                  ) : project.id === 2 ? (
                    // Video preview for Sirasa Oil Centre project
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/images/sirasa.mp4" type="video/mp4" />
                    </video>
                  ) : project.id === 3 ? (
                    // Video preview for NIMZY project
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/images/nimzy2.mp4" type="video/mp4" />
                    </video>
                  ) : project.id === 4 ? (
                    // Video preview for SLT Mobitel Intern Management project
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/images/intern.mp4" type="video/mp4" />
                    </video>
                  ) : project.id === 5 ? (
                    // Video preview for SLT Mobitel Product Info Hub project
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/images/productinfo.mp4" type="video/mp4" />
                    </video>
                  ) : project.id === 6 ? (
                    // Video preview for Movie Ticket Booking System project
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/images/film.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl mb-2">🚀</div>
                        <p className="text-white text-sm">Project Preview</p>
                      </div>
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <h4 className={`text-xl sm:text-2xl font-bold text-${project.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    {project.name}
                  </h4>
                  
                  <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-white font-semibold text-sm mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-2 py-1 bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 text-${project.color} text-xs rounded-full border border-${project.color}/30`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold text-sm mb-2">Key Features:</h5>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-white text-xs">
                          <div className={`w-1 h-1 rounded-full bg-${project.color} flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2 bg-gradient-to-r from-${project.color} to-${project.color}/80 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-all duration-300 text-center`}
                    >
                      View Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2 border-2 border-${project.color} text-${project.color} text-sm font-semibold rounded-lg hover:bg-${project.color} hover:text-white transition-all duration-300 text-center`}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
