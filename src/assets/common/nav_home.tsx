import React from 'react';

const HomeSvg: React.FC<any> = ({ active, ...props }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {active ? (
        <>
          <path d="M15 7.1125L21.25 12.7375V22.5H18.75V15H11.25V22.5H8.75V12.7375L15 7.1125ZM15 3.75L2.5 15H6.25V25H13.75V17.5H16.25V25H23.75V15H27.5L15 3.75Z" fill="url(#paint0_linear_277_6529)" />
          <defs>
            <linearGradient id="paint0_linear_277_6529" x1="2.5" y1="7.69643" x2="25.9303" y2="24.6156" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000" />
              <stop offset="0.473958" stopColor="#FF00D6" />
              <stop offset="1" stopColor="#001D84" />
            </linearGradient>
          </defs>
        </>
      ) : (
        <path d="M15 7.1125L21.25 12.7375V22.5H18.75V15H11.25V22.5H8.75V12.7375L15 7.1125ZM15 3.75L2.5 15H6.25V25H13.75V17.5H16.25V25H23.75V15H27.5L15 3.75Z" fill="black" fillOpacity="0.5" />
      )}
    </svg>
  );
};

export default HomeSvg;
