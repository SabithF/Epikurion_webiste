import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NavScreen from "./NavScreen";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -140 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 140 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease } },
};

const EpikurionPage: React.FC = () => {
  const navigate = useNavigate();
  const [navActive, setNavActive] = useState(false);

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

  return (
    <main className="min-h-screen overflow-hidden font-messiri ">
      <header className="absolute pt-10 z-30 mx-auto px-4 sm:px-6 lg:px-8">
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
              />

              <button
                type="button"
                aria-label={navActive ? "Close menu" : "Open menu"}
                onClick={toggleMenu}
                className="group relative flex h-10 w-10 items-center justify-center rounded-md bg-black/20 hover:bg-white/15 transition-all"
              >
                <span className="absolute inset-0 rounded-md hover:shadow-lg   group-hover:ring-white/30 transition-all" />
                <span className="relative flex flex-col gap-[5px]">
                  <span
                    className={`h-[2px] w-5 bg-white transition-all ${navActive ? "translate-y-[7px] rotate-45" : ""
                      }`}
                  />
                  <span
                    className={`h-[2px] w-5 bg-white transition-all ${navActive ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <span
                    className={`h-[2px] w-5 bg-white transition-all ${navActive ? "-translate-y-[7px] -rotate-45" : ""
                      }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="hidden md:block">
        <img src="/assets/banners/Hero1.png" alt="Hero" />
      </section>
      <section className="md:hidden block">
        <img src="/assets/banners/mobile-hero.png" alt="Hero" />
      </section>




      {/* SECTION 2 */}
      <section className="flex relative w-full items-stretch lg:min-h-screen max-lg:flex-col">
        {/* <div className="w-[15%] max-lg:hidden" /> */}

        {/* Image */}
        <div className="bg-white  max-lg:w-full">
          <motion.img
            src="/assets/banners/olive-hero-image.png"
            alt="center-banner"
            className="h-full object-cover w-[1100px]"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            draggable={false}
          />
        </div>

        {/* Text */}
        <div className="flex items-center w-[40%] px-10 text-6xl max-lg:w-full max-lg:px-6 max-lg:py-10 max-lg:text-4xl max-lg:leading-tight">
          <motion.h1
            className="text-gray-700"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            Crafted with
            <br />
            <span className="text-yellowPrimary">Tradition</span> <br />
            Bottled with <br />
            <span className="text-yellowPrimary">Care</span>
          </motion.h1>
        </div>
      </section>


      {/* LIMITED SECTION */}
      <section className="relative bg-[#d2ae6d] overflow-hidden isolate">
        {/* Banner */}
        <motion.img
          src="/assets/img/epik/banner-4.png"
          alt="bottles-banner"
          className="w-full object-cover"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          draggable={false}
        />

        {/* LIMITED title */}
        <motion.h1
          className="flex justify-center py-16 text-7xl tracking-[1.4em] text-white max-lg:text-4xl max-lg:tracking-[0.6em] max-lg:py-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          LIMITED
        </motion.h1>

        {/* Content */}
        <div
          className="
      relative z-10
      px-6 sm:px-10 lg:px-16
      pb-16 lg:pb-24
      grid gap-10 lg:gap-14
      md:grid-cols-[minmax(280px,360px)_1fr]
      lg:grid-cols-[40%_1fr]
      items-start
    "
        >
          {/* Bottle */}
          <motion.div
            className="w-full flex justify-center md:justify-start"
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <img
              src="/assets/img/epik/Epikurion Grove Special Bottle.png"
              alt="Bottle"
              className="w-full max-w-[520px] md:max-w-none select-none"
              draggable={false}
            />
          </motion.div>

          {/* Text */}
          <div className="max-w-3xl md:pl-2 lg:pl-16">
            <motion.h2
              className="font-messiri text-white text-xl sm:text-2xl lg:text-3xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              Origin of Epikurion Grove
            </motion.h2>

            <motion.p
              className="
          mt-6 sm:mt-8
          font-messiri text-gray-800/60
          text-base sm:text-lg lg:text-2xl
          leading-7 sm:leading-8 lg:leading-[1.35]
          break-words
        "
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              This limited edition reflects the highest expression of Epikurion Grove.
              Encased in deep olive green and adorned with finely detailed gold botanical
              engravings, the bottle draws inspiration directly from the grove itself.
              The ornamentation is deliberate and restrained, echoing the rhythm of olive
              branches shaped by time, sun, and soil.
              <br />
              <br />
              Produced in strictly limited quantities from a single estate, this edition
              is offered only by special request. Each bottle is individually selected
              from a carefully chosen harvest, intended for private collections, refined
              gifting, and occasions of lasting significance.
            </motion.p>

            {/* Mobile + Tablet neat label (desktop has the floating one below) */}
            <motion.div
              className="mt-8 text-[#314036] md:hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              <p className="font-dancing text-3xl">1 litre</p>
              <p className="text-lg">Extra Virgin Olive Oil</p>
            </motion.div>

            <motion.div
              className="mt-10 hidden md:block lg:hidden text-[#314036]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              <p className="font-dancing text-4xl">1 litre</p>
              <p className="text-xl">Extra Virgin Olive Oil</p>
            </motion.div>
          </div>
        </div>

        {/* Desktop floating label (kept similar to your desktop design) */}
        <motion.div
          className="
      absolute z-[30]
      left-[35%] top-[90%] -translate-y-1/2
      text-[#314036]
      hidden lg:block
    "
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="font-dancing text-6xl">1 litre</p>
          <p className="text-2xl">Extra Virgin Olive Oil</p>
        </motion.div>

        {/* Bottom white strip (desktop only like you had) */}
        <div className="absolute bottom-0 left-0 w-full h-[14%] hidden lg:block bg-white z-[1]" />
      </section>


      {/* GREEN SECTION */}
      <section className="bg-[#0c2000] px-8 sm:px-16 lg:px-32 text-white">
        <div className="flex justify-between z-20 max-lg:flex-col max-lg:gap-10">
          <div className="w-[80%] max-lg:w-full">
            <div>
              <div className="relative flex flex-row w-full gap-10 max-lg:flex-col max-lg:gap-4 max-lg:items-start">
                <motion.img
                  src="/assets/logo/epi-logo-white.png"
                  alt="logo"
                  className="w-[40%] max-lg:w-[70%] relative translate-y-16 translate-x-6 max-lg:translate-y-0 max-lg:translate-x-0 max-lg:mt-6"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  draggable={false}
                />
                <motion.div
                  className="bg-red-800 flex text-3xl items-end italic px-1 max-lg:w-fit max-lg:mt-4 max-lg:ml-2"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  Coming <br /> soon
                </motion.div>
              </div>

              <motion.h1
                className="text-8xl font-dancing -translate-y-28 text-yellowPrimary 
                max-lg:text-7xl lg:translate-y-44 max-lg:mt-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
              >
                Signature
              </motion.h1>

              <motion.div
                className="w-[90%] text-left px-2 text-white text-base pt-10 sm:text-xl lg:text-2xl 
                leading-8 max-lg:w-full max-lg:leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
              >
                <p className="leading-relaxed">
                  Epikurion Grove Signature is an expression that unites fresh
                  Mediterranean citrus with gentle garlic warmth, layered over our
                  single-estate extra virgin olive oil. Bright and aromatic in character,
                  it opens with notes of lemon zest, followed by a smooth olive-fruit core and a soft, savoury finish.
                </p>
                <br />
                <p className="leading-relaxed">
                  Balanced and versatile, Mediterranean Citrus & Garlic is best enjoyed drizzled over salads
                  or refined cuisine, where its vibrant character comes to life—bringing clarity and depth
                  to both simple preparations and carefully composed dishes. An elegant expression of flavour
                  shaped by origin, craft, and restraint.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottles */}
          <div className="relative max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center">
            <motion.img
              src="/assets/img/epik/Epikurion Grove Bottle GiftB.png"
              alt="epikurion gift bottle"
              className="w-[50%] -translate-y-80 translate-x-32 z-20 abstract max-lg:w-[58%] max-lg:translate-x-0 max-lg:translate-y-0 max-lg:mx-auto"
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              draggable={false}
            />

            <motion.img
              src="/assets/img/epik/Lemon and Garlic.png"
              alt="lemon"
              className="
                absolute
                -translate-y-[22rem] translate-x-24
                z-50 w-[78%] -bottom-48 -right-20
                max-lg:static max-lg:w-[62%] max-lg:mx-auto max-lg:mt-6 max-lg:translate-x-0 max-lg:translate-y-0
              "
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* 750ml STRIP */}
      <div className="relative py-4 max-lg:py-10 overflow-visible">
        {/* Gold strip */}
        <motion.div
          className="
      relative z-10
      flex w-[70%] flex-col justify-center items-end gap-4
      bg-[#d2ae6d] py-6 pr-52 rounded-r-3xl
      max-lg:w-full max-lg:items-start max-lg:px-6 max-lg:pr-6
    "
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h1
            className="
        font-dancing text-8xl text-[#494949]
        translate-x-44 md:translate-x-0
        max-lg:translate-x-0 max-lg:text-5xl
      "
          >
            750ml
          </h1>

          <p
            className="
        text-3xl text-[#494949]
        translate-x-20 md:translate-x-0
        max-lg:translate-x-0 max-lg:text-xl
      "
          >
            Extra Virgin Olive Oil
          </p>

          <p
            className="
        text-3xl text-[#494949]
        translate-x-10 md:translate-x-0
        max-lg:translate-x-0 max-lg:text-xl
      "
          >
            Infused with Lemon and Garlic
          </p>
        </motion.div>

        {/* Lemon image */}
        <motion.img
          src="/assets/img/epik/Lemon-1.png"
          alt="LEMON"
          className="
      z-50
      w-24
      absolute left-72 top-2 -translate-y-1/2
      md:w-[220px] md:left-10
       max-lg:mt-0 max-lg:w-[120px] lg:translate-y-20
    "
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          draggable={false}
        />
      </div>


      {/* ALL BOTTLES */}
      <section className="relative py-5 w-full flex flex-col justify-center items-center uppercase">
        <div className="pt-48 max-lg:pt-24 px-32 max-lg:px-6">
          <motion.img
            src="/assets/img/epik/all-bottles.png"
            alt="all bottles"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            draggable={false}
            className="w-full max-lg:w-[92%] max-lg:mx-auto"
          />
        </div>

        <motion.div
          className="pt-24 pb-10 text-center text-3xl sm:text-4xl lg:text-4xl tracking-[0.05em] leading-2 w-[60%] max-lg:w-[92%] max-lg:pt-12 max-lg:text-xl max-lg:leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="text-yellowPrimary">Crafted with Tradition, Bottled with Care.</span>
          <br />
          A Single-Farm extra virgin olive oil of exceptional flavour and purity
        </motion.div>
      </section>

      {/* CERT */}
      <section className="bg-[#3e591e] uppercase px-16 py-20 text-base sm:text-xl lg:text-2xl max-lg:px-6 max-lg:py-14">
        <motion.h1
          className="text-yellowPrimary text-base sm:text-xl lg:text-3xl pb-1 tracking-wider"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          Certification & Analysis
        </motion.h1>

        <motion.p
          className="text-white w-[90%] tracking-wider max-lg:w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          Each harvest is evaluated through internal quality checks and verified by independent laboratory analysis
          to confirm compliance with extra virgin olive oil standards.
        </motion.p>
      </section>

      {/* WHY CHOOSE */}
      <section className=" uppercase px-16 pt-16 text-base sm:text-xl lg:text-2xl flex flex-col ml-16 max-lg:px-6 max-lg:ml-0 ">
        <motion.h1
          className="text-yellowPrimary text-base sm:text-xl lg:text-3xl pb-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          Why Choose Our Olive Oil
        </motion.h1>

        <motion.div
          className="text-black w-[90%] tracking-wider max-lg:w-full overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <ul className="space-y-2 list-inside">
            <li>- 100% single-farm, farm-to-bottle traceability</li>
            <li>- Produced using sustainable farming methods</li>
            <li>- Slow extraction for maximum nutrients</li>
            <li>- International quality verification</li>
          </ul>
        </motion.div>
      </section>

      <section className="relative min-h-screen">
        <motion.img
          src="/assets/img/epik/1litre.png"
          alt="One liter bottle"
          className="w-[40%] rotate-[45deg] -translate-y-[500px] translate-x-[600px] items-center flex justify-center
                     max-lg:w-[60%] max-lg:rotate-0 max-lg:translate-x-0 max-lg:translate-y-0 max-lg:mx-auto max-lg:mt-10
                     absolute overflow-hidden"
        />
      </section>

      <Footer />

      {navActive && (
        <div className="fixed inset-0 z-[80]" onClick={() => setNavActive(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <NavScreen onClose={() => setNavActive(false)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default EpikurionPage;
