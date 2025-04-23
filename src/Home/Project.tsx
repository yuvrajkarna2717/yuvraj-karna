import projectImage from "../assets/Visualizer.png";

const projectsData = [
  {
    name: "MailPoop",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "OAuth"],
    points: [
      "Newsletter SaaS with Google login and Stripe integration",
      "Handles recurring billing using Stripe Subscriptions",
      "User dashboard to manage campaigns and subscriber lists",
      "Authentication secured with OAuth 2.0",
      "Responsive UI using Tailwind CSS",
    ],
    github: "https://github.com/yuvrajkarna2717/mailpoop",
    live: "https://mailpoop.vercel.app",
    image: projectImage,
  },
  {
    name: "TrackIt CLI",
    techStack: ["Node.js", "Inquirer", "Chalk", "Commander"],
    points: [
      "A terminal-based task manager CLI tool",
      "Add, update, delete and list tasks using commands",
      "Tasks are stored persistently in local JSON files",
      "Supports due dates, priorities, and status updates",
    ],
    github: "https://github.com/yuvrajkarna2717/trackit-cli",
    image: projectImage,
  },
  {
    name: "ExpressIt",
    techStack: ["React", "Express", "MongoDB", "Socket.io"],
    points: [
      "Blogging platform with like, comment and upvote features",
      "Chatbot integrated for real-time support",
      "Realtime updates with WebSocket (Socket.io)",
      "Authentication & Authorization using JWT",
    ],
    github: "https://github.com/yuvrajkarna2717/expressit",
    image: projectImage,
  },
  {
    name: "ExpressIt",
    techStack: ["React", "Express", "MongoDB", "Socket.io"],
    points: [
      "Blogging platform with like, comment and upvote features",
      "Chatbot integrated for real-time support",
      "Realtime updates with WebSocket (Socket.io)",
      "Authentication & Authorization using JWT",
    ],
    github: "https://github.com/yuvrajkarna2717/expressit",
    image: projectImage,
  },
];

export default function Project() {
  return (
    <section id="projects" className="w-full md:py-16 py-6 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-3xl md:text-4xl font-bold mb-10 text-center animate-wiggle">
          Projects
        </p>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 border-b pb-6"
          >
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Tech Stack:</span>{" "}
                {project.techStack.join(", ")}
              </p>

              <ul className="list-disc list-inside space-y-1 text-base mb-3">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex gap-4 text-sm flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Image block with click redirect */}
            <div className="w-full md:w-1/3 flex justify-center">
              <a
                href={project.live || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-60 h-60 block rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={project.image}
                  alt={`${project.name} Screenshot`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:blur-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">Link</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
