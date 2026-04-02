import React from 'react';
import gsap from 'gsap';
import { useTilt } from '../../hooks/useTilt';

const SkillsSection = () => {


  const { handleMouseEnter, handleMouseMove, handleMouseLeave } = useTilt({
    rotationIntensity: 2,
    scale: 1.02
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "cyan",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      color: "red",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Python", level: 80 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Java", level: 75 },
        { name: "C#", level: 70 },
        { name: "MySQL", level: 85 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "cyan",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Antigravity", level: 90 },
        { name: "Cursor", level: 90 },
        { name: "Firebase", level: 75 },
        { name: "Apache NetBeans", level: 70 },
        { name: "Visual Studio", level: 75 },
        { name: "Xampp", level: 80 }
      ]
    },
    {
      title: "Personal Skills",
      color: "red",
      skills: [
        { name: "Management Skills", level: 85 },
        { name: "Creativity", level: 90 },
        { name: "Digital Marketing", level: 75 },
        { name: "Time Management", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Teamwork", level: 95 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  ];

  const devicon = (name, type = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${type}.svg`;
  const skillicon = (name) =>
    `https://skillicons.dev/icons?i=${name}&theme=dark`;

  const tools = [
    { name: "VS Code", icon: skillicon("vscode") },
    { name: "Cursor", icon: "https://www.cursor.com/favicon.ico" },
    { name: "Antigravity", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%230f172a'/%3E%3Ctext x='50' y='76' font-family='Arial Black,sans-serif' font-size='70' font-weight='900' text-anchor='middle' fill='%2306b6d4'%3EA%3C/text%3E%3C/svg%3E" },
    { name: "Node.js", icon: skillicon("nodejs") },
    { name: "MongoDB", icon: skillicon("mongodb") },
    { name: "Firebase", icon: devicon("firebase") },
    { name: "Apache NetBeans", icon: devicon("netbeans") },
    { name: "Visual Studio", icon: skillicon("visualstudio") },
    { name: "Xampp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xampp.svg" },
    { name: "MySQL", icon: devicon("mysql", "original") },
    { name: "GitHub", icon: devicon("github") },
    { name: "Canva", icon: devicon("canva") }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-red/5 via-transparent to-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/10 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-red/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-red/5 to-cyan/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
            My Skills
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white mt-4 font-rubik-wet-paint">
            Technical{' '}
            <span className="text-red animate-neon-glow delay-300">Expertise</span>
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 animate-text-reveal delay-500">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const hoverColorClasses =
              category.color === 'red'
                ? 'hover:border-red/30 hover:shadow-red/20'
                : 'hover:border-cyan/30 hover:shadow-cyan/10';

            return (
              <div
                key={category.title}
                onMouseEnter={(e) => handleMouseEnter(e, `skill-${categoryIndex}`)}
                onMouseMove={(e) => handleMouseMove(e, `skill-${categoryIndex}`)}
                onMouseLeave={(e) => handleMouseLeave(e, `skill-${categoryIndex}`)}
                className={`bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700/50 transition-all duration-500 hover:shadow-lg relative overflow-hidden group ${hoverColorClasses}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full bg-${category.color} mr-3 animate-pulse`}></div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-${category.color} animate-text-reveal`} style={{ animationDelay: `${(categoryIndex + 1) * 200}ms` }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className={`text-${category.color} text-sm font-semibold`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/80 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-${category.color}/30 skill-bar`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 animate-text-reveal delay-1000">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                onMouseEnter={(e) => handleMouseEnter(e, `tool-${index}`)}
                onMouseMove={(e) => handleMouseMove(e, `tool-${index}`)}
                onMouseLeave={(e) => handleMouseLeave(e, `tool-${index}`)}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-700/50 hover:border-cyan/40 transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan/20 group cursor-pointer relative"
                style={{
                  animationDelay: `${1200 + (index * 100)}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3" style={{ transform: 'translateZ(10px)' }}>
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-white font-medium text-sm sm:text-base group-hover:text-cyan transition-colors">
                    {tool.name}
                  </span>
                </div>
                {/* Glass sheen effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ transform: 'translateZ(5px)' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
