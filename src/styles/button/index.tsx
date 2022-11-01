import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyles: React.FC<any> = ({ w, h, full = false, radius, rect, fontSize, shadow = true, color, onClick, text, ...props }) => {
  const colorset: any = {
    primary: { fontColor: 'rgba(0, 0, 0, 0.5)', backgroundColor: '#fff' },
    blue: { fontColor: '#fff', backgroundColor: '#246dfb' },
    light: { fontColor: '#89929E', backgroundColor: '#F8F9F9' },
    black: { fontColor: '#fff', backgroundColor: '#000' },
    error: { fontColor: '#FF534A', backgroundColor: '#FEE9E9' },
    border: { fontColor: '#000000', backgroundColor: '#fff', border: '3px solid #000', height: '52px', weight: 800 }
  };

  return (
    <Button
      w={w}
      h={h}
      full={full}
      style={{
        background: colorset[color]?.backgroundColor,
        color: colorset[color]?.fontColor,
        border: colorset[color]?.border,
        fontSize: colorset[color]?.fontSize,
        height: colorset[color]?.height,
        fontWeight: colorset[color]?.weight
      }}
      radius={radius}
      shadow={shadow}
      rect={rect}
      onClick={onClick}
      fontSize={fontSize}
      className={'nftmoa-btn'}
      {...props}
    >
      {text}
    </Button>
  );
};

export default ButtonStyles;

const Button = styled.button<{ fontSize?: number; w?: number; h?: number; shadow?: boolean; radius?: number; full?: boolean; rect?: boolean }>`
  width: ${p => (p.w ? p.w : 90)}px;
  width: ${p => p.full && 100}%;
  height: ${p => (p.h ? p.h : 40)}px;
  border: 1px solid #eae9e9;
  border-radius: ${p => (p.radius ? p.radius : 80)}px;
  ${p => p.rect && 'border-radius:10px'};
  box-sizing: border-box;
  ${p => p.shadow && 'box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06)'};
  font-weight: 700;
  font-size: ${p => (p.fontSize ? p.fontSize : 14)}px;
  text-align: center;
`;
