import React from "react";
import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease } },
};

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen font-messiri bg-[#0c2000] text-white overflow-hidden">
      {/* Top */}
      <header className="relative z-20 px-8 sm:px-16 lg:px-32 pt-10">
        <motion.img
          src="/assets/logo/e-logo.png"
          alt="Logo"
          className="h-16 sm:h-20"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          draggable={false}
        />
      </header>

      {/* HERO */}
      <section className="relative px-8 sm:px-16 lg:px-32 pt-12 pb-16">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* subtle texture/vibe using existing imagery if you want */}
          <img
            src="/assets/img/epik/fruit.png"
            alt="bg"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.p
            className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[#d2ae6d]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            Contact
          </motion.p>

          <motion.h1
            className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-dancing text-[#d2ae6d]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            Let’s Talk
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.55 }}
          >
            For private requests, partnerships, distribution, or general enquiries — reach out.
            We respond with care and discretion.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative px-8 sm:px-16 lg:px-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Contact info */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
              <h2 className="text-2xl sm:text-3xl text-white">Epikurion Grove</h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                A single-estate olive oil shaped by origin, craft, and restraint.
              </p>

              <div className="mt-8 space-y-5 text-white/85">
                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#d2ae6d]">Email</p>
                  <p className="mt-1 text-lg break-words">contact@epikuriongrove.com</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#d2ae6d]">Phone</p>
                  <p className="mt-1 text-lg">+94 00 000 0000</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#d2ae6d]">Location</p>
                  <p className="mt-1 text-lg leading-relaxed">
                    Epikurion Grove Estate
                    <br />
                    (Address line here)
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#d2ae6d]">Hours</p>
                  <p className="mt-1 text-lg">Mon – Fri, 9:00 – 17:00</p>
                </div>
              </div>

              {/* optional socials */}
              <div className="mt-10 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition">
                  Instagram
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition">
                  Facebook
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="rounded-2xl bg-[#d2ae6d] text-[#314036] p-8 sm:p-10 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-dancing">Send a Message</h2>
              <p className="mt-3 text-[#314036]/80 leading-relaxed">
                Share a few details and we’ll get back to you.
              </p>

              <form
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="flex flex-col gap-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Name</span>
                  <input
                    className="h-12 rounded-xl px-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition"
                    placeholder="Your name"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Email</span>
                  <input
                    type="email"
                    className="h-12 rounded-xl px-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Subject</span>
                  <input
                    className="h-12 rounded-xl px-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition"
                    placeholder="What is this about?"
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Message</span>
                  <textarea
                    className="min-h-[160px] rounded-xl p-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition resize-none"
                    placeholder="Write your message..."
                  />
                </label>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                  <p className="text-sm text-[#314036]/70">
                    By submitting, you agree to be contacted back regarding your enquiry.
                  </p>

                  <button
                    type="submit"
                    className="h-12 px-8 rounded-xl bg-[#314036] text-[#d2ae6d] hover:opacity-90 transition uppercase tracking-[0.25em] text-sm"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Small strip under form (matches your vibe) */}
            <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
              <p className="text-white/85 leading-relaxed">
                Prefer email? Write to{" "}
                <span className="text-[#d2ae6d]">contact@epikuriongrove.com</span> and we’ll respond.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOT STRIP */}
      <footer className="bg-white/5 ring-1 ring-white/10 px-8 sm:px-16 lg:px-32 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-[#d2ae6d] uppercase tracking-[0.35em] text-xs">Epikurion Grove</p>
            <p className="mt-2 text-white/80">Crafted with Tradition, Bottled with Care.</p>
          </div>

          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Epikurion Grove. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ContactPage;
