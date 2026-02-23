import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NavScreen from "./NavScreen";
import Footer from "./Footer";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

// type MenuTile = {
//   label: React.ReactNode;
//   path?: string;
//   bg: string;
//   previewSrc: string;
//   overlayClass?: string;
// };

// const MENU_TILES: { top: MenuTile[]; middle: MenuTile[]; bottom: MenuTile[] } = {
//   top: [
//     { label: "Home", path: "/", bg: "bg-[#4a2c2c]", previewSrc: "/assets/banners/main-banner.png" },
//     { label: "Origin", path: "/origin", bg: "bg-[#9b2d5d]", previewSrc: "/assets/banners/banner-2.png" },
//     { label: "Harvest", path: "/harvest", bg: "bg-[#1f6f84]", previewSrc: "/assets/banners/banner-3.png" },
//   ],
//   middle: [
//     {
//       label: (
//         <div className="text-center">
//           <p className="tracking-[0.4em] text-2xl">Epikurion Grove</p>
//           <p className="text-xs mt-2 opacity-70">SINCE 1929</p>
//         </div>
//       ),
//       path: "/epikurion",
//       bg: "bg-[#5a3a35]",
//       previewSrc: "/assets/banners/main-banner.png",
//       overlayClass: "bg-black/55",
//     },
//   ],
//   bottom: [
//     { label: "Contact", path: "/contact", bg: "bg-[#4a2c2c]", previewSrc: "/assets/banners/banner-5.png" },
//     { label: "Gallery", bg: "bg-[#9b2d5d]", previewSrc: "/assets/banners/banner-41.png" },
//     { label: "More", bg: "bg-[#1f6f84]", previewSrc: "/assets/banners/banner-5.png" },
//   ],
// };

// const MenuTileBlock: React.FC<{ tile: MenuTile; onClick?: () => void }> = ({ tile, onClick }) => {
//   const clickable = Boolean(onClick);
//   return (
//     <div
//       onClick={onClick}
//       className={[
//         "group relative flex-1 flex items-center justify-center",
//         tile.bg,
//         "text-white tracking-widest",
//         "overflow-hidden",
//         clickable ? "cursor-pointer" : "cursor-default",
//         "hover:bg-white/20 transition-all",
//       ].join(" ")}
//       role={clickable ? "button" : undefined}
//       tabIndex={clickable ? 0 : -1}
//       onKeyDown={(e) => {
//         if (!clickable) return;
//         if (e.key === "Enter" || e.key === " ") onClick?.();
//       }}
//     >
//       <img
//         src={tile.previewSrc}
//         alt=""
//         draggable={false}
//         className="absolute inset-0 h-full w-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
//       />
//       <div
//         className={[
//           "absolute inset-0",
//           tile.overlayClass ?? "bg-black/45",
//           "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
//         ].join(" ")}
//       />
//       <div className="relative z-10 px-4 text-center">{tile.label}</div>
//     </div>
//   );
// };

const AboutPage: React.FC = () => {
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

  // const go = (path: string) => {
  //   setNavActive(false);
  //   navigate(path);
  // };

  return (
    <>
      <main
        className="min-h-screen w-full bg-black bg-no-repeat bg-cover bg-top overflow-hidden"
        style={{ backgroundImage: "url(/assets/banners/black-bg.jpg)" }}
      >
        <div className="min-h-screen bg-black/20">

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


          <div className="pt-28 sm:pt-32">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header section title */}
              <section className="mt-8 sm:mt-10">
                <motion.h1
                  className="flex justify-end font-messiri uppercase tracking-[0.07em] text-4xl sm:text-6xl lg:text-7xl text-yellowPrimary"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                >
                  Origin
                </motion.h1>
              </section>
            </div>

            <section className="mt-16 sm:mt-28 lg:mt-36">
              <div className="relative">

                {/* Dark Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/70"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left Content */}
                    <motion.div
                      className="lg:col-span-7"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      <h2 className="font-messiri text-yellowPrimary text-xl sm:text-2xl lg:text-3xl">
                        Origin of Epikurion Grove
                      </h2>

                      <div className="mt-6 space-y-6 font-messiri text-white/95 
                      text-lg sm:text-[1.5rem] lg:text-[1.5rem] leading-relaxed">

                        <motion.p
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                          At the serene foothills of Thermopylae, where history and tradition flow through
                          the land, Epikurion Grove is born. Within a carefully defined ten-kilometre
                          radius, a single ancestral farm nurtures olive trees that have flourished for
                          generations, drawing character from mineral-rich soils and the Mediterranean sun.
                        </motion.p>

                        <motion.p
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                          The grove is tended by its third-generation farmers, who produce olives of
                          exceptional quality. Rare and limited by nature, each harvest yields a fleeting
                          treasure: a golden oil with a vibrant aroma of sun-kissed olives, a gentle hint
                          of peppery warmth, and a rich, silky flavour that lingers.
                        </motion.p>

                      </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                      className="lg:col-span-5 flex justify-center lg:justify-end -mt-16 sm:-mt-24 lg:-mt-28"
                    >
                      <motion.img
                        src="/assets/img/olive.png"
                        alt="Olive"
                        className="rotate-[20deg] w-44 sm:w-80 lg:w-[420px] drop-shadow-2xl"
                        draggable={false}
                      />
                    </motion.div>

                  </div>
                </div>
              </div>
            </section>

            <section className="relative bg-black/70 text-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

                  {/* TEXT (Left on desktop, below image on mobile) */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <div className="space-y-6 font-messiri text-white/95 
                    text-[15px] sm:text-[1.25rem] lg:text-[1.25rem] leading-relaxed">
                      <p>
                     Harvest is a moment of patience and precision. Olives are gently collected throughout the season, with expert hands guiding each delicate step. Modern techniques blend seamlessly with tradition, ensuring the utmost care at every stage. From grove to press, only the finest fruit is selected, yielding a golden oil of unparalleled clarity and exquisite nuance.
                      </p>
                      <p>
                        Epikurion Grove is an exclusive, single-estate reserve, meticulously crafted from a select blend of olive varieties chosen for their harmonious synergy, not their quantity. Each variety imparts its unique, delicate character, resulting in an oil that is refined, expressive, and quietly complex.
                      </p>

                      <p>
                       For generations, this golden oil remained a family secret, shared only at Greek family tables and within trusted circles. Today, in select seasons and limited quantities, it is offered beyond our borders — a gift from our family to yours.  </p>

                      <p>
                       Each bottle reflects its heritage: the timeless land, a living tradition, and the art of contemporary craftsmanship. From Thermopylae to the modern table, Epikurion Grove embodies authenticity, elegance, and the enduring spirit of Greek excellence. </p>
                    </div>
                  </motion.div>

                  {/* IMAGE (Right on desktop, top on mobile) */}
                  <motion.div
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <motion.img
                      src="/assets/img/yes.jpeg"
                      alt="grove"
                      className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[520px] rounded-2xl object-cover shadow-2xl"
                      draggable={false}
                      initial={{ scale: 1.03, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>

                </div>
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

        </div>


      </main>

      <Footer />

    </>


  );
};

export default AboutPage;
