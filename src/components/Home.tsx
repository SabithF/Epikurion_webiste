import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type Banner = {
  imageSrc: string;
  altText: string;
  headText: React.ReactNode; 
  subText: React.ReactNode;  
  mainImg?: string;
  link?: string;
};

const LOGO_CENTER = "/assets/logo/logo.png";

const bannerDetails: Banner[] = [
  {
    imageSrc: "/assets/banners/main-banner.png",
    altText: "main-banner", 
    headText: (
      <>
        Welcome to <span className="text-[#d2ae6d]">Epikurion</span>
      </>
    ),
    subText: (
      <>
        Explore our story, harvests,C and <span className="text-white font-bold">heritage</span>.
      </>
    ),

    mainImg: LOGO_CENTER,
    link: "/epikurion",
    
  },
  {
    imageSrc: "/assets/banners/banner-2.png",
    altText: "banner-2",
    
    headText: (
      <>
        <span className="text-[#d2ae6d]">Origin</span>
      </>
    ),
    subText: (
      <>
        <span className="text-white">Single Estate . Limited Harvest . Greek Excellence</span>
      </>
    ),
    link: "/origin",
  },
  {
    imageSrc: "/assets/banners/banner-3.png",
    altText: "banner-3",
  
    headText: (
      <>

      <span className="font-dancing italic text-md text-[#d2ae6d]">the</span>
        <span className="">Harvest</span>
      </>
    ),
    subText: (
      <>
        
      </>
    ),
    link: "/harvest",
  },
  {
    imageSrc: "/assets/banners/banner-41.png",
    altText: "banner-4",
    headText: (
      <>
       <span className="text-[#d2ae6d] shadow-xl"> A limited Gift Edition <br /></span>

      </>
    ),
    subText: (
      <>
       <span className="text-white"> Reserved for Special Request</span> 
      </>
    ),
   
  },
  {
    imageSrc: "/assets/banners/banner-5.png",
    altText: "contact",
    headText: (
      <>
        <span className="text-[#d2ae6d] shadow-xl">Contact</span>
      </>
    ),
    subText: (
      <>
        Let’s talk — we’re <span className="text-black font-bold"><span className="text-black">here</span></span> <span className="text-black">to help.</span>
      </>
    ),
    
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const total = bannerDetails.length;
  const current = useMemo(() => bannerDetails[active], [active]);

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(next, 8000);
    return () => window.clearInterval(id);
  }, [isPaused, total]);

  const userAction = (fn: () => void) => {
    setIsPaused(true);
    fn();
    window.setTimeout(() => setIsPaused(false), 8500);
  };

  const wheelLock = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);
  const moved = useRef(false);

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    moved.current = false;
  };

  const onTouchMove: React.TouchEventHandler<HTMLElement> = (e) => {
    const startX = touchStartX.current;
    if (startX === null) return;
    const x = e.touches[0]?.clientX ?? startX;
    if (Math.abs(x - startX) > 8) moved.current = true;
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
    moved.current = false;
  };

  const onMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!dragging.current || dragStartX.current === null) return;

    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 8) moved.current = true;

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

  const onBannerClick: React.MouseEventHandler<HTMLElement> = () => {
    if (!current.link) return;
    if (moved.current) return;
    navigate(current.link);
  };

  const cursorClass = current.link ? "cursor-pointer" : "cursor-grab active:cursor-grabbing";

  const toggleMenu = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setNavActive((v) => !v);
  };

  const go = (path: string) => {
    setNavActive(false);
    navigate(path);
  };

  return (
    <section
      className={`relative h-screen w-screen overflow-hidden ${cursorClass}`}
      onClick={onBannerClick}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
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
            <img src={b.imageSrc} alt={b.altText} className="h-full w-full object-cover" draggable={false} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0" />

      <div className="absolute inset-0 z-20">
        <div className="p-4 sm:p-6 lg:p-8 flex justify-between items-start">
          {/* ✅ Remove top header logo ONLY on first banner */}
          <div className="flex flex-col items-start gap-2">
            {active !== 0 && (
              <img
                src="/assets/logo/e-logo.png"
                alt="Logo"
                className="h-16 sm:h-16 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/");
                }}
              />
            )}

            {/* ✅ Hamburger stays (professional, clean) */}
            <button
              type="button"
              aria-label={navActive ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
              className="group relative flex h-10 w-10 items-center translate-x-3 justify-center rounded-md bg-black/10 hover:bg-white/20 transition-all"
            >
              <span className="absolute inset-0 rounded-md ring-1 ring-white/20 group-hover:ring-white/30 transition-all" />
              <span className="relative flex flex-col gap-[5px]">
                <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "opacity-0" : "opacity-100"}`} />
                <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {navActive && (
        <section className="absolute w-screen text-white h-screen flex flex-col bg-black z-50">
          <div className="flex flex-1">
            <div
              className="flex-1 flex w-full h-full items-center justify-center bg-[#4a2c2c] hover:bg-white/20 transition-all text-white tracking-widest cursor-pointer"
              onClick={() => go("/")}
            >
              Home
            </div>
            <div
              className="flex-1 flex items-center justify-center bg-[#9b2d5d] text-white tracking-widest cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => go("/origin")}
            >
              Origin
            </div>
            <div
              className="flex-1 flex items-center justify-center bg-[#1f6f84] text-white tracking-widest cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => go("/harvest")}
            >
              Harvest
            </div>
          </div>

          <div className="flex flex-1">
            <div
              className="flex-1 flex flex-col items-center justify-center bg-[#5a3a35] text-white cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => go("/epikurion")}
            >
              <p className="tracking-[0.4em] text-2xl">Epikurion Grove</p>
              <p className="text-xs mt-2 opacity-70">SINCE 1929</p>
            </div>
          </div>

          <div className="flex flex-1">
            <div
              className="flex-1 flex items-center justify-center bg-[#4a2c2c] text-white tracking-widest cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => go("/contact")}
            >
              Contact
            </div>
            <div className="flex-1 flex items-center justify-center bg-[#9b2d5d] text-white tracking-widest">
              Gallery
            </div>
            <div className="flex-1 flex items-center justify-center bg-[#1f6f84] text-white tracking-widest">
              More
            </div>
          </div>
        </section>
      )}

      <div className="relative z-20 flex h-full items-center justify-center px-6 select-none pointer-events-none">
        {current.mainImg ? (
          <img
            src={current.mainImg}
            alt="center"
            className="w-64 sm:w-80 lg:w-96 object-contain drop-shadow-2xl"
            draggable={false}
          />
        ) : (
          <div key={active} className="text-center text-white">
            {/* ✅ Messiri font, and text is editable with spans */}
            <h1 className="font-messiri uppercase tracking-[0.22em] text-3xl sm:text-7xl opacity-0 translate-y-4 animate-heroTitle">
              {current.headText}
            </h1>
            <p className="mt-4 text-[#d2ae6d] font-semibold font-messiri text-xs sm:text-sm uppercase tracking-[0.35em] opacity-0 translate-y-3 animate-heroSub">
              {current.subText}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          userAction(prev);
        }}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white/80 hover:text-white text-4xl select-none"
        aria-label="Previous banner"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          userAction(next);
        }}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 text-white/80 hover:text-white text-4xl select-none"
        aria-label="Next banner"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex gap-2">
        {bannerDetails.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              userAction(() => setActive(i));
            }}
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
