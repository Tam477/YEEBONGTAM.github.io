
"use client";

import { useState, useEffect, useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const totalFrames = 121;
const frames = Array.from({length: totalFrames}, (_, i) => `https://cbzntqkaprzxzklgtkfc.supabase.co/storage/v1/object/public/2nd_ver/frame_${String(i).padStart(3, '0')}_delay-0.033s.webp`);

const roles = [
  "Climate & Industrial Risk Analyst",
  "Technical Media Strategist",
  "Process Simulation Specialist",
  "Technical Product Developer"
];

export default function HeroSection() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const preloadedImages = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload frames and store in ref to prevent garbage collection
    const images = frames.map((src) => {
      const img = new window.Image();
      img.src = src;
      return img;
    });
    preloadedImages.current = images;

    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
    }, 40);

    return () => clearInterval(frameInterval);
  }, []);

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Wait before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 80 : 150);
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative flex h-screen w-full flex-col text-white overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        {/* Using standard img tag for high-frequency animation to avoid Next.js Image overhead flicker */}
        <img
          src={frames[currentFrame]}
          alt="Animated background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center pt-20">
        <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8">
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-medium text-primary">Hello, I am</p>
            <h1 className="font-extrabold tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              TAM YEE
              <br />
              BONG
            </h1>
            
            <div className="h-8 mt-4 text-xl md:text-2xl font-semibold text-primary min-h-[1.5em] flex items-center">
              <span>{text}</span>
              <span className="w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>#01 Process Optimization</span>
              <span>#02 Sustainable Planning</span>
              <span>#03 Process Safety</span>
              <span>#04 Data-Driven Eng</span>
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href="#projects">View My Projects</Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-start justify-center text-left md:items-end md:text-right">
            <h2 className="flex items-center gap-3">
              <div className="text-right leading-tight">
                <span className="text-xl font-semibold md:text-2xl">Chemical Engineering</span>
                <br />
                <span className="text-base font-normal md:text-lg">Universiti Teknologi Malaysia</span>
              </div>
              <div className="h-16 w-px bg-foreground/80" />
              <div className="text-left font-semibold text-xl md:text-2xl leading-tight">
                <span>Future-Ready</span>
                <br />
                <span>Innovator</span>
              </div>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Blending chemical engineering principles with data-driven tools to design sustainable industrial solutions. Champion of the 2024 Chem-E-Car Competition. Production & Compounding Engineering Intern at Top Glove
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 flex justify-center py-8">
        <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary/20 hover:text-primary rounded-full" asChild>
            <a href="https://www.linkedin.com/in/tam-yee-bong-047933225/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
            </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary/20 hover:text-primary rounded-full" asChild>
            <a href="mailto:tamyeebong12345@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
            </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
