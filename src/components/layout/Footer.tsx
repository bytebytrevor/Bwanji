import { Link } from 'react-router-dom';
import bwanjiLogo from '@assets/Bwanji-10_1778167375966.png';

export default function Footer() {
  return (
    <footer className="bg-black text-[#ffffff] py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <img
              src={bwanjiLogo}
              alt="Bwanji Agency"
              className="h-10 w-auto self-start"
            />
            <div className="flex flex-col gap-2 text-sm text-neutral-300">
              <p>Ground-Truth Marketing for Zambia and Malawi.</p>
              <p>Part of the Full Circle Comms Group.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="uppercase text-xs tracking-widest text-neutral-400 font-semibold">What We Do</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/what-we-do/brand-strategy/" className="hover:text-[var(--brand-accent)] transition-colors">Brand Strategy</Link>
              <Link to="/what-we-do/creative-and-content/" className="hover:text-[var(--brand-accent)] transition-colors">Creative & Content</Link>
              <Link to="/what-we-do/digital-and-performance/" className="hover:text-[var(--brand-accent)] transition-colors">Digital & Performance</Link>
              <Link to="/what-we-do/public-relations/" className="hover:text-[var(--brand-accent)] transition-colors">Public Relations</Link>
              <Link to="/what-we-do/activation/" className="hover:text-[var(--brand-accent)] transition-colors">Activation & Experiential</Link>
              <Link to="/what-we-do/advisory/" className="hover:text-[var(--brand-accent)] transition-colors">Advisory</Link>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="uppercase text-xs tracking-widest text-neutral-400 font-semibold">Company</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/about/" className="hover:text-[var(--brand-accent)] transition-colors">About</Link>
              <Link to="/about/team/" className="hover:text-[var(--brand-accent)] transition-colors">Team</Link>
              <Link to="/about/network/" className="hover:text-[var(--brand-accent)] transition-colors">Network</Link>
              <Link to="/about/esg/" className="hover:text-[var(--brand-accent)] transition-colors">ESG & Governance</Link>
              <Link to="/about/careers/" className="hover:text-[var(--brand-accent)] transition-colors">Careers</Link>
              <Link to="/contact/" className="hover:text-[var(--brand-accent)] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <h4 className="uppercase text-xs tracking-widest text-neutral-400 font-semibold">Get in Touch</h4>
            <div className="flex flex-col gap-6 text-sm text-neutral-300">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[#ffffff]">Lusaka, Zambia</p>
                <a href="mailto:info@bwanji.co.zm" className="hover:text-[var(--brand-accent)] transition-colors">info@bwanji.co.zm</a>
                <p>WhatsApp: +260 763 628 686</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[#ffffff]">Lilongwe, Malawi</p>
                <a href="mailto:info@bwanji.co.mw" className="hover:text-[var(--brand-accent)] transition-colors">info@bwanji.co.mw</a>
                <p>WhatsApp: +265 884 641 569</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>© 2026 Bwanji Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy/" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link to="/terms/" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link to="/cookies/" className="hover:text-white transition-colors">Cookies</Link>
            <span>·</span>
            <Link to="/accessibility/" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
