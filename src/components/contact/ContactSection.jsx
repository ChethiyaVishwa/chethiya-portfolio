import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create WhatsApp message with form data
      const whatsappMessage = `Hi Chethiya! I'd like to get in touch with you.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from your portfolio contact form`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/94787337276?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      id: 1,
      name: "Email",
      value: "chethiyavishwa717@gmail.com",
      icon: "📧",
      link: "mailto:chethiyavishwa717@gmail.com",
      description: "Send me an email for professional inquiries",
      color: "cyan"
    },
    {
      id: 2,
      name: "WhatsApp",
      value: "+94 78 733 7276",
      icon: "📱",
      link: "https://wa.me/94787337276",
      description: "Chat with me directly on WhatsApp",
      color: "red"
    },
    {
      id: 3,
      name: "LinkedIn",
      value: "linkedin.com/in/chethiya-vishwa",
      icon: "💼",
      link: "https://linkedin.com/in/chethiya-vishwa-224671264",
      description: "Connect with me on LinkedIn",
      color: "cyan"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://facebook.com/chethiyavishwa",
      color: "#1877F2", // Facebook blue
      hoverColor: "#166FE5"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com/chethiyavishwa",
      color: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", // Instagram gradient
      hoverColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/chethiya-vishwa-224671264",
      color: "#0077B5", // LinkedIn blue
      hoverColor: "#005885"
    }
  ];

  const handleContactClick = (contact) => {
    if (contact.name === "Email") {
      window.location.href = contact.link;
    } else {
      window.open(contact.link, '_blank');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-tl from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-red/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700/10 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-red/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red/5 to-cyan/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mt-4">
            Let's{' '}
            <span className="text-red animate-neon-glow delay-300">Connect</span>
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6 animate-text-reveal delay-500">
            Ready to collaborate or discuss opportunities? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {contactMethods.map((contact, index) => (
            <div 
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={`bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:border-${contact.color}/30 transition-all duration-500 hover:shadow-lg hover:shadow-${contact.color}/10 group cursor-pointer relative overflow-hidden animate-text-reveal`}
              style={{animationDelay: `${(index + 1) * 200}ms`}}
            >
              {/* Contact Icon */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-${contact.color} to-${contact.color}/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl sm:text-3xl">{contact.icon}</span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${contact.color} mb-2`}>
                  {contact.name}
                </h3>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                <p className="text-white font-semibold text-sm sm:text-base mb-3 break-all">
                  {contact.value}
                </p>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  {contact.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${contact.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Click Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-2 h-2 rounded-full bg-${contact.color} animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:border-cyan/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan/10 group relative overflow-hidden animate-text-reveal delay-1000">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center relative z-20">
              Send me a Message
            </h3>
            
            <form className="space-y-6 relative z-20" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-black placeholder-gray-400 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all duration-300 relative z-10"
                    placeholder="Your first name"
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-black placeholder-gray-400 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all duration-300 relative z-10"
                    placeholder="Your last name"
                    autoComplete="family-name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-black placeholder-gray-400 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all duration-300 relative z-10"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-black placeholder-gray-400 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all duration-300 relative z-10"
                  placeholder="What's this about?"
                  autoComplete="off"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-black placeholder-gray-400 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all duration-300 resize-none relative z-10"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm mb-2">
                    ✅ WhatsApp opened! Your message is ready to send.
                  </p>
                  <p className="text-white text-xs">
                    WhatsApp should have opened in a new tab with your message pre-filled. Just click send!
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan to-red text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>
            </form>

            {/* Form Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 animate-text-reveal delay-1200">
            Follow Me
          </h3>
          <div className="flex justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, index) => (
              <a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                style={{ animationDelay: `${1400 + (index * 100)}ms` }}
              >
                {/* Outer glow ring */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
                  style={{
                    background: social.name === 'Instagram' 
                      ? 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
                      : social.color,
                    padding: '2px'
                  }}
                ></div>
                
                {/* Main icon container */}
                <div 
                  className="relative w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border-2 border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:scale-110 hover:rotate-3 flex items-center justify-center backdrop-blur-sm"
                  style={{
                    background: social.name === 'Instagram' 
                      ? 'linear-gradient(135deg, rgba(240, 148, 51, 0.1), rgba(188, 24, 136, 0.1))'
                      : `linear-gradient(135deg, ${social.color}15, ${social.color}05)`
                  }}
                >
                  {/* Inner glow effect */}
                  <div 
                    className="absolute inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: social.name === 'Instagram' 
                        ? 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
                        : social.color,
                      filter: 'blur(8px)'
                    }}
                  ></div>
                  
                  {/* Icon */}
                  <social.icon 
                    className="relative z-10 text-2xl sm:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                    style={{ 
                      color: social.color,
                      background: social.name === 'Instagram' ? social.color : 'none',
                      WebkitBackgroundClip: social.name === 'Instagram' ? 'text' : 'initial',
                      WebkitTextFillColor: social.name === 'Instagram' ? 'transparent' : 'initial',
                      backgroundClip: social.name === 'Instagram' ? 'text' : 'initial',
                      filter: social.name === 'Instagram' ? 'none' : 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                    }}
                  />
                  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                </div>
                
                {/* Platform name */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-semibold text-white/80 bg-gray-900/80 px-2 py-1 rounded-md backdrop-blur-sm">
                    {social.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-white text-sm sm:text-base animate-text-reveal delay-1600">
            © 2025 Chethiya Vishwa. All rights reserved. Built with ❤️ and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
