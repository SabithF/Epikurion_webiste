import React from "react";

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
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Origin</li>
            <li className="hover:text-white transition cursor-pointer">Harvest</li>
            <li className="hover:text-white transition cursor-pointer">Epikurion Grove</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <p className="uppercase tracking-[0.3em] text-xs text-[#d2ae6d] mb-6">
            Contact
          </p>

          <div className="space-y-4 text-white/80">
            <p>contact@epikuriongrove.com</p>
            <p>+94 00 000 0000</p>
            <p className="leading-relaxed">
              Epikurion Grove Estate
              <br />
              Mediterranean Region
            </p>
          </div>
        </div>

        {/* Newsletter / Statement */}
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

        <div className="flex gap-6 text-white/60 text-sm">
          <span className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
