import ScrollReveal from "@/components/common/scroll-reveal";
import { Badge } from "@/components/ui/badge";

const skills = {
  software: ["Aspen Plus", "Aspen HYSYS", "MATLAB", "AutoCAD", "C++", "SAP System"],
  lab: ["ASTM Testing Standards", "MST Instrumentation"],
  languages: ["English", "Malay", "Chinese", "Japanese (Conversant)", "French (Conversant)"]
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, index) => (
        <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-normal bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20 cursor-default">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            Technical Skills
          </h2>
        </ScrollReveal>
        
        <div className="space-y-10">
          <ScrollReveal delay={100}>
            <SkillCategory title="Software" items={skills.software} />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <SkillCategory title="Lab & QA/QC" items={skills.lab} />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <SkillCategory title="Languages" items={skills.languages} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
