import { Experience, Contact, MobileNavigation, IntroHeader, AboutSection } from "@/app/components";

export default function Home() {
  return (
    <div className="bg-[rgb(4,9,21)]">
      <MobileNavigation />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-7xl mx-auto px-6 lg:px-0">
                <IntroHeader />
      {/* Main Content Section */}
      <div className="py-8 lg:py-24">
        <AboutSection />
          <section id="experience" className="mb-16">
            <Experience />
          </section>
          <section id="contact" className="mb-16">
            <Contact />
          </section>
      </div>
    </div>
    </div>
  );
}
