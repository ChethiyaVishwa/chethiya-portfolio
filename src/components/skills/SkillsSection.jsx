import React from 'react';

const SkillsSection = () => {
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
        { name: "Cursor AI", level: 90 },
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

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Cursor AI", icon: "🤖" },
    { name: "Firebase", icon: "🔥" },
    { name: "Apache NetBeans", icon: "☕" },
    { name: "Visual Studio", icon: "🔧" },
    { name: "Xampp", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "GitHub", icon: "🐙" }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 via-transparent to-red/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/10 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan/5 to-red/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
            My Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mt-4">
            Technical{' '}
            <span className="text-red animate-neon-glow delay-300">Expertise</span>
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 animate-text-reveal delay-500">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:border-cyan/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan/10 relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-3 h-3 rounded-full bg-${category.color} mr-3 animate-pulse`}></div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${category.color} animate-text-reveal`} style={{animationDelay: `${(categoryIndex + 1) * 200}ms`}}>
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
          ))}
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
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-700/50 hover:border-cyan/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan/20 group cursor-pointer"
                style={{ animationDelay: `${1200 + (index * 100)}ms` }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-2xl sm:text-3xl group-hover:animate-bounce">
                    {tool.icon}
                  </span>
                  <span className="text-white font-medium text-sm sm:text-base group-hover:text-cyan transition-colors">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
