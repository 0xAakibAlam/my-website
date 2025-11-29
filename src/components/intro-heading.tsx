import { useEffect, useState } from "react";

function Heading({
  name,
  description,
}: {
  name: string;
  description: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === description.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [description.length]);

  // Typewriter effect for description
  useEffect(() => {
    const currentDesc = description[currentIndex];
    setDisplayText("");
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentDesc.length) {
        setDisplayText(currentDesc.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentIndex, description]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-left space-y-6">
            {/* Greeting */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-cyan-400 text-xl sm:text-2xl md:text-3xl font-mono animate-fade-in">
        &lt;Hello&gt;
              </span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-transparent flex-1"></div>
            </div>

            {/* Name with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-gradient">
            {name}
              </span>
            </h1>

            {/* Animated description */}
            <div className="mt-8 min-h-[80px] sm:min-h-[100px]">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-300 font-light">
                <span className="inline-block">{displayText}</span>
                <span className="inline-block w-1 h-8 sm:h-10 md:h-12 bg-cyan-400 ml-2 animate-blink">|</span>
              </p>
            </div>

            {/* Closing tag */}
            <div className="flex items-center space-x-4 mt-8">
              <div className="h-0.5 bg-gradient-to-r from-transparent to-cyan-400 flex-1"></div>
              <span className="text-cyan-400 text-xl sm:text-2xl md:text-3xl font-mono">
                &lt;/Hello&gt;
              </span>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex justify-center">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
