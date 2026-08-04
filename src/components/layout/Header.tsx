import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import bwanjiLogo from '@assets/Bwanji-10_1778167375966.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b border-white/10 bg-black ${
        scrolled ? 'backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 h-[72px] flex items-center justify-between">
        <Link to="/" data-testid="link-home" className="flex items-center logo-pulse">
          <img
            src={bwanjiLogo}
            alt="Bwanji Agency"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <div className="relative group py-6">
            <span className="cursor-default flex items-center gap-1 group-hover:text-[var(--brand-accent)] transition-colors">
              What We Do <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </span>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-black border border-white/10 shadow-xl py-2 min-w-[240px]">
              <Link to="/what-we-do/brand-strategy/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Brand Strategy</Link>
              <Link to="/what-we-do/creative-and-content/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Creative & Content</Link>
              <Link to="/what-we-do/digital-and-performance/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Digital & Performance</Link>
              <Link to="/what-we-do/public-relations/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Public Relations</Link>
              <Link to="/what-we-do/activation/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Activation & Experiential</Link>
              <Link to="/what-we-do/advisory/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Advisory</Link>
            </div>
          </div>

          <Link to="/work/" className="hover:text-[var(--brand-accent)] transition-colors py-6">Work</Link>
          <Link to="/insights/" className="hover:text-[var(--brand-accent)] transition-colors py-6">Insights</Link>

          <div className="relative group py-6">
            <span className="cursor-default flex items-center gap-1 group-hover:text-[var(--brand-accent)] transition-colors">
              About <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </span>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-black border border-white/10 shadow-xl py-2 min-w-[200px]">
              <Link to="/about/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">About Us</Link>
              <Link to="/about/team/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Team</Link>
              <Link to="/about/network/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Full Circle Network</Link>
              <Link to="/about/esg/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">ESG & Governance</Link>
              <Link to="/about/careers/" className="px-4 py-2 text-white/80 hover:bg-white/5 hover:text-[var(--brand-accent)]">Careers</Link>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/start-a-project/"
            data-testid="link-start-project-header"
            className="group btn-glow-pink bg-[#E50069] text-black px-6 py-2.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Start a project <span className="arrow-nudge">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="p-2 -mr-2">
              <Menu className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-black w-[300px] border-l border-white/10 p-6 overflow-y-auto text-white">
              <nav className="flex flex-col gap-6 mt-8">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium text-lg text-white">
                    What We Do <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col gap-3 mt-3 pl-4 border-l border-white/10">
                    <Link to="/what-we-do/brand-strategy/" className="text-white/70 hover:text-[var(--brand-accent)]">Brand Strategy</Link>
                    <Link to="/what-we-do/creative-and-content/" className="text-white/70 hover:text-[var(--brand-accent)]">Creative & Content</Link>
                    <Link to="/what-we-do/digital-and-performance/" className="text-white/70 hover:text-[var(--brand-accent)]">Digital & Performance</Link>
                    <Link to="/what-we-do/public-relations/" className="text-white/70 hover:text-[var(--brand-accent)]">Public Relations</Link>
                    <Link to="/what-we-do/activation/" className="text-white/70 hover:text-[var(--brand-accent)]">Activation</Link>
                    <Link to="/what-we-do/advisory/" className="text-white/70 hover:text-[var(--brand-accent)]">Advisory</Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link to="/work/" className="font-medium text-lg text-white hover:text-[var(--brand-accent)]">Work</Link>
                <Link to="/insights/" className="font-medium text-lg text-white hover:text-[var(--brand-accent)]">Insights</Link>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium text-lg text-white">
                    About <ChevronDown className="w-5 h-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col gap-3 mt-3 pl-4 border-l border-white/10">
                    <Link to="/about/" className="text-white/70 hover:text-[var(--brand-accent)]">About Us</Link>
                    <Link to="/about/team/" className="text-white/70 hover:text-[var(--brand-accent)]">Team</Link>
                    <Link to="/about/network/" className="text-white/70 hover:text-[var(--brand-accent)]">Full Circle Network</Link>
                    <Link to="/about/esg/" className="text-white/70 hover:text-[var(--brand-accent)]">ESG & Governance</Link>
                    <Link to="/about/careers/" className="text-white/70 hover:text-[var(--brand-accent)]">Careers</Link>
                  </CollapsibleContent>
                </Collapsible>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    to="/start-a-project/"
                    data-testid="link-start-project-mobile"
                    className="group btn-glow-pink block w-full text-center bg-[#E50069] text-black px-6 py-4 text-base font-semibold"
                  >
                    Start a project <span className="arrow-nudge inline-block">&rarr;</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
