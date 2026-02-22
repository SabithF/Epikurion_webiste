import React from "react";
import { useNavigate } from "react-router-dom";

type MenuTile = {
  label: React.ReactNode;
  path?: string; // if missing => non-click tile
  bg: string;
  previewSrc: string; // banner shown on hover inside tile
  overlayClass?: string; // optional overlay strength
};

const MENU_TILES: { top: MenuTile[]; middle: MenuTile[]; bottom: MenuTile[] } = {
  top: [
    { label: "Home", path: "/", bg: "bg-[#4a2c2c]", previewSrc: "/assets/banners/main-banner.png" },
    { label: "Origin", path: "/origin", bg: "bg-[#9b2d5d]", previewSrc: "/assets/banners/banner-2.png" },
    { label: "Harvest", path: "/harvest", bg: "bg-[#1f6f84]", previewSrc: "/assets/banners/banner-3.png" },
  ],
  middle: [
    {
      label: (
        <div className="text-center">
          <p className="tracking-[0.4em] text-2xl">Epikurion Grove</p>
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

const MenuTileBlock: React.FC<{ tile: MenuTile; onClick?: () => void }> = ({ tile, onClick }) => {
  const clickable = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      className={[
        "group relative flex-1 flex items-center justify-center",
        "text-white tracking-widest",
        "overflow-hidden",
        tile.bg,
        clickable ? "cursor-pointer" : "cursor-default",
        "hover:bg-white/20 transition-all",
      ].join(" ")}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : -1}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
    >
      {/* banner preview inside the tile */}
      <img
        src={tile.previewSrc}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
      />

      {/* overlay */}
      <div
        className={[
          "absolute inset-0",
          tile.overlayClass ?? "bg-black/45",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        ].join(" ")}
      />

      {/* label */}
      <div className="relative z-10 px-4 text-center">{tile.label}</div>
    </div>
  );
};

type NavScreenProps = {
  onClose: () => void; // ✅ make it required so it always works
};

const NavScreen: React.FC<NavScreenProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const go = (path?: string) => {
    if (!path) return;
    onClose(); // ✅ always close
    navigate(path);
  };

  return (
    
    <section
      className="fixed inset-0 z-[70] w-screen h-screen bg-black text-white"
      onClick={onClose}
    >
      {/* ✅ stop clicks INSIDE menu from closing */}
      <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
        {/* Top row */}
        <div className="flex flex-1">
          {MENU_TILES.top.map((tile, idx) => (
            <MenuTileBlock key={idx} tile={tile} onClick={tile.path ? () => go(tile.path) : undefined} />
          ))}
        </div>

        {/* Middle row */}
        <div className="flex flex-1">
          {MENU_TILES.middle.map((tile, idx) => (
            <MenuTileBlock key={idx} tile={tile} onClick={tile.path ? () => go(tile.path) : undefined} />
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-1">
          {MENU_TILES.bottom.map((tile, idx) => (
            <MenuTileBlock key={idx} tile={tile} onClick={tile.path ? () => go(tile.path) : undefined} />
          ))}
        </div>
      </div>

      {/* ✅ Bigger, highlighted close button (easy to tap) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
          absolute top-5 right-5 z-[80]
          h-12 min-w-[110px] px-4
          rounded-full
          bg-white/15 hover:bg-white/25 active:bg-white/30
          ring-1 ring-white/25 hover:ring-white/40
          backdrop-blur-md
          text-white font-semibold tracking-widest text-sm
          shadow-xl
          flex items-center justify-center gap-2
          transition
        "
        aria-label="Close menu"
      >
        <span className="text-lg leading-none">×</span>
        CLOSE
      </button>
    </section>
  );
};

export default NavScreen;