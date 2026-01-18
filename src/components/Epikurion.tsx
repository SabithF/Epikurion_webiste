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

const EpikurionPage: React.FC = () => {

    return (
        <main className="min-h-screen overflow-hidden font-messiri">
            <header className="absolute pt-10 z-30 mx-auto px-4 sm:px-6 lg:px-8">
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

            <section className="flex relative bg-black w-full items-stretch">
                <div className=" h-[70%] w-[15%]">
                    <div className="bg-white h-[80%] absolute w-[15%] "></div>

                </div>
                <div className="h-full w-[45%] bg-white">
                    <img src="/assets/img/epik/flower-bg.png" alt="center-banner" className="object-cover" />

                </div>
                <div className="bg-gray-800 h-[70%] w-[40%]">
                    <img src="/assets/img/epik/fruit.png" alt="fruits-image" />
                </div>
            </section>

            <section className="flex relative w-full items-stretch">
                <div className="  w-[15%]">
                    <div className="bg-white h-[80%] absolute w-[15%] "></div>

                </div>
                <div className="h-full w-[45%] h-[20%] bg-white">
                    <img src="/assets/img/epik/bread.png" alt="center-banner" className="object-cover h-[80%]" />

                </div>
                <div className="flex items-center px-10 text-6xl leading-[80px]">
                    <h1 className="text-gray-700">Crafted with
                        <br /><span className="text-yellowPrimary">Tradition
                        </span> <br />
                        Bottled with <br /><span className="text-yellowPrimary">Care</span></h1>                </div>
            </section>

            <section className="relative bg-[#d2ae6d] py-16 overflow-hidden">
                {/* Top banner */}
                <img
                    src="/assets/img/epik/banner-4.png"
                    alt="bottles-banner"
                    className="w-full object-cover"
                />

                {/* LIMITED title */}
                <h1 className="flex justify-center py-12 text-7xl tracking-[1.4em] text-white">
                    LIMITED
                </h1>

                {/* Content row */}
                <div className="relative z-10 flex items-start px-16">
                    {/* Bottle */}
                    <img
                        src="/assets/img/epik/Epikurion Grove Special Bottle.png"
                        alt="Bottle"
                        className="w-[35%] relative z-20"
                    />

                    {/* Text */}
                    <div className="ml-16 max-w-3xl">
                        <h2 className="font-messiri text-white text-2xl lg:text-4xl">
                            Origin of Epikurion Grove
                        </h2>

                        <p className="mt-8 text-gray-800/60 font-messiri text-lg lg:text-xl leading-relaxed">
                            This limited edition reflects the highest expression of Epikurion Grove.
                            Encased in deep olive green and adorned with finely detailed gold botanical
                            engravings, the bottle draws inspiration directly from the grove itself.
                            The ornamentation is deliberate and restrained, echoing the rhythm of olive
                            branches shaped by time, sun, and soil.
                            <br /><br />
                            Produced in strictly limited quantities from a single estate, this edition
                            is offered only by special request. Each bottle is individually selected
                            from a carefully chosen harvest, intended for private collections, refined
                            gifting, and occasions of lasting significance.
                        </p>
                    </div>
                </div>

                {/* Bottom white box */}
                <div className="absolute bottom-0 left-0 w-full h-[28%] bg-white z-0" />
            </section>

        </main>
    )

}

export default EpikurionPage;