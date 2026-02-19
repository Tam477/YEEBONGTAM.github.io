import ScrollReveal from "@/components/common/scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "Sustainable Industrial Planning (FYP)",
    description: "Engineered a Multi-Criteria Decision Analysis (MCDA) tool to optimize CAPEX vs. Global Warming Potential. Designed a Strategic Response Matrix for Net Zero targets."
  },
  {
    title: "Chem-E-Car Competition (Champion)",
    description: "Team Lead. Secured the Champion title by engineering a chemically powered vehicle with precise reaction kinetics and MATLAB simulations."
  },
  {
    title: "Green Innovation",
    description: "Designed a dual-stage filtration framework integrating Hydrocyclones to remove micro-particles in industrial water treatment."
  },
  {
    title: "Plant Design: PFAD-to-Biodiesel Plant",
    description: "This project highlights the successful integration of rigorous Aspen Plus simulations and Pinch Analysis with strategic decision-making to overcome logistical data challenges."
  },
  {
    title: "Be Wise with Microplastics 2022 (BWMP2022)",
    description: "Developed a custom MATLAB script using Multi-Criteria Decision Making (MCDM) to evaluate and optimize the cost-effectiveness and technical viability of three engineering strategies for local microplastic mitigation."
  },
  {
    title: "National Chemical Engineering Symposium 2024",
    description: "Utilises MATLAB simulations and AI-driven process optimisation to demonstrate how the chemical industry can transition to a sustainable circular economy."
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className="h-full rounded-xl bg-secondary/5 backdrop-blur-md border border-secondary/20 transition-all duration-300 hover:scale-[1.03] hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="pt-4 text-base text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
