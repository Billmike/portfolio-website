import { GitFork, Linkedin, Twitter } from "lucide-react";
import TypewriterText from "./components/TypewriterText";
import FadeInText from "./components/FadeInText";
import { Experience } from "@/app/components";

export default function Home() {
  return (
    <div className="bg-[rgb(4,9,21)]">
    <div className="grid grid-cols-2 min-h-screen overflow-y-auto max-w-7xl mx-auto">
      <header className="sticky top-0 h-screen flex py-24">
        <div className="flex flex-col justify-between h-full">
          <div>
            <FadeInText delay={100} duration={1000}>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 font-winky-rough">Hi, I am Kayode</h1>
            </FadeInText>
            <FadeInText delay={200} duration={1000}>
              <h2 className="text-lg sm:text-xl mt-3 text-slate-200">
                Senior Software Engineer
              </h2>
            </FadeInText>
            <p className="mt-4 leading-normal text-white">
            <TypewriterText 
              text="I am a software engineer with a passion for building web applications."
              speed={50}
              delay={200}
            />
          </p>
            <nav>
              <ul className="mt-16 w-max">
              <li><a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a></li>
              <li><a className="group flex items-center py-3 active" href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a></li>
              <li><a className="group flex items-center py-3 active" href="#contact"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span></a></li>
              </ul>
            </nav>
          </div>
          <ul className="ml-1 flex items-center" aria-label="Social links">
            <li className="mr-5 shrink-0 text-xs">
              <a href="https://github.com/kayode-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" title="GitHub">
                <GitFork className="w-6 h-6" style={{ color: '#36e0db' }} />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" title="LinkedIn">
                <Linkedin className="w-6 h-6" style={{ color: '#36e0db' }} />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter (opens in new tab)" title="Twitter">
                <Twitter className="w-6 h-6" style={{ color: '#36e0db' }} />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="py-24">
        <section id="about" className="mb-16">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a Senior Software Engineer with over 8 years of experience building high-impact products across fintech, health tech, e-scheduling, and fashion commerce. As a full-stack developer, I specialize in JavaScript, React, Next.js, and Kotlin, with a growing interest in backend architecture, AI, and immersive technologies like AR/VR.
            </p>
            <p>
              Throughout my career, I&apos;ve led multiple engineering teams and played a key role in scaling products and businesses — including helping grow a company&apos;s assets under management to over $2 million. I thrive in fast-paced environments where open communication, experimentation, and mentorship are encouraged. I&apos;m passionate about solving real-world problems and sharing what I know to help others grow.
            </p>
            <p>
              Outside of work, you&apos;ll often find me experimenting with personal projects, making music, racing around a Go Kart track, or spending time with my kid — all of which keep me balanced and inspired.
            </p>
          </div>
        </section>
          <section id="experience" className="mb-16">
          <Experience />
        </section>
      </div>
    </div>
    </div>
  );
}
