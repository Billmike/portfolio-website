import { Experience, Contact, MobileNavigation, IntroHeader, AboutSection } from "@/app/components";

export default function Home() {
  return (
    <div className="bg-[rgb(4,9,21)]">
      <MobileNavigation />
      
      {/* Desktop Layout - Two Column */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen max-w-7xl mx-auto lg:px-0">
        <IntroHeader />
        <div className="py-24">
          <AboutSection />
          <section id="experience" className="mb-16 scroll-mt-20">
            <Experience />
          </section>
          <section id="contact" className="mb-16 scroll-mt-20">
            <Contact />
          </section>
        </div>
      </div>

      {/* Mobile Layout - Single Column Scrollable */}
      <div className="lg:hidden max-w-7xl mx-auto px-6">
        <IntroHeader />
        <div id="mobile-about" className="scroll-mt-64">
          <AboutSection />
        </div>
        <section id="mobile-experience" className="mb-16 scroll-mt-20">
          <Experience />
        </section>
        <section id="mobile-contact" className="mb-16 scroll-mt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
}
