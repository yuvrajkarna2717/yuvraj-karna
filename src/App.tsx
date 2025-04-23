import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "MailPoop",
    description: [
      "Newsletter SaaS with Google login & Stripe payment integration",
      "Built using React, Node.js, Express, MongoDB",
      "Real-time email editor with preview and scheduling",
      "Fully responsive and optimized for SEO",
    ],
    github: "https://github.com/your-username/mailpoop",
    live: "https://mailpoop.live",
  },
  {
    title: "TrackIt CLI",
    description: [
      "Command-line task manager built in Node.js",
      "Supports adding, deleting, listing, and marking tasks",
      "Stores tasks in JSON for portability",
      "Published as an NPM package",
    ],
    github: "https://github.com/your-username/trackit-cli",
    live: "https://npmjs.com/package/trackit-cli",
  },
  {
    title: "ExpressIt",
    description: [
      "Blog platform with likes, comments, and full post view",
      "Includes AI chatbot integration for user interaction",
      "Built with React, Express, and MongoDB",
      "User-friendly UI with real-time updates",
    ],
    github: "https://github.com/your-username/expressit",
    live: "https://expressit.live",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white font-sans overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0 pointer-events-none" />

      {/* Layout Container */}
      <div className="relative z-10 flex flex-col md:flex-row h-screen overflow-hidden">
        {/* Left Side - Static Info */}
        <div className="w-full md:w-1/3  max-w-md  p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="text-white text-3xl animate-arrow-bounce">
              <div className="flex items-center text-white text-xl">
                <span className="animate-arrow-bounce">➡️</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Yuvraj Karna
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-4">
              Software Developer
            </p>
            <a
              href="/resume.pdf" // Replace with actual path
              download
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg mb-6 text-sm md:text-base"
            >
              Download Resume
            </a>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/yuvrajkarna2717"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvrajkarna2717"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-10 hidden md:block">
            © 2025 Yuvraj Karna
          </div>
        </div>

        {/* Right Side - Scrollable Sections */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-16 md:space-y-20">
          <section id="summary">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a results-driven software developer with a strong background
              in building end-to-end full-stack applications, crafting intuitive
              user interfaces, and integrating modern AI tools. I thrive in
              fast-paced environments where creativity meets code, and I'm
              passionate about solving real-world problems through clean,
              scalable, and efficient software solutions.
            </p>
          </section>

          <section id="about">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a curious and driven software engineer who thrives on building
              real-world applications from creative ideas. With a strong
              foundation in JavaScript, Node.js, React, and Python, I enjoy
              crafting seamless user experiences and scalable backend systems.
              My focus lies in delivering clean, efficient, and impactful code
              that solves real problems.
            </p>
            <div className="text-gray-400 space-y-1">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                +91-XXXXXXXXXX
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                your.email@gmail.com
              </p>
            </div>
          </section>

          <section id="projects">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Projects
            </h2>

            <div className="space-y-10">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 p-6 rounded-xl shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-4 text-lg">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Experience
            </h2>
            <p>
              I hosted coding contests and taught Data Structures & Algorithms
              during my engineering. I currently work on full-stack products,
              focusing on performance and usability.
            </p>
          </section>

          {/* Mobile copyright */}
          <div className="text-sm text-gray-500 block md:hidden pt-10 text-center">
            © 2025 Yuvraj Karna
          </div>
        </div>
      </div>
    </div>
  );
}
