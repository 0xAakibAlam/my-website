import { useEffect, useState } from "react";

function Coach() {
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

    const element = document.getElementById("about-section");
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
    <section
      id="about-section"
      className="relative py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center">
            {/* Content Section */}
            <div className="w-full max-w-4xl space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
        </div>

              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                I'm <span className="text-white font-medium">Md Aakib Alam Ansari</span>, a Software Engineer and smart contract developer from{" "}
                <span className="text-white font-medium">IIT Kanpur</span>, where I graduated in Mathematics & Computing with a minor in Computer Science.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                For the past couple of years, I've been building DeFi primitives at{" "}
                <span className="text-white font-medium">Magpie XYZ</span>—designing staking mechanisms, bonding curves, cross‑chain bridges, and subgraphs that have powered multi‑million‑dollar launches and on‑chain ecosystems.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                I love working at the intersection of math, code, and finance—whether that means shipping well‑tested Solidity contracts, fast TypeScript backends, or creator‑focused dApps like{" "}
                <a 
                  href="https://inkdao.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium underline decoration-cyan-400/50 underline-offset-2 hover:text-cyan-300 hover:decoration-cyan-300 transition-colors duration-200"
                >
                  InkDAO
                </a>, a decentralized publishing platform I architected end‑to‑end.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                Outside of work, competitive programming keeps my fundamentals sharp: I compete as{" "}
                <a 
                  href="https://codeforces.com/profile/sultan__" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium underline decoration-cyan-400/50 underline-offset-2 hover:text-cyan-300 hover:decoration-cyan-300 transition-colors duration-200"
                >
                  sultan__
                </a>, with a <span className="text-white font-medium">Candidate Master</span> title on Codeforces and a <span className="text-white font-medium">5‑star rating</span> on CodeChef.
          </p>

              

              <div className="pt-6">
          <a
            href="/about"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {/* Button background with gradient */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"></span>
                  
                  {/* Button border glow */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></span>
                  
                  {/* Button text */}
                  <span className="relative flex items-center space-x-2">
                    <span>Know More</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
          </a>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}

export default Coach;
