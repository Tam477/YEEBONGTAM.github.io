import ScrollReveal from "@/components/common/scroll-reveal";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <footer id="contact" className="w-full py-20 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Innovate?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a 
                href="https://docs.google.com/document/d/1nHTEe-GyvzQk_HrsZlclVf-J3x0Bth8IL6JVo2MbELQ/edit?tab=t.0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto hover:bg-secondary hover:text-secondary-foreground hover:border-secondary">
              <a href="mailto:tamyeebong12345@gmail.com">Contact Me</a>
            </Button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200} className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-muted-foreground">
            <a href="mailto:tamyeebong12345@gmail.com" className="hover:text-primary transition-colors">tamyeebong12345@gmail.com</a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground/50">
            © {new Date().getFullYear()} Tam Yee Bong. All Rights Reserved.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
