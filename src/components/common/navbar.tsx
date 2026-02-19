'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex">
          <div className="rounded-full border border-white/20 bg-background/70 p-2 shadow-lg backdrop-blur-sm">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navbar Trigger */}
        <div className="md:hidden flex flex-1 justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-background/70 backdrop-blur-sm border-white/20 text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] bg-background/95 border-l-border/50 backdrop-blur-md">
              <nav className="flex flex-col pt-16">
                <ul className="flex flex-col items-center gap-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href} className="w-full">
                       <SheetClose asChild>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-center px-4 py-3 text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground rounded-lg"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
