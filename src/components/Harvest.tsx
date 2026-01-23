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

const Harvest: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden font-messiri">
      <div className="min-h-screen">
        
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <header className="absolute pt-10 z-30">
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
                The Epikurion Grove Harvest
              </h2>

              <p className="text-center px-2 sm:px-6 mx-0 sm:mx-5 text-base sm:text-xl lg:text-2xl leading-relaxed">
                At the serene foothills of Thermopylae,
                where history and tradition flow through the
                land, Epikurion Grove is born. Within a
                carefully defined ten-kilometer radius, a
                single ancestral farm nurtures olive trees that
                have flourished for generations, drawing
                character from mineral-rich soils and the M
                The grove is tended by its third-generation
                olives of exceptional quality. Rare and limit
                yields a fleeting treasure: a golden oil with a
                olives, a gentle hint of peppery warmth, and a
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
                  Origin of Epikurion Grove
                </h2>

                <div className="mt-6 space-y-6 font-messiri text-white text-base sm:text-xl lg:text-2xl leading-relaxed">
                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0.06, duration: 0.9, ease }}
                  >
                    The grove is tended by its third-generation farmers,
                    who produce olives of exceptional quality. Rare and limited
                    by nature, each harvest yields a fleeting treasure: a golden
                    oil with a vibrant aroma of sun-kissed olives, a gentle hint
                    of peppery warmth, and a rich, silky flavour that
                  </motion.p>

                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0.12, duration: 0.9, ease }}
                  >
                    The grove is tended by its third-generation farmers,
                    who produce olives of exceptional quality. Rare and limited
                    by nature, each harvest yields a fleeting treasure: a golden
                    oil with a vibrant aroma of sun-kissed olives, a gentle hint
                    of peppery warmth, and a rich, silky flavour that
                  </motion.p>
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
              <p className="text-center px-2 sm:px-6 mx-0 sm:mx-5 text-white text-base sm:text-xl lg:text-2xl leading-relaxed">
                The Epikurion Grove Harvest
                At the serene foothills of Thermopylae,
                where history and tradition flow through the
                land, Epikurion Grove is born. Within a
                carefully defined ten-kilometer radius, a
                single ancestral farm nurtures olive trees that
                have flourished for generations, drawing
                character from mineral-rich soils and the M
                The grove is tended by its third-generation
                olives of exceptional quality. Rare and limit
                yields a fleeting treasure: a golden oil with a
                olives, a gentle hint of peppery warmth, and a
              </p>
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
              <p className="text-center px-2 sm:px-6 mx-0 sm:mx-5 text-white text-base sm:text-xl lg:text-2xl leading-relaxed">
                The Epikurion Grove Harvest
                At the serene foothills of Thermopylae,
                where history and tradition flow through the
                land, Epikurion Grove is born. Within a
                carefully defined ten-kilometer radius, a
                single ancestral farm nurtures olive trees that
                have flourished for generations, drawing
                character from mineral-rich soils and the
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
    </main>
  );
};

export default Harvest;
