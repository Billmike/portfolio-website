import Image from "next/image";

const experiences = [
  {
    startDate: "Feb 2022",
    endDate: "PRESENT",
    title: "Software Engineer, Supply Expert Function",
    company: "Zalando",
    href: "https://zalando.com",
    logo: "/zalando-logo.svg",
    description: "Design, build, and maintain critical partner infrastructure supporting Zalando’s Supply Expert function. Collaborate closely with cross-functional teams—including developers, designers, and product managers—to deliver on the product roadmap efficiently and on schedule.",
    technologies: ["JavaScript", "React", "Next.js", "Kotlin", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "AWS", "Docker", "Kubernetes"],
  },
  {
    startDate: "Feb 2020",
    endDate: "Feb 2022",
    title: "Senior Full Stack React Native Engineer",
    company: "Risevest",
    href: "https://risevest.com",
    logo: "/risevest-logo.svg",
    description: "Led the end-to-end full-stack rebuild of the Rise Mobile Platform, resulting in a 120% increase in Assets Under Management within six months. Designed secure, JWT-based REST APIs to safeguard financial transactions, and implemented automated testing (Detox, Jest) alongside streamlined CI/CD pipelines to ensure rapid, reliable mobile releases.",
    technologies: ["JavaScript", "React", "React Native", "Node.js", "PostgreSQL", "Zustand", "Jest", "Detox", "CI/CD"],
  },
  {
    startDate: "Sep 2018",
    endDate: "Dec 2019",
    title: "Software Engineer",
    company: "Shiftboard (via Andela)",
    href: "https://shiftboard.com",
    description: "Owned and delivered high-impact features for workforce management platforms, including data-driven shift scheduling tools with a focus on rich UI/UX and accessibility. Collaborated on the design and implementation of scalable GraphQL and REST APIs to support performant, maintainable systems.",
    technologies: ["JavaScript", "React", "React Native", "Node.js", "PostgreSQL", "GraphQL", "Jest"],
  },
  {
    startDate: "Dec 2017",
    endDate: "Feb 2020",
    title: "Software Engineer",
    company: "Andela",
    href: "https://andela.com",
    description: "Developed and maintained full-stack applications featuring secure user authentication, real-time capabilities, and optimized database performance. Actively mentored engineers on modern React and Node.js best practices while contributing to both open-source projects and internal knowledge-sharing initiatives.",
    technologies: ["JavaScript", "React", "React Native", "Node.js", "PostgreSQL"],
  },
];

export function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-200 mb-8">Experience</h2>
      <ol className="group/list">
        {experiences.map((experience) => (
          <li key={experience.company} className="mb-12">
            <a 
              href={experience.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 p-4 rounded-lg duration-300"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-teal-500/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="text-xs text-slate-200 tracking-wide font-semibold col-span-2">{experience.startDate} - {experience.endDate}</header>
              <div className="col-span-6">
                <h3 className="text-lg font-bold text-slate-200">{experience.title}</h3>
                <span className="text-slate-200 font-semibold mt-2 block">
                  <span className="text-slate-200 font-semibold inline-flex items-center gap-2">
                    {experience.company}
                    {experience.logo && <Image src={experience.logo} alt={experience.company} width={16} height={16} />}
                  </span>
                </span>
                <p className="leading-normal text-sm mt-2 text-slate-200">{experience.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {experience.technologies.map((technology) => (
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