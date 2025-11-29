import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <footer
      id="contact-section"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Get In Touch */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Get In Touch
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </div>

            {/* Right Side - Let's Connect */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/0xAakibAlam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/0xAakibAlam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://twitter.com/0xAakibAlam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Twitter
                  </span>
                </a>
                <a
                  href="mailto:mdaakibalamansari@gmail.com"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
