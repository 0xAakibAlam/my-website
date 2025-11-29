import { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleProject = (projectKey: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectKey]: !prev[projectKey],
    }));
  };

  const workExperiences = [
    {
      company: "MagpieXYZ",
      period: "Mar'24 - Dec'25",
      roles: [
        {
          title: "Smart Contract Developer",
          description: "Building DeFi primitives and Web3 infrastructure at MagpieXYZ.",
          projects: [
            {
              name: "SpinUp IAO",
              description: "Initial API Offering dApp using Coinbase x402",
              responsibilities: [
                "Built Initial API Offering enabling anyone to monetize their API and create a community.",
                "Deployed and maintained smart contracts on base chain with full unit test coverage for reliability.",
                "Created a subgraph for collecting blockchain data and aggregating it for the dApp analytics."
              ],
            },
            {
              name: "SpinUp Meme DEX",
              description: "Meme DEX dApp for Hyperliquid chain",
              responsibilities: [
                "Forked and integrated Uniswap v2 contracts to create pairs post-MEME Launchpad graduation, with custom fee structure smart contracts."
              ],
            },
            {
              name: "SpinUp Meme Launchpad",
              description: "Meme Launchpad dApp for Hyperliquid chain",
              responsibilities: [
                "Built MEME Launchpad enabling anyone to create tokens with multiple bonding curves (Polynomial, UniV2-style) for dynamic price scaling.",
                "Deployed and maintained bonding curve smart contracts on Hyperevm with full unit test coverage for reliability.",
                "Created a subgraph for MEME Launchpad to extract price, market cap, and OHLC data; designed APIs for fast access."
              ],
            },
            {
              name: "SpinUp Liquid Staking",
              description: "Liquid Staking dApp for Hyperliquid chain",
              responsibilities: [
                "Designed HYPE staking mechanism on Hyperliquid, delegating staked assets to validators to enhance network security.",
                "Implemented secure solutions for delegating and withdrawing assets from Hyperliquid core and evm chain.",
                "Engineered subgraphs and APIs for drop systems, supporting referral boosts and partner integrations for early adoption."
              ],
            },
            {
              name: "Listapie",
              description: "Yield boosting dApp for ListaDAO",
              responsibilities: [
                "Led end-to-end launch of Listapie governance token (LTP) including private and public IDO rounds with a dutch auction mechanism.",
                "Successfully managed LTP Initial Farm Offering (IFO) on PancakeSwap, raising over $6M."
              ],
            },
            {
              name: "Cakepie",
              description: "Yield boosting dApp for PancakeSwap, largest BNB Chain DEX",
              responsibilities: [
                "Built end-to-end Cakepie yield booster for PancakeSwap using veCAKE tokenomics for governance and rewards.",
                "Integrated PancakeSwap V2, V3 and AMM pools, gauges, and emissions for optimized liquidity and dynamic yields.",
                "Enabled CAKE locking into veCAKE to amplify governance power and sustainable protocol incentives."
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Yubi",
      period: "May'23 - July'23",
      roles: [
        {
          title: "Software Engineer",
          description: "Collaborated with the platform team to design and implement RBAC systems.",
          projects: [
            {
              name: "RBAC System Implementation",
              description: "Designed and implemented Role-Based Access Control system using Spring Boot and PostgreSQL.",
              responsibilities: [
                "Established efficient relationships among key entities, resulting in 30% increase in data retrieval speed",
                "Developed 15+ APIs for client-server communication",
                "Rigorous testing boosted reliability, 95% coverage, 20% faster bug fixes",
              ],
            },
          ],
        },
      ],
    },
  ];

  const competitiveProgramming = [
    {
      platform: "Codeforces",
      image: "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
      description: "Ranked among the top 300 Indians on Codeforces, with over 800 problems solved and participated in more than 100 contests. Attained the esteemed rank of Candidate Master.",
      profile: "https://codeforces.com/profile/sultan__",
    },
    {
      platform: "CodeChef",
      image: "https://files.virgool.io/upload/users/1658997/posts/sop54h8bn19n/vof2srvqxniw.png",
      description: "Ranked within the top 0.5% of Indian coders on CodeChef, with over 100 problems solved and participation in 25+ contests. Earned a 5-star rating, showcasing proficiency and dedication in coding.",
      profile: "https://www.codechef.com/users/temp0rary",
    },
    {
      platform: "LeetCode",
      image: "https://leetcode.com/static/images/LeetCode_Sharing.png",
      description: "Occasionally tackle problems on LeetCode, finding their complexity and variety intriguing. While not consistent, I enjoy the challenge and find the problems intellectually stimulating.",
      profile: "https://leetcode.com/sultan__/",
    },
  ];

  const achievements = [
    {
      title: "INTER-IIT CP Contest",
      description: "Achieved 2nd rank in IIT Kanpur and 22nd rank across all IITs in the Inter-IIT CP Contest hosted by IIT Gandhinagar on CodeChef in oct'21.",
    },
    {
      title: "Techweek-IITK",
      description: "Secured 1st position in the Techweek technical event organized by Science & Technology Council, IIT Kanpur, competing with 100+ teams. Our team of 6 excelled in programming, robot designing, finance, and more.",
    },
    {
      title: "UDGHOSH'23",
      description: "Won a bronze medal in the Poomsae event at Udshosh'23, showcasing dedication and skill in Taekwondo.",
    },
  ];

  const extracurriculars = [
    {
      title: "Taekwondo",
      image: "https://static.vecteezy.com/system/resources/thumbnails/008/630/706/small_2x/taekwondo-kick-pose-and-technique-vector.jpg",
      description: "Committed to regular Taekwondo practice, currently holding a blue belt rank. Dedicated to mastering the art and pursuing continuous improvement in skills and discipline.",
    },
    {
      title: "Guitarist",
      image: "https://wallpapers.com/images/featured/guitar-vtvn8855v2zafbtj.jpg",
      description: "Passionate about playing guitar in my free time, continuously learning and honing my skills. Embracing the journey of music, striving for growth and expression through the strings.",
    },
    {
      title: "UDGHOSH'22",
      image: "https://www.knowafest.com/files/uploads/Udghosh-2022-sports-fest.jpeg",
      description: "Served as Senior Executive in Udghosh'22 Events Team, leading coordination efforts for various events with a team of 20 members.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              About Me
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            A glimpse into the journey that shapes my work.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Work Experience */}
      <section
        id="work-experience"
        data-section
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          
          <div className="space-y-10">
            {workExperiences.map((company, companyIndex) => (
              <div key={companyIndex} className="relative">
                {/* Company Header */}
                <div className="mb-6 ml-0 md:ml-12">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {company.company}
                    </h3>
                    <span className="text-gray-500 text-sm">•</span>
                    <p className="text-gray-400 text-sm">{company.period}</p>
                  </div>
                </div>

                {/* Roles Container with Timeline */}
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-700/30 hidden md:block"></div>

                  <div className="space-y-6 ml-0 md:ml-12">
                    {company.roles.map((role, roleIndex) => {
                      const isLastRole = roleIndex === company.roles.length - 1;
                      
                      return (
                        <div key={roleIndex} className="relative">
                          {/* Timeline Dot - Centered on line at left-5 (20px) */}
                          <div className="absolute -left-7 top-1.5 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-gray-900 z-10 hidden md:block"></div>
                          
                          {/* Upward Arrow Line */}
                          {!isLastRole && (
                            <div className="absolute -left-8 md:-left-12 top-4 w-0.5 bg-gray-700/30 hidden md:block" style={{ height: 'calc(100% + 1.5rem)' }}>
                              <div className="absolute top-0 -left-1 w-3 h-3 flex items-center justify-center">
                                <svg 
                                  className="w-2 h-2 text-gray-600" 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}

                          {/* Role Content */}
                          <div
                            className={`transition-all duration-1000 ${
                              isVisible["work-experience"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                            style={{ transitionDelay: `${(companyIndex * 100) + (roleIndex * 50)}ms` }}
                          >
                            {/* Role Title and Period */}
                            <div className="mb-4">
                              <div className="flex items-baseline gap-2 mb-1">
                                <h4 className="text-lg sm:text-xl font-semibold text-cyan-400">
                                  {role.title}
                                </h4>
                              </div>
                              {role.description && (
                                <p className="text-gray-400 text-sm mt-1.5">{role.description}</p>
                              )}
          </div>

                            {/* Projects - Vertical Stack */}
                            <div className="space-y-3">
                              {role.projects.map((project, projectIndex) => {
                                const projectKey = `${companyIndex}-${roleIndex}-${projectIndex}`;
                                const isExpanded = expandedProjects[projectKey];
                                
                                return (
                                  <div
                                    key={projectIndex}
                                    className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-lg hover:border-cyan-400/40 transition-all duration-200 overflow-hidden"
                                  >
                                    {/* Project Header - Always Visible */}
                                    <div 
                                      className="p-4 cursor-pointer flex items-start justify-between gap-3"
                                      onClick={() => toggleProject(projectKey)}
                                    >
                                      <div className="flex-1">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                          <h5 className="text-base font-semibold text-white">
                                            {project.name}
                                          </h5>
                                          <span className="text-gray-600 text-sm">•</span>
                                          <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.description}
            </p>
          </div>
                                      </div>
                                      {/* Expand/Collapse Icon */}
                                      <button
                                        type="button"
                                        className="flex-shrink-0 mt-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                        aria-label={isExpanded ? "Collapse" : "Expand"}
                                      >
                                        <svg
                                          className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      </button>
        </div>

                                    {/* Responsibilities - Expandable */}
                                    {isExpanded && (
                                      <div className="px-4 pb-4 border-t border-gray-700/40 pt-3 animate-fade-in">
                                        <ul className="space-y-2">
                                          {project.responsibilities.map((resp, respIndex) => (
                                            <li
                                              key={respIndex}
                                              className="flex items-start text-gray-400 text-sm"
                                            >
                                              <span className="text-cyan-400 mr-2.5 mt-1 flex-shrink-0 text-xs">
                                                ▹
                                              </span>
                                              <span className="leading-relaxed">{resp}</span>
                </li>
                                          ))}
              </ul>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Programming */}
      <section
        id="competitive-programming"
        data-section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Competitive Programming
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveProgramming.map((cp, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible["competitive-programming"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cp.image}
                      alt={cp.platform}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">{cp.platform}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{cp.description}</p>
                    {cp.profile && (
                      <a
                        href={cp.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-cyan-500/20 border border-gray-600 hover:border-cyan-400/50 rounded-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
                      >
                        <span>View Profile</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
          </div>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        data-section
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible["achievements"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
          </div>
                    <h3 className="text-xl font-bold text-purple-400">{achievement.title}</h3>
          </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-Curriculars */}
      <section
        id="extracurriculars"
        data-section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Extra-Curriculars
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible["extracurriculars"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{activity.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
          </div>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
