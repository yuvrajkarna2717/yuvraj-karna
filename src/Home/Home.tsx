import { AboutMe } from "./AboutMe";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Project from "./Project";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white text-white font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0 pointer-events-none" />
      <Navbar />
      <Hero />
      <Experience />
      <Project />
      <AboutMe />
      <Footer />
    </main>
  );
}
