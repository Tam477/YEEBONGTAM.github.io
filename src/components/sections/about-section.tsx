import ScrollReveal from "@/components/common/scroll-reveal";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary">
            Engineering the Future
          </h2>
          <p className="mt-6 text-center text-lg text-muted-foreground md:text-xl">
            A hardworking and passionate Chemical Engineer with a strong foundation in chemical processes and a commitment to continuous learning. As a fast learner, I quickly adapt to new challenges and technologies, driving efficient solutions in dynamic environments. My persistent approach ensures thorough problem-solving and excellence in all projects. Eager to contribute my knowledge and skills to innovative engineering teams.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
