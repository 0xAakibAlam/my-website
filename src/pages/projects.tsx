import { useEffect, useState } from "react";
import ProjectCard from "../components/project-card";

function Projects() {
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

    const element = document.getElementById("projects-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      img: "https://raw.githubusercontent.com/InkDAO/brand-assets/refs/heads/main/background-cover/InkDAO_CoverImage.png",
      name: "InkDAO",
      desc: "InkDAO is a decentralized publishing platform that allows users to create and monetize their own publications.",
      github: "https://github.com/InkDAO",
      demo: "https://inkdao.tech/",
    },
    {
      img: "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
      name: "CF-Stress",
      desc: "Developed cross-language stress-testing webapp for Codeforces Problemset. Achieved 90% accuracy in generating counter-examples. Implemented JWT for secure authentication. Used MERN stack.",
      github: "https://github.com/AakibAlam/CF-Stress",
      demo: "https://cfstres.azurewebsites.net/",
    },
    {
      img: "https://imgs.search.brave.com/9Gude9Gq3CHc2FsjHYr-W9YyszDECKuHPV5w2H9Dq9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdmdl/bml1cy5jb20vd3At/Y29udGVudC91cGxv/YWRzL2N2LXdyaXRp/bmctdGlwcy1mZWF0/dXJlZC1pbWFnZS5w/bmc",
      name: "CV-Shortlister",
      desc: "Engineered Django-React app for 80% faster resume shortlisting with AI. Utilized Google's generative AI for accurate resume key point extraction. Implemented multi-threading and AJAX polling for improved user experience. Tech Stack: Django, React.",
      github: "https://github.com/AakibAlam/cv-shortlister-frontend",
      demo: "https://parse.cvninja.studio/",
    },
    {
      img: "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
      name: "Codeforces Submission Scraping",
      desc: "Created a solution for real-time Codeforces submissions updates from friends with 95% accuracy. Employed web scraping for data retrieval and SendGrid API for email communication. Tech Stack: Python, Selenium.",
      github: "https://github.com/AakibAlam/codeforces-submission-scraping",
      demo: "",
    },
    {
      img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/033/904/datas/original.jpg",
      name: "Movie Recommendation System",
      desc: "Designed a movie recommendation system based on user input or selected genre. Implemented TF-IDF Vectorizer for embedding and Cosine Similarity for accuracy. Tech Stack: Flask, MongoDB.",
      github: "https://github.com/AakibAlam/movie-recommender-system",
      demo: "https://cineema.azurewebsites.net/",
    },
    {
      img: "https://cdn.educba.com/academy/wp-content/uploads/2019/08/Cryptosystems.jpg",
      name: "Breaking Cryptosystem",
      desc: "Developed cipher algorithms (DES, AES, SHA3) in C++, identified vulnerabilities to uncover hidden keys. Conducted cryptanalysis on various ciphers, including DES, EAEAE, and RSA with a low public exponent, employing Coppersmith's LLL-based attack.",
      github: "https://github.com/AakibAlam/breaking-cryptosystems",
      demo: "",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1200/1*0DEK_ouEZZz4_MMdhKE_Wg.png",
      name: "Connecting the First Search",
      desc: "Mastered graph algorithms (DFS/BFS), explored shortest paths (Dijkstra, Bellman-Ford, Floyd Warshall), implemented 2-SAT, and studied disjoint set union, path compression, and minimum spanning tree algorithms(Kruskal, Prim)",
      github: "https://github.com/AakibAlam/connecting_the_first_search",
      demo: "",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:900/0*TDgnPm06sS0np--2.jpg",
      name: "Demistifying Algorithms",
      desc: "Mastered essential Data Structures and Algorithms for Competitive Programming, including Sieve of Eratosthenes and its variations. Acquired skills in Segment Tree, Binary Indexed Tree (Fenwick Tree), Square Root Decomposition, and MO's Algorithm.",
      github: "https://github.com/AakibAlam/Demistifying_Algorithm",
      demo: "",
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
              My Projects
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            Let my projects speak for themselves.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        id="projects-section"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${index * 50}ms` }}
                className="transition-all duration-1000"
              >
                <ProjectCard
                  img={project.img}
                  name={project.name}
                  desc={project.desc}
                  github={project.github}
                  demo={project.demo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
