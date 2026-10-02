import React from 'react';

export const VietnamFlag: React.FC<{ className?: string }> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 30 20"
    className={`inline-block rounded-[2px] shadow-2xs border border-stone-300/60 object-cover ${className}`}
    aria-label="Quốc kỳ Việt Nam"
  >
    {/* Red Field */}
    <rect width="30" height="20" fill="#DA251D" />
    {/* Centered Yellow Five-Pointed Star */}
    <polygon
      fill="#FFFF00"
      points="
        15,3.6
        16.8,9.2
        22.7,9.2
        17.9,12.7
        19.7,18.3
        15,14.8
        10.3,18.3
        12.1,12.7
        7.3,9.2
        13.2,9.2
      "
    />
  </svg>
);

export const ChinaFlag: React.FC<{ className?: string }> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 30 20"
    className={`inline-block rounded-[2px] shadow-2xs border border-stone-300/60 object-cover ${className}`}
    aria-label="中国国旗 (Quốc kỳ Trung Quốc)"
  >
    {/* Red Field */}
    <rect width="30" height="20" fill="#DE2910" />
    {/* Large Yellow Star */}
    <polygon
      fill="#FFDE00"
      points="
        5,1.5
        5.9,4.3
        8.8,4.3
        6.5,6.0
        7.4,8.8
        5,7.1
        2.6,8.8
        3.5,6.0
        1.2,4.3
        4.1,4.3
      "
    />
    {/* 4 Small Yellow Stars in Arc */}
    {/* Star 1 */}
    <polygon
      fill="#FFDE00"
      transform="translate(10, 2) rotate(-35)"
      points="0,-0.9 0.3,-0.3 0.9,-0.3 0.4,0.1 0.6,0.7 0,0.3 -0.6,0.7 -0.4,0.1 -0.9,-0.3 -0.3,-0.3"
    />
    {/* Star 2 */}
    <polygon
      fill="#FFDE00"
      transform="translate(12, 4) rotate(-10)"
      points="0,-0.9 0.3,-0.3 0.9,-0.3 0.4,0.1 0.6,0.7 0,0.3 -0.6,0.7 -0.4,0.1 -0.9,-0.3 -0.3,-0.3"
    />
    {/* Star 3 */}
    <polygon
      fill="#FFDE00"
      transform="translate(12, 7) rotate(15)"
      points="0,-0.9 0.3,-0.3 0.9,-0.3 0.4,0.1 0.6,0.7 0,0.3 -0.6,0.7 -0.4,0.1 -0.9,-0.3 -0.3,-0.3"
    />
    {/* Star 4 */}
    <polygon
      fill="#FFDE00"
      transform="translate(10, 9) rotate(35)"
      points="0,-0.9 0.3,-0.3 0.9,-0.3 0.4,0.1 0.6,0.7 0,0.3 -0.6,0.7 -0.4,0.1 -0.9,-0.3 -0.3,-0.3"
    />
  </svg>
);

export const UKFlag: React.FC<{ className?: string }> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 60 30"
    className={`inline-block rounded-[2px] shadow-2xs border border-stone-300/60 object-cover ${className}`}
    aria-label="United Kingdom Flag (Quốc kỳ Vương quốc Anh)"
  >
    <clipPath id="uk-flag-clip">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      {/* Blue field */}
      <rect width="60" height="30" fill="#012169" />
      
      {/* White diagonal saltire (St Andrew's Cross) */}
      <line x1="0" y1="0" x2="60" y2="30" stroke="#FFFFFF" strokeWidth="6" />
      <line x1="60" y1="0" x2="0" y2="30" stroke="#FFFFFF" strokeWidth="6" />
      
      {/* Red diagonal saltire (St Patrick's Cross) */}
      <line x1="0" y1="0" x2="60" y2="30" stroke="#C8102E" strokeWidth="2" />
      <line x1="60" y1="0" x2="0" y2="30" stroke="#C8102E" strokeWidth="2" />
      
      {/* White cross border for St George */}
      <rect x="25" y="0" width="10" height="30" fill="#FFFFFF" />
      <rect x="0" y="10" width="60" height="10" fill="#FFFFFF" />
      
      {/* Red cross of St George */}
      <rect x="27" y="0" width="6" height="30" fill="#C8102E" />
      <rect x="0" y="12" width="60" height="6" fill="#C8102E" />
    </g>
  </svg>
);
