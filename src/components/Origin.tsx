import React from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const AboutPage: React.FC = () => {
  return (
    <main
      className="min-h-screen w-full bg-black bg-no-repeat bg-cover bg-top overflow-hidden"
      style={{ backgroundImage: "url(/assets/banners/black-bg.jpg)" }}
    >
      <div className="min-h-screen bg-black/20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <header className="pt-10">
            <motion.img
              src="/assets/logo/e-logo.png"
              alt="Logo"
              className="h-16 sm:h-20"
              variants={fadeIn}
              initial="hidden"
              animate="show"
            />
          </header>

          <section className="mt-20 sm:mt-24">
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

        <section className="mt-16 sm:mt-36 lg:mt-48">
          <div className="relative">
            <motion.div
              className="absolute inset-x-0 top-0 h-full bg-black/70"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            />

            <div className="relative mx-auto max-w-7xl sm:mt-24 px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
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

                  <div className="mt-6 space-y-6 font-messiri text-white/95 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    <motion.p
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      At the serene foothills of Thermopylae, where history and tradition flow through
                      the land, Epikurion Grove is born. Within a carefully defined ten-kilometer
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

                <motion.div
                  className="lg:col-span-5 sm:-translate-y-32 flex justify-center lg:justify-end"
                  
                >
                  <motion.img
                    src="/assets/img/olive.png"
                    alt="Olive"
                    className="rotate-[20deg] w-64 sm:w-80 lg:w-[450px] -mt-8 sm:-mt-12 lg:-mt-20 drop-shadow-2xl"
                    draggable={false}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row justify-between text-white">
          <motion.div
            className="w-full flex flex-col text-left justify-end px-4 sm:px-6 lg:px-20 py-10 sm:py-14 space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="font-messiri text-xl sm:text-2xl lg:text-3xl">
              Origin of Epikurion Grove
            </h2>

            <div className="mt-6 space-y-6 font-messiri text-white/95 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              <p>
                At the serene foothills of Thermopylae, where history and tradition flow through the land,
                Epikurion Grove is born. Within a carefully defined ten-kilometer radius, a single ancestral
                farm nurtures olive trees that have flourished for generations, drawing character from
                mineral-rich soils and the Mediterranean sun.
              </p>

              <p>
                The grove is tended by its third-generation farmers, who produce olives of exceptional quality.
                Rare and limited by nature, each harvest yields a fleeting treasure: a golden oil with a vibrant
                aroma of sun-kissed olives, a gentle hint of peppery warmth, and a rich, silky flavour that lingers.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.img
              src="/assets/img/yes.jpeg"
              alt="grove"
              className="w-full h-full object-cover max-h-[520px] lg:max-h-none"
              draggable={false}
              initial={{ scale: 1.03, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </section>

        <section className="ml-0 sm:ml-[30%] text-white bg-black/70">
          <motion.div
            className="p-4 sm:p-6 lg:p-20 mt-6 space-y-6 font-messiri text-white/95 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p>
              The grove is tended by its third-generation farmers, who produce olives of exceptional quality.
              Rare and limited by nature, each harvest yields a fleeting treasure: a golden oil with a vibrant
              aroma of sun-kissed olives, a gentle hint of peppery warmth, and a rich, silky flavour that lingers.
              <br />
              <br />
              The grove is tended by its third-generation farmers, who produce olives of exceptional quality.
              Rare and limited by nature, each harvest yields a fleeting treasure: a golden oil with a vibrant
              aroma of sun-kissed olives, a gentle hint of peppery warmth, and a rich, silky flavour that lingers.
            </p>
          </motion.div>
        </section>

        <div className="h-16 sm:h-24" />
      </div>
    </main>
  );
};

export default AboutPage;
