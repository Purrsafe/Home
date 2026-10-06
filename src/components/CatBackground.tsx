import React, { useState } from 'react';

export const CatBackground: React.FC = () => {
  const [clickedCat, setClickedCat] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMascotClick = (e: React.MouseEvent) => {
    setClickedCat(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const newHearts = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i,
      x: rect.left + 30 + (Math.random() * 40 - 20),
      y: rect.top - 10 - i * 15,
    }));
    setHearts((prev) => [...prev, ...newHearts]);
    setTimeout(() => {
      setClickedCat(false);
      setHearts((prev) => prev.filter((h) => !newHearts.find((nh) => nh.id === h.id)));
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Distinctive & Prominent Seamless Cat Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.14] text-amber-950 transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="cat-pattern-distinct"
            x="0"
            y="0"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* Cute Cat Face with Blushing Cheeks & Whiskers (Top-Left) */}
            <g transform="translate(20, 18) scale(0.65)" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              {/* Head Silhouette with Cute Pointy Ears */}
              <path d="M22 34 L12 8 L36 18 C46 15 56 15 66 18 L90 8 L80 34 C94 46 94 72 80 82 C68 92 34 92 22 82 C8 72 8 46 22 34 Z" fill="currentColor" fillOpacity="0.16" />
              {/* Inner Ear details */}
              <path d="M19 14 L28 22" strokeWidth="2" strokeOpacity="0.6" />
              <path d="M83 14 L74 22" strokeWidth="2" strokeOpacity="0.6" />
              {/* Happy closed eyes ^ ^ */}
              <path d="M28 46 Q37 38 46 46" strokeWidth="3.2" />
              <path d="M56 46 Q65 38 74 46" strokeWidth="3.2" />
              {/* Blushing cheeks */}
              <ellipse cx="26" cy="56" rx="5" ry="3" fill="currentColor" fillOpacity="0.3" stroke="none" />
              <ellipse cx="76" cy="56" rx="5" ry="3" fill="currentColor" fillOpacity="0.3" stroke="none" />
              {/* Heart nose */}
              <path d="M48 53 C48 50 45 49 43 51 C41 53 44 56 48 58 C52 56 55 53 53 51 C51 49 48 50 48 53 Z" fill="currentColor" />
              {/* Cat smile :3 */}
              <path d="M48 58 Q42 64 36 60" strokeWidth="2.6" />
              <path d="M48 58 Q54 64 60 60" strokeWidth="2.6" />
              {/* Whiskers */}
              <line x1="22" y1="52" x2="3" y2="49" strokeWidth="2.4" />
              <line x1="22" y1="58" x2="2" y2="60" strokeWidth="2.4" />
              <line x1="80" y1="52" x2="99" y2="49" strokeWidth="2.4" />
              <line x1="80" y1="58" x2="100" y2="60" strokeWidth="2.4" />
            </g>

            {/* Big Prominent Cat Paw (Top-Right) */}
            <g transform="translate(145, 25) scale(0.95)" fill="currentColor">
              {/* Main Pad (Heart/bean shaped) */}
              <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" fillOpacity="0.85" />
              {/* 4 Toe Pads */}
              <ellipse cx="8" cy="11" rx="3.2" ry="3.8" fillOpacity="0.85" transform="rotate(-15 8 11)" />
              <ellipse cx="13.5" cy="7" rx="3.5" ry="4" fillOpacity="0.85" transform="rotate(-5 13.5 7)" />
              <ellipse cx="19.5" cy="7.5" rx="3.5" ry="4" fillOpacity="0.85" transform="rotate(5 19.5 7.5)" />
              <ellipse cx="25" cy="12" rx="3.2" ry="3.8" fillOpacity="0.85" transform="rotate(15 25 12)" />
            </g>

            {/* Playful Cat with Yarn Ball (Center) */}
            <g transform="translate(100, 105) scale(0.65)" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              {/* Yarn Ball */}
              <circle cx="20" cy="20" r="14" fill="currentColor" fillOpacity="0.14" />
              <path d="M10 15 Q20 25 30 15" strokeWidth="2.2" />
              <path d="M15 10 Q25 20 15 30" strokeWidth="2.2" />
              <path d="M25 8 Q12 18 20 32" strokeWidth="2.2" />
              {/* Curled Yarn thread loop */}
              <path d="M34 20 C45 25 50 15 60 22 C68 28 65 38 75 35" strokeDasharray="3 3" strokeWidth="2" />
            </g>

            {/* Milk Carton for "PurrSafe Hương Sữa" (Bottom-Left) */}
            <g transform="translate(25, 140) scale(0.72)" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 10 L20 10 L20 16 L12 16 Z" fill="currentColor" fillOpacity="0.2" />
              <path d="M9 16 L23 16 L28 26 L28 50 L4 50 L4 26 Z" fill="currentColor" fillOpacity="0.1" />
              {/* Cute Cow spot on milk */}
              <path d="M10 32 C12 28 18 30 17 35 C16 40 10 40 10 32 Z" fill="currentColor" fillOpacity="0.3" stroke="none" />
              {/* Word MILK */}
              <text x="7" y="47" fontSize="7" fontWeight="bold" fill="currentColor" stroke="none" letterSpacing="1">MILK</text>
            </g>

            {/* Sleeping Kitten on Cloud (Bottom-Right) */}
            <g transform="translate(140, 140) scale(0.7)" fill="currentColor">
              {/* Cloud Base */}
              <path d="M12 40 C6 40 2 34 8 28 C6 20 16 16 24 20 C28 14 40 14 44 20 C52 16 62 20 60 28 C66 34 62 40 56 40 Z" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              {/* Curled Cat */}
              <path d="M38 28 C38 18 22 16 16 23 C10 30 14 38 24 38 C34 38 42 34 44 26" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
              <polygon points="17,19 13,12 20,16" />
              <polygon points="23,17 26,10 28,17" />
              {/* Tail */}
              <path d="M36 34 C44 34 48 26 44 20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </g>

            {/* Fish Bone Silhouette (Center-Left) */}
            <g transform="translate(85, 45) scale(0.65) rotate(25)" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="8" y1="18" x2="38" y2="18" strokeWidth="2.8" />
              {/* Fish head */}
              <path d="M8 18 L1 11 L1 25 Z" fill="currentColor" fillOpacity="0.3" />
              {/* Rib bones */}
              <line x1="16" y1="10" x2="16" y2="26" />
              <line x1="24" y1="11" x2="24" y2="25" />
              <line x1="32" y1="13" x2="32" y2="23" />
              {/* Tail */}
              <path d="M38 18 L46 10 M38 18 L46 26" strokeWidth="2.8" />
            </g>

            {/* Playful Wandering Paws Across Tile */}
            <g transform="translate(65, 185) scale(0.48) rotate(-25)" fill="currentColor" fillOpacity="0.75">
              <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" />
              <circle cx="8" cy="11" r="3.2" />
              <circle cx="13.5" cy="7" r="3.4" />
              <circle cx="19.5" cy="7.5" r="3.4" />
              <circle cx="25" cy="12" r="3.2" />
            </g>

            <g transform="translate(205, 100) scale(0.42) rotate(20)" fill="currentColor" fillOpacity="0.75">
              <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" />
              <circle cx="8" cy="11" r="3.2" />
              <circle cx="13.5" cy="7" r="3.4" />
              <circle cx="19.5" cy="7.5" r="3.4" />
              <circle cx="25" cy="12" r="3.2" />
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#cat-pattern-distinct)" />
      </svg>

      {/* 2. Warm Honey-Milk Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-amber-300/35 via-orange-200/25 to-transparent blur-3xl" />
      <div className="absolute top-[28%] -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-amber-400/25 via-yellow-200/30 to-transparent blur-3xl" />
      <div className="absolute bottom-[20%] -left-36 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-orange-300/25 via-amber-200/25 to-transparent blur-3xl" />
      <div className="absolute -bottom-36 right-10 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-amber-300/30 to-transparent blur-3xl" />

      {/* 3. Floating Animated Glowing Paws Rising in Background Gutters */}
      <div className="absolute left-[2%] top-[18%] animate-float-paw-1 opacity-50 text-amber-800">
        <svg width="45" height="45" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" />
          <circle cx="8" cy="11" r="3.2" />
          <circle cx="13.5" cy="7" r="3.4" />
          <circle cx="19.5" cy="7.5" r="3.4" />
          <circle cx="25" cy="12" r="3.2" />
        </svg>
      </div>

      <div className="absolute right-[3%] top-[35%] animate-float-paw-2 opacity-50 text-amber-800">
        <svg width="52" height="52" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" />
          <circle cx="8" cy="11" r="3.2" />
          <circle cx="13.5" cy="7" r="3.4" />
          <circle cx="19.5" cy="7.5" r="3.4" />
          <circle cx="25" cy="12" r="3.2" />
        </svg>
      </div>

      <div className="absolute left-[3%] top-[65%] animate-float-paw-3 opacity-45 text-amber-800">
        <svg width="42" height="42" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" />
          <circle cx="8" cy="11" r="3.2" />
          <circle cx="13.5" cy="7" r="3.4" />
          <circle cx="19.5" cy="7.5" r="3.4" />
          <circle cx="25" cy="12" r="3.2" />
        </svg>
      </div>

      <div className="absolute right-[2%] top-[80%] animate-float-paw-1 opacity-50 text-amber-800">
        <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 16 C10 16 6 22 16 30 C26 22 22 16 16 16 Z" />
          <circle cx="8" cy="11" r="3.2" />
          <circle cx="13.5" cy="7" r="3.4" />
          <circle cx="19.5" cy="7.5" r="3.4" />
          <circle cx="25" cy="12" r="3.2" />
        </svg>
      </div>

      {/* 4. Large Artistic Cat Murals on Desktop Gutters */}
      {/* Left Gutter: Peeking Cute Curious Kitten */}
      <div className="hidden xl:block absolute top-[24%] -left-6 opacity-[0.14] text-amber-950 pointer-events-none transform -rotate-12 transition-transform duration-500 hover:rotate-0">
        <svg width="180" height="220" viewBox="0 0 100 120" fill="currentColor">
          {/* Peeking Head */}
          <circle cx="50" cy="55" r="35" fillOpacity="0.25" stroke="currentColor" strokeWidth="4" />
          {/* Big Cute Ears */}
          <polygon points="25,32 12,5 42,22" stroke="currentColor" strokeWidth="3" />
          <polygon points="75,32 88,5 58,22" stroke="currentColor" strokeWidth="3" />
          {/* Big Anime Eyes */}
          <ellipse cx="38" cy="52" rx="7" ry="9" fill="currentColor" className="animate-eye-blink" />
          <ellipse cx="62" cy="52" rx="7" ry="9" fill="currentColor" className="animate-eye-blink" />
          <circle cx="40" cy="50" r="2.5" fill="#fff" />
          <circle cx="64" cy="50" r="2.5" fill="#fff" />
          {/* Cute Nose and W-Mouth */}
          <polygon points="48,64 52,64 50,67" fill="currentColor" />
          <path d="M50 67 Q44 73 38 70 M50 67 Q56 73 62 70" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          {/* Whiskers */}
          <line x1="26" y1="62" x2="2" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="69" x2="3" y2="72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="74" y1="62" x2="98" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="74" y1="69" x2="97" y2="72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Two Little Paws clinging to the side */}
          <ellipse cx="30" cy="94" rx="12" ry="9" fill="currentColor" fillOpacity="0.8" />
          <ellipse cx="70" cy="94" rx="12" ry="9" fill="currentColor" fillOpacity="0.8" />
        </svg>
      </div>

      {/* Right Gutter: Playful Cat with Wagging Tail */}
      <div className="hidden xl:block absolute top-[52%] -right-6 opacity-[0.14] text-amber-950 pointer-events-none transform rotate-6">
        <svg width="200" height="200" viewBox="0 0 120 120" fill="currentColor">
          {/* Body */}
          <path d="M40 70 C40 45 60 40 75 55 C90 70 85 95 65 95 C45 95 40 85 40 70 Z" fillOpacity="0.25" stroke="currentColor" strokeWidth="4" />
          {/* Head */}
          <circle cx="75" cy="45" r="22" stroke="currentColor" strokeWidth="4" />
          <polygon points="68,26 62,8 80,24" />
          <polygon points="82,26 95,8 88,28" />
          {/* Eyes & Smile */}
          <path d="M68 44 Q72 38 76 44 M80 44 Q84 38 88 44" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Front Paws */}
          <ellipse cx="60" cy="92" rx="10" ry="7" />
          <ellipse cx="80" cy="92" rx="10" ry="7" />
          {/* Animated Tail Wagging */}
          <path 
            d="M42 80 C26 80 15 65 20 45 C23 35 32 30 28 22" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="animate-tail-wag"
          />
        </svg>
      </div>

      {/* 5. Interactive Peeking Mascot Cat Button (Bottom-Right Corner, pointer-events-auto) */}
      <div className="fixed bottom-20 right-5 z-40 pointer-events-auto">
        <button
          type="button"
          onClick={handleMascotClick}
          title="Chào bạn! Bấm vào mèo cưng PurrSafe"
          className="group relative flex items-center justify-center p-2 rounded-full bg-white/95 backdrop-blur-md shadow-xl border-2 border-amber-300 hover:border-amber-500 hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none"
        >
          {/* Mascot Icon */}
          <div className="w-11 h-11 relative flex items-center justify-center text-amber-800">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-9 h-9">
              <circle cx="50" cy="50" r="38" fill="#FDF8F0" stroke="#B45309" strokeWidth="5" />
              {/* Ears */}
              <polygon points="26,30 16,8 42,22" fill="#F59E0B" stroke="#B45309" strokeWidth="4" />
              <polygon points="74,30 84,8 58,22" fill="#F59E0B" stroke="#B45309" strokeWidth="4" />
              {/* Eyes */}
              <circle cx="38" cy="48" r="5" fill="#78350F" className={clickedCat ? '' : 'animate-eye-blink'} />
              <circle cx="62" cy="48" r="5" fill="#78350F" className={clickedCat ? '' : 'animate-eye-blink'} />
              {/* Heart Nose */}
              <polygon points="47,58 53,58 50,62" fill="#DC2626" />
              {/* Smile */}
              <path d="M50 62 Q45 68 40 65 M50 62 Q55 68 60 65" fill="none" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
              {/* Blushing cheeks */}
              <circle cx="28" cy="58" r="5" fill="#FCA5A5" />
              <circle cx="72" cy="58" r="5" fill="#FCA5A5" />
            </svg>
            {/* Purr pulse badge */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500" />
            </span>
          </div>

          {/* Tooltip on hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-stone-900/90 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            🐾 Meow! Cát thơm hương sữa PurrSafe
          </div>
        </button>
      </div>

      {/* Floating Click Hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{ left: `${h.x}px`, top: `${h.y}px` }}
          className="fixed pointer-events-none text-rose-500 text-xl font-bold animate-ping z-50 select-none"
        >
          🐾 Meow!
        </div>
      ))}
    </div>
  );
};
