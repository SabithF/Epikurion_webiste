import React from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

const Harvest: React.FC = () => {

  const navigate = useNavigate();
  const [navActive, setNavActive] = useState(false);


  // lock scroll when menu is open
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
    <>
      <main className="min-h-screen w-full overflow-hidden font-messiri">
        <div className="min-h-screen">

          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <header className="absolute pt-10 z-30">
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
                        <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "translate-y-[7px] rotate-45" : ""}`} />
                        <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "opacity-0" : "opacity-100"}`} />
                        <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "-translate-y-[7px] -rotate-45" : ""}`} />
                      </span>
                    </button>
                  </div>
                </div>


              </div>
            </header>

            <motion.div
              className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-10 lg:left-20 z-20"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <img
                src="/assets/img/harvest/Text.png"
                alt="Main text"
                className="w-[90%] sm:w-[80%]"
                draggable={false}
              />
            </motion.div>
          </div>

          <div className="h-screen w-full flex flex-col lg:flex-row justify-between">
            <motion.div
              className="w-full lg:w-[40%] h-[45vh] lg:h-full bg-blue-200 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url(/assets/img/banner-bg.png)" }}
              variants={fadeIn}
              initial="hidden"
              animate="show"
            />
            <motion.div
              className="w-full lg:w-[60%] relative h-[55vh] lg:h-full"
              variants={fadeIn}
              initial="hidden"
              animate="show"
            >
              <img
                src="/assets/img/harvest/1.png"
                alt="harvest-banner"
                className="object-cover h-full w-full"
                draggable={false}
              />
            </motion.div>
          </div>

          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row">
              <motion.img
                src="/assets/img/harvest/3.png"
                alt="abstract png"
                className="w-[70%] sm:w-[45%] lg:w-[30%] mx-auto lg:mx-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                draggable={false}
              />
              <motion.div
                className="w-full flex flex-col items-center space-y-6 justify-center px-2 sm:px-6 mt-6 lg:mt-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h2 className="font-messiri text-yellowPrimary text-xl sm:text-2xl lg:text-3xl text-center">
                  The Epikurion Grove Harvest & Processing
                </h2>

                <p className="text-center px-2 sm:px-6 mx-0 sm:mx-5 text-base sm:text-xl lg:text-2xl leading-relaxed">
                  <span className="font-bold text-blue-900 ">Harvest Season (Late September – December)</span>
                  <br />
                  At Epikurion Grove, harvest is a moment of reverence. Olives are gathered from late September through December, across two carefully chosen moments of the season — with part of the fruit harvested early, while still green and vibrant, and the remainder collected at full ripeness. This deliberate approach allows us to unite freshness and intensity with balance, depth, and harmony of flavour.
                  <br /> <br />
                  Through a combination of careful hand-picking and gentle mechanical shakers, the olives fall naturally onto nets, preserving the integrity of the fruit. For our third-generation family of farmers, harvest remains a shared ritual — a continuation of tradition, carried from one season to the next.


                </p>
              </motion.div>
            </div>
          </section>

          <section className="bg-gray-600 relative">
            <img
              src="/assets/img/harvest/2.png"
              alt="harvest-banner-2"
              className="min-h-screen w-full object-cover"
              draggable={false}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <motion.div
                  className="lg:col-span-7"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <h2 className="font-messiri text-yellowPrimary text-xl sm:text-2xl lg:text-3xl">
                    Immediate Cleaning & Crushing
                  </h2>

                  <div className="mt-6 space-y-6 font-messiri text-white text-base sm:text-xl lg:text-2xl leading-relaxed">
                    <motion.p
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: 0.06, duration: 0.9, ease }}
                    >
                      Within hours of harvest — and never exceeding 24 hours — the olives are transported to the mill. There, they are carefully washed and crushed into a fragrant paste using modern stainless-steel hammer mills, guided by time-honoured milling principles to preserve the olive’s natural character. </motion.p>

                    {/* <h2 className="font-messiri text-yellowPrimary text-xl sm:text-2xl lg:text-3xl">
                      Malaxation & Extraction
                    </h2>
                    <motion.p
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: 0.12, duration: 0.9, ease }}
                    >
                      After crushing, the olive paste is gently malaxed to allow the natural oil droplets to unite. This controlled mechanical process prepares the paste for efficient separation while maintaining balance and consistency in flavour.</motion.p>
                 */}
                      </div> 
                </motion.div>

                <motion.div
                  className="lg:col-span-5 flex justify-center lg:justify-end lg:sm:-translate-y-32"

                >
                  <motion.img
                    src="/assets/img/harvest/olive-bunch.png"
                    alt="Olive"
                    className=" w-64 sm:w-80 lg:w-[500px] -mt-10 sm:-mt-16 lg:-mt-72 drop-shadow-2xl"
                    draggable={false}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="bg-[#bda633] py-10">
            <div className="flex flex-col lg:flex-row h-full">
              <motion.div
                className="w-full lg:w-[80%]"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <img
                  src="/assets/img/harvest/5.jpg"
                  alt="harvest"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </motion.div>

              

              <motion.div
                className="w-full flex flex-col items-center space-y-6 justify-center px-4 sm:px-6 py-8 lg:py-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h2 className="font-messiri text-black text-xl sm:text-2xl lg:text-3xl">
                    Malaxation & Extraction
                  </h2>
                <p className="text-center px-2 sm:px-6 mx-0 sm:mx-5 text-white text-base sm:text-xl lg:text-2xl leading-relaxed">
                 After crushing, the olive paste is gently malaxed to allow the natural oil droplets to unite. This controlled mechanical process prepares the paste for efficient separation while maintaining balance and consistency in flavour. </p>
              </motion.div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row h-full">
              
              
              <motion.div
                className="w-full flex flex-col items-center space-y-6 justify-center px-4 sm:px-6 py-8 lg:py-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h2 className="font-messiri text-black text-xl sm:text-2xl lg:text-3xl">
                    Separation & Natural Clarification
                  </h2>

                <p className="text-center px-2 sm:px-6 mx-0 sm:mx-5 text-white text-base sm:text-xl lg:text-2xl leading-relaxed">
                  Using centrifugal decanters and vertical separators, the oil is mechanically separated from water and olive solids. It is then lightly filtered or naturally settled to achieve clarity and stability before bottling.
                </p>
              </motion.div>

              <motion.div
                className="w-full lg:w-auto"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <img
                  src="/assets/img/harvest/4.jpg"
                  alt="harvest"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </motion.div>
            </div>
          </section>
        </div>
        {navActive && (
          <div
            className="fixed inset-0 z-[80]"
            onClick={() => setNavActive(false)}
          >

            <div onClick={(e) => e.stopPropagation()}>
              <NavScreen onClose={() => setNavActive(false)} />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Harvest;
