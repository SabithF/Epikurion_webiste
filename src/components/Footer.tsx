import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c2000] text-white border-t border-white/10">
      {/* Top */}
      <div className="px-8 sm:px-16 lg:px-32 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Brand */}
        <div className="lg:col-span-4">
          <img
            src="/assets/logo/epi-logo-white.png"
            alt="Epikurion Grove"
            className="h-14 mb-6"
            draggable={false}
          />

          <p className="text-white/70 leading-relaxed max-w-sm">
            A single-estate extra virgin olive oil shaped by origin, craft,
            and restraint. Crafted with tradition, bottled with care.
          </p>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-3">
          <p className="uppercase tracking-[0.3em] text-xs text-[#d2ae6d] mb-6">
            Explore
          </p>
          <ul className="space-y-3 text-white/80">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/origin" className="hover:text-white transition">
                Origin
              </Link>
            </li>
            <li>
              <Link to="/harvest" className="hover:text-white transition">
                Harvest
              </Link>
            </li>
            <li>
              <Link to="/epikurion" className="hover:text-white transition">
                Epikurion Grove
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <p className="uppercase tracking-[0.3em] text-xs text-[#d2ae6d] mb-6">
            Contact
          </p>

          <div className="space-y-4 text-white/80">
            <p>hello@epikuriongrove.com</p>
            <p>
              +61 478 666 813 {" | "} +94 773 065 999
            </p>
            <p className="leading-relaxed">
              +30 694 020 8916
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="lg:col-span-2">
          <p className="uppercase tracking-[0.3em] text-xs text-[#d2ae6d] mb-6">
            Philosophy
          </p>

          <p className="text-white/70 leading-relaxed text-sm">
            Produced in limited quantities, selected with intention, and offered
            for moments of lasting significance.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Bottom */}
      <div className="px-8 sm:px-16 lg:px-32 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Epikurion Grove. All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-white/60">
          <span>Website developed by</span>

          <a
            href="https://www.haicreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <img
              src="/assets/logo/hai-logo-2.png"
              alt="Hai Creations"
              className="h-9 w-auto object-contain"
            />
            <span className="text-white hover:underline underline-offset-4">
              Hai Creations
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
