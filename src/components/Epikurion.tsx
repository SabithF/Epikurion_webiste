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
        <div className="flex items-center w-[40%] px-10 text-6xl max-lg:w-full 
        max-lg:px-6 max-lg:py-10 max-lg:text-4xl max-lg:leading-tight">
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
          className="
    flex justify-center
    text-center
    py-16
    text-7xl
    tracking-[1.4em]
    -mr-[1.4em]
    text-white
    max-lg:text-4xl
    max-lg:tracking-[0.6em]
    max-lg:-mr-[0.6em]
    max-lg:py-10
  "
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
      {/* GREEN SECTION */}
      <section className="bg-[#0c2000] px-6 sm:px-10 lg:px-20 xl:px-28 py-16 lg:py-0 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* logo + badge */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
              <motion.img
                src="/assets/logo/epi-logo-white.png"
                alt="Epikurion Grove"
                className="w-[220px] sm:w-[260px] lg:w-[320px] h-auto"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                draggable={false}
              />

              <motion.div
                className="bg-[#9f1d1d] text-white italic leading-none pr-32 md:px-4 py-4 md:pt-32 self-start text-2xl sm:text-3xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
              >
                Coming
                <br />
                soon
              </motion.div>
            </div>

            {/* title */}
            <motion.h1
              className="text-[4rem] sm:text-[5rem] 
              lg:text-[6.5rem] leading-[0.9] font-dancing text-[#d2ae6d]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              Signature
            </motion.h1>

            {/* paragraphs */}
            <motion.div
              className="mt-6 max-w-3xl text-white text-lg sm:text-[1.35rem] lg:text-[1.65rem] leading-relaxed space-y-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
            >
              <p>
                Epikurion Grove Signature is an expression that unites fresh
                Mediterranean citrus with gentle garlic warmth, layered over our
                single-estate extra virgin olive oil. Bright and aromatic in
                character, it opens with notes of lemon zest, followed by a smooth
                olive-fruit core and a soft, savoury finish.
              </p>

              <p>
                Balanced and versatile, Mediterranean Citrus &amp; Garlic is best
                enjoyed drizzled over salads or refined cuisine, where its vibrant
                character comes to life—bringing clarity and depth to both simple
                preparations and carefully composed dishes. An elegant expression of
                flavour shaped by origin, craft, and restraint.
              </p>
            </motion.div>

            {/* bottom row */}
            <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between pb-10 gap-8">
              <motion.img
                src="/assets/img/epik/Lemon and Garlic.png"
                alt="Lemon and garlic"
                className="w-[220px] sm:w-[280px] lg:w-[320px] h-auto"
                variants={slideInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                draggable={false}
              />

              <motion.div
                className="text-[#d2ae6d] md:text-right"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                <h2 className="font-dancing text-6xl sm:text-7xl lg:text-8xl leading-none">
                  750ml
                </h2>
                <p className="mt-2 text-2xl sm:text-3xl leading-snug">
                  Extra Virgin Olive Oil
                </p>
                <p className="text-2xl sm:text-3xl leading-snug">
                  Infused with Lemon and Garlic
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT BOTTLE */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.img
              src="/assets/img/epik/Epikurion Grove Bottle GiftB.png"
              alt="Epikurion Grove Signature bottle"
              className="w-[260px] sm:w-[220px] md:w-[200px] lg:w-[200px] xl:w-[300px] h-auto"
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              draggable={false}
            />
          </div>
        </div>
      </section>





      {/* ALL BOTTLES */}
      <section className="relative w-full flex flex-col items-center uppercase pb-6">


        <div className="pt-5 lg:pt-36 px-6 sm:px-12 lg:px-24 w-full flex Z-50 justify-center">
          <motion.img
            src="/assets/img/epik/all-bottles-new.png"
            alt="all bottles"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            draggable={false}
            className="w-full max-w-6xl Z-50"
          />
        </div>

        <motion.div
          className="pt-16 lg:pt-24 pb-10 text-center text-xl sm:text-3xl lg:text-4xl tracking-[0.05em] leading-relaxed max-w-3xl px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="text-yellowPrimary">
            Crafted with Tradition, Bottled with Care.
          </span>
          <br />
          A Single-Farm extra virgin olive oil of exceptional flavour and purity
        </motion.div>
      </section>

      {/* CERT */}
      <section className="bg-[#3e591e]  uppercase px-6 sm:px-24 lg:px-24 py-14 lg:py-20 text-base sm:text-xl lg:text-2xl">
        <motion.h1
          className="text-yellowPrimary text-base sm:text-xl lg:text-3xl pb-2 tracking-wider"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          Certification & Analysis
        </motion.h1>

        <motion.p
          className="text-white tracking-wider max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          From our single estate to your table, every harvest is independently verified and lab-tested, guaranteeing certified Extra Virgin quality and a truly exceptional olive oil experience.
        </motion.p>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative min-h-screen bg-white z-10 uppercase px-6 sm:px-24 
      lg:px-16 pt-14 lg:pt-16 ">
        <motion.h1
          className="text-yellowPrimary text-base sm:text-xl lg:text-3xl pb-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          Why Choose Our Olive Oil
        </motion.h1>

        <motion.div
          className="text-black tracking-wider max-w-4xl lg:max-w-[60%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <ul className="space-y-2 list-inside">
            <li>- 100% single‑farm, farm-to-bottle traceability</li>
            <li>- Certified Extra Virgin Olive Oil</li>
            <li>- Slow extraction preserves nutrients and antioxidants</li>
            <li>- Pure, authentic Mediterranean taste</li>
            <li>- Minimal filtration for natural character</li>
          </ul>
        </motion.div>

        <motion.img
          src="/assets/img/epik/1litre.png"
          alt="One liter bottle"
          draggable={false}
          className="
              pointer-events-none select-none
               
              w-[60%] sm:w-[40%] md:w-[32%]

              lg:absolute
              lg:top-[15%]

              lg:right-28
              

              lg:-translate-x-1/2
              lg:-translate-y-[10rem]
               xl:-translate-y-[26rem]  

              lg:w-[24rem]
              lg:rotate-[60deg]
              lg:origin-top-center
            [@media(min-width:1500px)_and_(min-height:700px)]:w-[28rem]
            [@media(min-width:1500px)_and_(min-height:650px)]:w-[30rem]
            [@media(min-width:1536px)_and_(min-height:800px)]:w-[32rem]



             
  "
        />
      </section>

      <Footer />
      {/* <section className="relative min-h-screen overflow-visible flex items-center justify-center">
        <motion.img
          src="/assets/img/epik/1litre.png"
          alt="One liter bottle"
          className="
      pointer-events-none select-none
      relative mx-auto mt-10
      w-[70%] sm:w-[45%] md:w-[40%]

      lg:absolute
      lg:w-[28%]
      lg:top-[5%]
      lg:left-[50%]

      lg:-translate-x-[20%]
      lg:-translate-y-[30%]

      lg:rotate-[45deg]
      lg:origin-bottom-left

      2xl:w-[24%]
    "
        />
      </section> */}


      {/* <section className="relative min-h-screen overflow-visible">
        <motion.img
          src="/assets/img/epik/1litre.png"
          alt="One liter bottle"
          className="
      pointer-events-none select-none
      relative mx-auto mt-10 w-[70%] sm:w-[40%] md:w-[45%]

      lg:absolute lg:w-[35%]
      lg:rotate-[50deg] lg:origin-bottom-left

      lg:top-4

      lg:-translate-y-[900px]

      [@media(min-width:1027px)_and_(max-width:1375px)]:-translate-y-[400px]
      [@media(min-width:1027px)_and_(max-width:1375px)]:rotate-[45deg]
      [@media(min-width:1027px)_and_(max-width:1375px)]:w-[30%]
    "
        />
      </section> */}

      {/* <Footer /> */}

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
