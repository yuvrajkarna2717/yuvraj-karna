import { Link } from "react-router-dom";

const posts = [
  {
    slug: "rate-limiter",
    title: "Rate Limiter Complete Guide",
    date: "April 23, 2024",
    description:
      "Understand what rate limiting is, why it matters, and how to implement it in different environments with some examples.",
  },
  {
    slug: "seo-for-developers",
    title: "SEO for Developers: A Guide to Boosting Your Website's Visibility",
    date: "April 24, 2025",
    description:
      "Learn how developers can optimize websites for search engines with practical tips and strategies to improve visibility and traffic.",
  },
  {
    slug: "websockets-guide",
    title: "WebSockets in Depth: Real-Time Communication for the Web",
    date: "April 25, 2025",
    description:
      "Explore how WebSockets work, their advantages over HTTP, and how to use them to build real-time applications with examples.",
  },
  {
    slug: "rate-limiter",
    title: "Rate Limiter Complete Guide",
    date: "April 23, 2024",
    description:
      "Understand what rate limiting is, why it matters, and how to implement it in different environments with some examples.",
  },
  {
    slug: "seo-for-developers",
    title: "SEO for Developers: A Guide to Boosting Your Website's Visibility",
    date: "April 24, 2025",
    description:
      "Learn how developers can optimize websites for search engines with practical tips and strategies to improve visibility and traffic.",
  },
  {
    slug: "websockets-guide",
    title: "WebSockets in Depth: Real-Time Communication for the Web",
    date: "April 25, 2025",
    description:
      "Explore how WebSockets work, their advantages over HTTP, and how to use them to build real-time applications with examples.",
  },
];

export default function BlogList() {
  return (
    <div className="relative min-h-screen bg-white w-full font-sans md:py-8 sm:py-4 py-0 px-4 sm:px-6 md:px-12">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db1a_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db1a_1px,transparent_1px)] bg-[size:10px_18px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center font-serif text-black ">
          📚 My Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group block bg-white  p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200  hover:scale-[1.02]"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600  transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600  text-sm leading-relaxed mb-4 line-clamp-3">
                {post.description}
              </p>
              <p className="text-gray-500 text-xs tracking-wide">
                📅 {post.date}
              </p>
            </Link>
          ))}
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group block bg-white  p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200  hover:scale-[1.02]"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600  transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600  text-sm leading-relaxed mb-4 line-clamp-3">
                {post.description}
              </p>
              <p className="text-gray-500 text-xs tracking-wide">
                📅 {post.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
