import projectImage from "../assets/Visualizer.png";
import ProjectCard from "./ProjectCard";


// projectsData.js
const projects = [
  {
    title: "React-hook-granth",
    description:
      "A powerful NPM package with 15+ reusable custom React hooks, designed to minimize boilerplate and maximize developer productivity.",
    techStack: ["React.js", "JavaScript", "NPM", "Vitest", "Jest"],
    highlights: [
      "When building React applications, I noticed a recurring pattern: writing custom hooks for commonly needed functionality often felt repetitive and time-consuming. That's when I decided to create an NPM package, react-hook-granth, to help developers like myself avoid redundant code and focus on building meaningful features.",
      "This package offers 15+ reusable, customizable React hooks designed to save you time and reduce boilerplate. Whether you need to manage local storage, handle API calls, or set up timers, these hooks have you covered!",
      "To ensure maximum reliability and maintainability, I pushed for 100% test coverage using Vitest. With this, you can trust that every hook is well-tested and ready for production use. The package is also modular, which means you can import only the hooks you need, keeping your codebase clean and efficient.",
    ],
    github: "https://github.com/yuvrajkarna2717/react-hook-granth",
    live: "https://npmjs.com/package/react-hook-granth",
    image: "/images/react-hook-granth.png",
  },
  {
    title: "Visualizer",
    description:
      "An interactive platform for learning and visualizing sorting algorithms through real-time animations.",
    techStack: [
      "TypeScript",
      "React.js",
      "TailwindCSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    highlights: [
      "Learning algorithms can often feel abstract and theoretical, especially when it comes to sorting algorithms. That's why I decided to build an interactive sorting visualizer to help developers and students better grasp these concepts through real-time animations.",
      "Using TypeScript, React.js, and TailwindCSS, I created a user-friendly platform that lets you visualize how sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort work in real time. Instead of reading dry descriptions, users can now watch the algorithms in action, which makes understanding complex algorithms much easier.",
    ],
    github: "https://github.com/yuvrajkarna2717/Sorting_Visualizer",
    live: "https://visualizer-live-link.com",
    image: projectImage,
  },
  {
    title: "ScrapeBackend-API",
    description:
      "A high-performance web scraping API built with Node.js and Puppeteer, optimized with Redis caching.",
    techStack: ["Node.js", "Puppeteer", "MongoDB", "Redis"],
    highlights: [
      "While working with large-scale data scraping tasks, I encountered a major bottleneck: slow response times when fetching data from multiple websites. To solve this, I built a powerful web scraping API that can handle 1000+ scraping tasks daily with significantly improved speed and reliability.",
      "By integrating Redis caching into the API, I managed to achieve 40% faster response times, while also reducing database load by 30%. This caching system ensures that repeated requests don't overwhelm the database, making the API more scalable and efficient.",
      "Moreover, I implemented rate-limiting middleware to prevent abuse of the scraping routes and maintain system performance.",
    ],
    github: "https://github.com/yuvrajkarna2717/ScrapeBackend-API",
    live: "",
    image: "/images/scrape-backend.png",
  },
  {
    title: "ExpressIt (Blog App)",
    description:
      "A real-time blog platform enabling media uploads, comments, likes, and upvotes for a seamless user experience.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis"],
    highlights: [
      "Creating a platform where people can engage, share ideas, and build a community is no small feat. That's why I set out to build a community platform that would not only enable users to connect but also offer a seamless, interactive experience.",
      "With 50+ active users, the platform has become a thriving space for discussion and collaboration. To enhance the user experience, I incorporated interactive features such as real-time messaging, dynamic profiles, and personalized notifications. This approach led to a 45% increase in user engagement, as users found themselves more connected and invested in the community.",
      "But user engagement wasn't the only area I focused on. I knew that a fast, responsive platform was essential to keep users coming back. To ensure a smooth experience, I optimized backend queries and implemented caching strategies. These improvements resulted in a 35% faster page load time, ensuring that users could access their content quickly, without unnecessary delays."
    ],
    github: "https://github.com/yuvrajkarna2717/ExpressIt-Frontend",
    live: "",
    image: "/images/expressit.png",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full md:py-16 py-6 px-6 md:px-20 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <div className="animate-wiggle mb-10">
          <p className="text-3xl md:text-4xl font-bold  text-center ">
            Projects
          </p>
          <div className="flex flex-col items-center space-y-[2px] mt-1">
            <div className="h-[0.15rem] w-full max-w-[150px] bg-black"></div>
            <div className="h-[0.15rem] w-full max-w-[150px] bg-black"></div>
          </div>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
