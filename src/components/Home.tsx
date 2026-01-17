import React, { useEffect, useMemo, useRef, useState } from "react";

type Banner = {
  imageSrc: string;
  altText: string;
  headText: string;
  subText: string;
  mainImg?: string;
};

const bannerDetails: Banner[] = [
  {
    imageSrc: "/assets/banners/main-banner.png",
    altText: "main-banner",
    headText: "",
    subText: "",
    mainImg: "/assets/logo/logo.png",
  },
  {
    imageSrc: "/assets/banners/banner-2.png",
    altText: "banner-2",
    headText: "Origin",
    subText: "Embark on an epic journey with us.",
  },
  {
    imageSrc: "/assets/banners/banner-3.png",
    altText: "banner-3",
    headText: "Harvest",
    subText: "Embark on an epic journey with us.",
  },
  {
    imageSrc: "/assets/banners/banner-4.png",
    altText: "banner-4",
    headText: "Epikurion Grove",
    subText: "Embark on an epic journey with us.",
  },
  {
    imageSrc: "/assets/banners/banner-5.png",
    altText: "contact",
    headText: "Contact",
    subText: "Embark on an epic journey with us.",
  },
];

const Home: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = bannerDetails.length;
  const current = useMemo(() => bannerDetails[active], [active]);

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(next, 6500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, total]);

  const userAction = (fn: () => void) => {
    setIsPaused(true);
    fn();
    window.setTimeout(() => setIsPaused(false), 8000);
  };

  const touchStartX = useRef<number | null>(null);
  const wheelLock = useRef(false);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd: React.TouchEventHandler<HTMLElement> = (e) => {
    const startX = touchStartX.current;
    if (startX === null) return;

    const endX = e.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;

    if (Math.abs(delta) > 50) userAction(() => (delta < 0 ? next() : prev()));
    touchStartX.current = null;
  };

  const onWheel: React.WheelEventHandler<HTMLElement> = (e) => {
    if (wheelLock.current) return;

    const dx = e.deltaX;
    const dy = e.deltaY;
    if (Math.abs(dx) < 20 && Math.abs(dy) < 20) return;

    wheelLock.current = true;
    userAction(() => {
      const delta = Math.abs(dx) > Math.abs(dy) ? dx : dy;
      delta > 0 ? next() : prev();
    });

    window.setTimeout(() => {
      wheelLock.current = false;
    }, 800);
  };

  const onMouseDown: React.MouseEventHandler<HTMLElement> = (e) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
  };

  const onMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!dragging.current || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;

    if (Math.abs(delta) > 70) {
      userAction(() => (delta < 0 ? next() : prev()));
      dragging.current = false;
      dragStartX.current = null;
    }
  };

  const onMouseUp: React.MouseEventHandler<HTMLElement> = () => {
    dragging.current = false;
    dragStartX.current = null;
  };

  return (
    <section
      className="relative h-screen w-screen overflow-hidden cursor-grab active:cursor-grabbing"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{ touchAction: "none" }}
    >
      <div
        className="absolute inset-0 flex"
        style={{
          transform: `translate3d(-${active * 100}vw, 0, 0)`,
          transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {bannerDetails.map((b, i) => (
          <div key={i} className="h-screen w-screen flex-shrink-0">
            <img
              src={b.imageSrc}
              alt={b.altText}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 z-20">
        <div className="p-4 sm:p-6 lg:p-8 flex justify-between items-center">
          <img src="/assets/logo/logo.png" alt="Logo" className="h-20 sm:h-24" />
          <div className="flex gap-4 px-4 lg:px-8 font-urbanist text-white">
            <div className="uppercase font-bold hover:text-blue-300 cursor-pointer">
              Menu
            </div>
            <div className="uppercase font-semibold hover:text-blue-300 cursor-pointer">
              FB
            </div>
            <div className="uppercase font-semibold hover:text-blue-300 cursor-pointer">
              In
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        {current.mainImg ? (
          <img
            src={current.mainImg}
            alt="center"
            className="w-64 sm:w-80 lg:w-96 object-contain drop-shadow-2xl"
            draggable={false}
          />
        ) : (
          <div key={active} className="text-center text-white">
            <h1 className="font-urbanist uppercase tracking-[0.22em] text-3xl sm:text-7xl opacity-0 translate-y-4 animate-heroTitle">
              {current.headText}
            </h1>
            <p className="mt-4 text-[#d2ae6d] font-semibold font-messiri text-xs sm:text-lg uppercase tracking-[0.35em] opacity-0 translate-y-3 animate-heroSub">
              {current.subText}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => userAction(prev)}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white/80 hover:text-white text-4xl select-none"
        aria-label="Previous banner"
      >
        ‹
      </button>

      <button
        onClick={() => userAction(next)}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 text-white/80 hover:text-white text-4xl select-none"
        aria-label="Next banner"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex gap-2">
        {bannerDetails.map((_, i) => (
          <button
            key={i}
            onClick={() => userAction(() => setActive(i))}
            className={[
              "h-2 w-2 rounded-full transition-all",
              i === active ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70",
            ].join(" ")}
            aria-label={`Go to banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
