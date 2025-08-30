'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { trackProjectClick } from "@/app/lib/analytics";

const projects = [
  {
    title: "Famasi Africa",
    description: "Famasi Africa is a platform that allows you to find your prescription from the comfort of your home.",
    technologies: ["JavaScript", "React", "TypeScript", "React Native", "Node.js", "PostgreSQL", "GraphQL", "Jest"],
    href: "https://www.famasi.africa/",
    logo: "/famasi-screenshot.png",
  },
  {
    title: "Risevest",
    description: "Risevest is a platform that gives you access to a carefully selected portfolio of global investments, across US stocks, US real estate and fixed income assets.",
    technologies: ["JavaScript", "React", "TypeScript", "React Native", "Node.js", "PostgreSQL", "GraphQL", "Jest"],
    href: "https://www.risevest.com/",
    logo: "/risevest-screenshot.png",
  },
  {
    title: "Revue AI",
    description: "Revue AI is a chrome extension that enhances your GitHub pull request workflow by providing intelligent, automated code reviews. It analyzes your PR changes and provides contextual suggestions, helping you catch potential issues before they reach production",
    technologies: ["JavaScript", "LLM", "OpenAI", "Anthropic", "Gemini", "AI", "Chrome Extension"],
    href: "https://chromewebstore.google.com/detail/revueai/eopnhkmpfhenpnmlnfibhceafplgfifj?utm_source=item-share-cp",
    logo: "/revueai-screenshot.png",
  }
];

export function Projects() {
  const handleProjectClick = (projectName: string, projectUrl: string) => {
    trackProjectClick(projectName, projectUrl);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-200 mb-8">Projects</h2>
      <ol className="group/list">
        {projects.map((project) => (
          <li key={project.title} className="mb-12">
            <a 
              href={project.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 p-4 rounded-lg duration-300"
              onClick={() => handleProjectClick(project.title, project.href)}
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-teal-500/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  {project.logo && <Image src={project.logo} alt={project.title} width={280} height={48} />}
                </div>
              </div>
              <div className="col-span-6">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-1">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </h3>
                <p className="leading-normal text-sm mt-2 text-slate-200">{project.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {technology}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

