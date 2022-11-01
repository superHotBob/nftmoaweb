import React from 'react';

const HomeSvg: React.FC<any> = ({ active, ...props }) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {active ? (
        <>
          <path d="M3.74167 7.6547L13 2.3094L22.2583 7.6547L22.2583 18.3453L13 23.6906L3.74167 18.3453L3.74167 7.6547Z" stroke="url(#paint0_linear_277_7074)" strokeWidth="4" fill="none" />
          <defs>
            <linearGradient id="paint0_linear_277_7074" x1="5.98935e-08" y1="4.82857" x2="26.9286" y2="21.3571" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000" />
              <stop offset="0.473958" stopColor="#FF00D6" />
              <stop offset="1" stopColor="#001D84" />
            </linearGradient>
          </defs>
        </>
      ) : (
        <path d="M3.24167 7.36602L13 1.73205L22.7583 7.36602L22.7583 18.634L13 24.2679L3.24167 18.634L3.24167 7.36602Z" stroke="black" strokeOpacity="0.5" strokeWidth="3" fill="none" />
      )}
    </svg>
  );
};

export default HomeSvg;
