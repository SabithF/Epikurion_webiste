import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type ClickMode = "route" | "next" | "none";

type Banner = {
  imageSrc: string;
  altText: string;
  headText: React.ReactNode;
  subText: React.ReactNode;
  mainImg?: string;

  link?: string;
  clickMode?: ClickMode;
  textPosClass?: string;
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
        Explore our story, harvests, and{" "}
        <span className="text-white font-bold">heritage</span>.
      </>
    ),
    mainImg: LOGO_CENTER,
    clickMode: "next",
    textPosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
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
        <span className="text-white">
          Single Estate . Limited Harvest . Greek Excellence
        </span>
      </>
    ),
    link: "/origin",
    clickMode: "route",
    textPosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    imageSrc: "/assets/banners/banner-3.png",
    altText: "banner-3",
    headText: (
      <>
        <span className="font-dancing italic text-md text-[#d2ae6d] lowercase">
          the
        </span>
        <span>Harvest</span>
      </>
    ),
    subText: <></>,
    link: "/harvest",
    clickMode: "route",
    textPosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },

  // ✅ Epikurion banner:
  // - Desktop stays EXACTLY as you had (absolute -top-72 left-20 etc.)
  // - Mobile becomes the same style as other banners (centered like others)
  {
    imageSrc: "/assets/banners/banner-41.png",
    altText: "banner-4",
    headText: (
      <>
        <div className="flex justify-center items-center flex-col">
          <span className="text-white text-[30px] absolute -top-72 left-20 uppercase max-lg:static max-lg:text-inherit max-lg:tracking-[0.22em]">
            Crafted by generations <br />{" "}
            <span className="text-[40%] text-[#d2ae6d]">Reserved for connoisseurs</span>
          </span>
          <span className="text-white absolute -top-60 left-20 text-sm pt-5 max-lg:hidden"></span>
        </div>
      </>
    ),
    subText: <></>,
    link: "/epikurion",
    clickMode: "route",
    // ✅ On mobile, position like other banners (center)
    textPosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },

  {
    imageSrc: "/assets/banners/banner-5.png",
    altText: "contact",
    headText: (
      <>
        <span className="text-[#d2ae6d] absolute -left-[500px] max-lg:static">
          Contact
        </span>
      </>
    ),
    subText: (
      <>
        <span className="absolute -left-[500px] top-[100px] max-lg:static max-lg:block max-lg:mt-3">
          Let’s talk —{" "}
          <span className="text-black font-bold">
            <span className="text-white">we’re here</span>
          </span>{" "}
          <span className="text-white">to help.</span>
        </span>
      </>
    ),
    link: "/contact",
    clickMode: "route",
    textPosClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
];

// ---------- Menu Tiles ----------
type MenuTile = {
  label: React.ReactNode;
  path?: string;
  bg: string;
  previewSrc: string;
  overlayClass?: string;
};

const MENU_TILES: {
  top: MenuTile[];
  middle: MenuTile[];
  bottom: MenuTile[];
} = {
  top: [
    { label: "Home", path: "/", bg: "bg-[#4a2c2c]", previewSrc: "/assets/banners/main-banner.png" },
    { label: "Origin", path: "/origin", bg: "bg-[#9b2d5d]", previewSrc: "/assets/banners/banner-2.png" },
    { label: "Harvest", path: "/harvest", bg: "bg-[#1f6f84]", previewSrc: "/assets/banners/banner-3.png" },
  ],
  middle: [
    {
      label: (
        <div className="text-center">
          <p className="tracking-[0.4em] text-2xl max-sm:text-xl">Epikurion Grove</p>
          <p className="text-xs mt-2 opacity-70">SINCE 1929</p>
        </div>
      ),
      path: "/epikurion",
      bg: "bg-[#5a3a35]",
      previewSrc: "/assets/banners/main-banner.png",
      overlayClass: "bg-black/55",
    },
  ],
  bottom: [
    { label: "Contact", path: "/contact", bg: "bg-[#4a2c2c]", previewSrc: "/assets/banners/banner-5.png" },
    { label: "Gallery", bg: "bg-[#9b2d5d]", previewSrc: "/assets/banners/banner-41.png" },
    { label: "More", bg: "bg-[#1f6f84]", previewSrc: "/assets/banners/banner-5.png" },
  ],
};

const MenuTileBlock: React.FC<{
  tile: MenuTile;
  onClick?: () => void;
}> = ({ tile, onClick }) => {
  const clickable = Boolean(onClick);
  return (
    <div
      onClick={onClick}
      className={[
        "group relative flex-1 flex items-center justify-center",
        tile.bg,
        "text-white tracking-widest",
        "overflow-hidden",
        clickable ? "cursor-pointer" : "cursor-default",
        "hover:bg-white/20 transition-all",
        "min-h-[33vh] sm:min-h-0",
      ].join(" ")}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : -1}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
    >
      <img
        src={tile.previewSrc}
        alt=""
        draggable={false}
        className={[
          "absolute inset-0 h-full w-full object-cover",
          "opacity-0 scale-110",
          "group-hover:opacity-100 group-hover:scale-100",
          "transition-all duration-700",
        ].join(" ")}
      />

      <div
        className={[
          "absolute inset-0",
          tile.overlayClass ?? "bg-black/45",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300",
        ].join(" ")}
      />

      <div className="relative z-10 px-4 text-center text-sm sm:text-base">
        {tile.label}
      </div>
    </div>
  );
};

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

  const menuRef = useRef<HTMLElement | null>(null);

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
    if (moved.current) return;

    const mode: ClickMode =
      current.clickMode ?? (current.link ? "route" : "none");
    if (mode === "none") return;

    if (mode === "next") {
      userAction(() => setActive(1));
      return;
    }

    if (mode === "route" && current.link) {
      navigate(current.link);
    }
  };

  const isClickable = (() => {
    const mode: ClickMode =
      current.clickMode ?? (current.link ? "route" : "none");
    return mode !== "none";
  })();

  const cursorClass = isClickable
    ? "cursor-pointer"
    : "cursor-grab active:cursor-grabbing";

  const toggleMenu = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setNavActive((v) => {
      const nextVal = !v;
      if (!v && nextVal) {
        window.requestAnimationFrame(() => {
          menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return nextVal;
    });
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
      {/* banners track */}
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

      {/* ✅ overlay gradient: REMOVE for first banner only */}
      {active !== 0 && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/35 max-lg:from-black/55 max-lg:via-black/20 max-lg:to-black/55" />
        </div>
      )}

      {/* top controls */}
      <div className="absolute inset-0 z-20">
        <div className="p-4 sm:p-6 lg:p-8 flex justify-end items-start">
          <button
            type="button"
            aria-label={navActive ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="group relative flex h-10 w-10 items-center translate-x-3 justify-center rounded-md hover:shadow-lg transition-all"
          >
            <span className="absolute inset-0 rounded-md ring-white/20 group-hover:ring-white/30 transition-all" />
            <span className="relative flex flex-col gap-[5px]">
              <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[2px] w-5 bg-white transition-all ${navActive ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* menu */}
      {navActive && (
        <section
          ref={(el) => {
            menuRef.current = el;
          }}
          className="absolute inset-0 w-screen h-screen flex flex-col bg-black z-50 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-1 flex-col sm:flex-row">
            {MENU_TILES.top.map((tile, idx) => (
              <MenuTileBlock
                key={idx}
                tile={tile}
                onClick={tile.path ? () => go(tile.path!) : undefined}
              />
            ))}
          </div>

          <div className="flex flex-1">
            {MENU_TILES.middle.map((tile, idx) => (
              <MenuTileBlock
                key={idx}
                tile={tile}
                onClick={tile.path ? () => go(tile.path!) : undefined}
              />
            ))}
          </div>

          <div className="flex flex-1 flex-col sm:flex-row">
            {MENU_TILES.bottom.map((tile, idx) => (
              <MenuTileBlock
                key={idx}
                tile={tile}
                onClick={tile.path ? () => go(tile.path!) : undefined}
              />
            ))}
          </div>
        </section>
      )}

      {/* overlay content */}
      <div className="absolute inset-0 z-30 pointer-events-none select-none">
        {current.mainImg ? (
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <img
              src={current.mainImg}
              alt="center"
              className="w-56 sm:w-80 lg:w-96 object-contain drop-shadow-2xl"
              draggable={false}
            />
          </div>
        ) : (
          <div
            key={active}
            className={[
              "absolute",
              current.textPosClass ?? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "px-6 text-center",
              "max-lg:w-[92%] max-lg:left-1/2 max-lg:-translate-x-1/2",
            ].join(" ")}
          >
            <h1 className="font-messiri uppercase tracking-[0.22em] text-3xl sm:text-7xl opacity-0 translate-y-4 animate-heroTitle text-white">
              {current.headText}
            </h1>
            <p className="mt-4 text-[#d2ae6d] font-semibold font-messiri text-xs sm:text-sm uppercase tracking-[0.35em] opacity-0 translate-y-3 animate-heroSub">
              {current.subText}
            </p>
          </div>
        )}
      </div>

      {/* arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          userAction(prev);
        }}
        className="absolute left-3 sm:left-4 top-1/2 z-30 -translate-y-1/2 text-white/80 hover:text-white text-4xl select-none max-sm:text-3xl"
        aria-label="Previous banner"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          userAction(next);
        }}
        className="absolute right-3 sm:right-4 top-1/2 z-30 -translate-y-1/2 text-white/80 hover:text-white text-4xl select-none max-sm:text-3xl"
        aria-label="Next banner"
      >
        ›
      </button>

      {/* dots */}
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
