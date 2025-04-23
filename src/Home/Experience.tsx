import AnimationTitle from "./AnimationTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full md:py-16 my-6 px-6 md:px-20 text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <AnimationTitle title="Experience" />

        {/* Experience Card */}
        <div className="space-y-6 md:mt-20 sm:mt-12 mt-8">
          <div className="border-b pb-6">
            <div className="flex justify-between items-center">
              <p className="md:text-3xl sm:text-2xl text-xl md:font-bold  sm:font-semibold font-medium">
                TechNova Solutions
              </p>
              <p className="text-sm text-gray-600 mb-1">Jan 2023 – Mar 2024</p>
            </div>
            <span className="font-medium tracking-wider mt-2">Software Engineer</span>
            <p className="text-sm text-gray-600 mb-3 mt-3">
              <span className="font-medium">Tech Stack:</span> React, Node.js,
              MongoDB, Tailwind CSS
            </p>

            <ul className="list-disc list-inside text-base space-y-1 mb-3">
              <li>Built and deployed 5+ full-stack web applications.</li>
              <li>
                Optimized frontend performance and SEO using best practices.
              </li>
              <li>
                Integrated REST APIs with secure authentication and
                authorization.
              </li>
              <li>Led UI/UX improvements that boosted engagement by 25%.</li>
            </ul>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://company-verify-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Verify Employment
              </a>
              <a
                href="https://project-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Add more experiences here by duplicating the above block */}
        </div>
      </div>
    </section>
  );
}
