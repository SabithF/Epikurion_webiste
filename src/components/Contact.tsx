import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Footer from "./Footer";
import NavScreen from "./NavScreen";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [navActive, setNavActive] = useState(false);

  // Web3Forms states
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!navActive) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [navActive]);

  const toggleMenu = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setNavActive((v) => !v);
  };

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setLoading(true);
  setResult("Sending...");

  const form = event.currentTarget;
  const formData = new FormData(form);

  formData.append("access_key", "15dd4d2a-7e7d-42d2-88c7-9e20ee3b8fc6");

  const subject = formData.get("subject");
  if (!subject || String(subject).trim() === "") {
    formData.set("subject", "Epikurion Contact Form");
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const data = await res.json();

    if (res.ok && (data?.success === true || data?.status === "success")) {
      form.reset();                         
      setResult("✅ Thanks! Your message has been sent successfully. We’ll get back to you shortly.");        

      // auto hide after 4 seconds
      setTimeout(() => setResult(""), 4000);
      return;
    }

    setResult(data?.message || "Something went wrong.");
  } catch {
    setResult("Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <main className="min-h-screen font-messiri bg-[#0c2000] text-white overflow-hidden">
      {/* Top */}
      <header className="relative z-20 px-8 sm:px-16 lg:px-32 pt-10">
        {/* ✅ Fixed top bar */}
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pt-6">
              <motion.img
                src="/assets/logo/e-logo.png"
                alt="Logo"
                className="h-14 sm:h-16 w-auto cursor-pointer"
                variants={fadeIn}
                initial="hidden"
                animate="show"
                onClick={() => navigate("/")}
                draggable={false}
              />

              <button
                type="button"
                aria-label={navActive ? "Close menu" : "Open menu"}
                onClick={toggleMenu}
                className="group relative flex h-10 w-10 items-center justify-center rounded-md bg-black/20 hover:bg-white/15 transition-all"
              >
                <span className="absolute inset-0 rounded-md hover:shadow-lg group-hover:ring-white/30 transition-all" />
                <span className="relative flex flex-col gap-[5px]">
                  <span
                    className={`h-[2px] w-5 bg-white transition-all ${
                      navActive ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-[2px] w-5 bg-white transition-all ${
                      navActive ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`h-[2px] w-5 bg-white transition-all ${
                      navActive ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ✅ spacer so content doesn't go under fixed bar */}
        <div className="h-20" />
      </header>

      {/* HERO */}
      <section className="relative px-8 sm:px-16 lg:px-32 pt-12 pb-16">
        <div className="absolute inset-0 pointer-events-none opacity-20">
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
                  <p className="mt-1 text-lg break-words">hello@epikuriongrove.com</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#d2ae6d]">Phone</p>
                  <div className="mt-1 text-lg space-y-1 leading-relaxed">
                    <p>+61 478 666 813 {" | "} +94 773 065 999</p>
                    <p>+30 694 020 8916</p>
                  </div>
                </div>
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

              <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={onSubmit}>
                {/* Honeypot (spam protection) */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

                <label className="flex flex-col gap-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Name</span>
                  <input
                    name="name"
                    required
                    className="h-12 rounded-xl px-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition"
                    placeholder="Your name"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 rounded-xl px-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Subject</span>
                  <input
                    name="subject"
                    className="h-12 rounded-xl px-4 bg-white/80 focus:bg-white outline-none ring-1 ring-[#314036]/10 focus:ring-[#314036]/30 transition"
                    placeholder="What is this about?"
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm uppercase tracking-[0.25em]">Message</span>
                  <textarea
                    name="message"
                    required
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
                    disabled={loading}
                    className="h-12 px-8 rounded-xl bg-[#314036] text-[#d2ae6d] hover:opacity-90 transition uppercase tracking-[0.25em] text-sm disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>

                {/* Result message */}
                {result && (
                  <div className="sm:col-span-2">
                    <p className="text-sm text-[#314036]/80">{result}</p>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
              <p className="text-white/85 leading-relaxed">
                Prefer email? Write to{" "}
                <span className="text-[#d2ae6d]">hello@epikuriongrove.com</span> and we’ll respond.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ✅ Menu overlay */}
      {navActive && <NavScreen onClose={() => setNavActive(false)} />}
    </main>
  );
};

export default ContactPage;
