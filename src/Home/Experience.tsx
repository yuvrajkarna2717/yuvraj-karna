import AnimationTitle from "./AnimationTitle";

const techStack = [
  "Javascript",
  "React.js",
  "Redux.js",
  "Bootstrap",
  "API integration",
  "Responsive Design",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full md:py-6 py-4 my-6 px-6 md:px-20 text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center mb-4 mt-2">
        {/* Quote */}
        <blockquote className="md:text-5xl sm:text-4xl text-3xl italic text-black font-light">
          "The only source of knowledge is experience."
        </blockquote>
        <cite className="block mt-4 text-gray-500 text-sm">
          — Albert Einstein
        </cite>
      </div>

      <div className="max-w-4xl mx-auto md:mt-10">
        <AnimationTitle title="Experience" />

        {/* Experience Card */}
        <div className="space-y-6 md:mt-14 sm:mt-10 mt-8">
          <div className="border-b pb-6">
            <div className="flex justify-between items-center">
              <p className="md:text-3xl sm:text-2xl text-xl md:font-bold  sm:font-semibold font-medium capitalize">
                Iquadra information services LLC
              </p>
              <p className="text-sm text-gray-600 mb-1">June 2024 – Present</p>
            </div>
            <span className="font-medium tracking-wider mt-2">
              Software Engineer Intern
            </span>
        

            <ul className="list-disc list-inside text-base space-y-1 mb-3">
              <li>
                Developed and optimized client dashboards with seamless API
                integration, reducing load times by 10%.
              </li>{" "}
              <li>
                {" "}
                Refactored and improved the Redux store, enhancing state
                management efficiency and reducing codebase size by 600+ lines,
                Increasing maintainability and performance.
              </li>{" "}
              <li>
                {" "}
                Enhanced data fetching efficiency and user experience by
                integrating SWR (stale-while-revalidate), boosted caching
                efficiency and reduced API latency.
              </li>{" "}
              <li>
                {" "}
                Boosted website performance by 20% through advanced techniques,
                including lazy loading, minimizing re-renders, and leveraging
                SWR for caching.
              </li>
              <li>
                Resolved 50+ critical bugs across multiple products and
                versions, improving system stability, reducing downtime by 60%
                and ensuring a seamless client experience.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-md font-bold">
              <a
                href="https://company-verify-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black  hover:underline hover:text-gray-800"
              >
                Verify Employment
              </a>
              <a
                href="https://www.iqua.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black  hover:underline hover:text-gray-800"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
