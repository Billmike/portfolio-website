import { GitFork, Linkedin, Twitter } from "lucide-react";
import TypewriterText from "./TypewriterText";
import FadeInText from "./FadeInText";

export function IntroHeader() {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:h-screen py-8 lg:py-24">
      <div className="flex flex-col lg:justify-between lg:h-full">
        <div>
          <FadeInText delay={100} duration={1000}>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 font-winky-rough" id="intro">Hi, I am Kayode</h1>
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
          <nav className="hidden lg:block">
            <ul className="mt-16 w-max">
              <li><a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a></li>
              <li><a className="group flex items-center py-3 active" href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a></li>
              <li><a className="group flex items-center py-3 active" href="#contact"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span></a></li>
            </ul>
          </nav>
        </div>
        <ul className="ml-1 flex items-center mt-8 lg:mt-0" aria-label="Social links">
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
  );
} 