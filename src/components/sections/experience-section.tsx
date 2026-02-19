import ScrollReveal from "@/components/common/scroll-reveal";
import Image from "next/image";

const experiences = [
  {
    role: "Industrial Trainee",
    company: "Top Glove",
    date: "Jul 2025 – Oct 2025",
    description: "Led initiatives to boost production efficiency using MST analysis. Maintained ISO 9001:2015 compliance across 8 lines and executed ASTM D412 mechanical testing.",
    image: "https://cbzntqkaprzxzklgtkfc.supabase.co/storage/v1/object/public/Webp%20Sequence/WhatsApp%20Image%202026-02-18%20at%2011.11.06%20AM.jpeg"
  },
  {
    role: "Multimedia and Publicity Executive Committee Member",
    company: "The Institution of Engineers, Malaysia - UTM Student Section (IEM-UTM SS)",
    date: "Oct 2023 - Jun 2024",
    description: "Led strategic multimedia campaigns and publicity for technical talks and industrial visits, effectively bridging the gap between complex engineering initiatives and student engagement.",
    image: "https://cbzntqkaprzxzklgtkfc.supabase.co/storage/v1/object/public/Webp%20Sequence/utmss.jpeg"
  },
  {
    role: "Sales Executive",
    company: "LEA Centre",
    date: "Dec 2020 - Mar 2021",
    description: "Optimized visual merchandising and inventory management while exceeding monthly sales targets.",
    image: "https://cbzntqkaprzxzklgtkfc.supabase.co/storage/v1/object/public/Webp%20Sequence/lea.jpeg"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Professional Experience
          </h2>
        </ScrollReveal>
        <div className="relative mt-12 pl-4">
          <div className="absolute left-4 top-2 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="relative flex items-start">
                  <div className="absolute left-4 top-2.5 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary ring-4 ring-background shadow-lg shadow-secondary/50" aria-hidden="true" />
                  <div className="pl-10 flex flex-col md:flex-row gap-6 w-full">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{exp.date}</p>
                      <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                      <p className="font-semibold text-foreground">{exp.company}</p>
                      <p className="mt-2 text-muted-foreground">{exp.description}</p>
                    </div>
                    {exp.image && (
                      <div className="relative w-full md:w-32 h-48 md:h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-xl">
                        <Image
                          src={exp.image}
                          alt={`${exp.company} - ${exp.role}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
