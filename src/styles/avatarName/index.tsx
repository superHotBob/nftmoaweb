import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar, Badge } from 'antd';

const AvatarNameStyles: React.FC<any> = ({ avatar, w, h, dotW = 12, dotH = 12, size = 'default', gap, dot, name, desc, ...props }: any) => {
  return (
    <AvatarName {...props} gap={gap} dotW={dotW} dotH={dotH} w={w} h={h}>
      <Badge dot={dot}>
        <Avatar src={avatar} size={size} />
      </Badge>
      {name && (
        <div className={'wrap-name'}>
          <Name>{name}</Name>
          {desc && <Desc>{desc}</Desc>}
        </div>
      )}
    </AvatarName>
  );
};

export default AvatarNameStyles;

const AvatarName = styled.div<{ gap?: number; dotW?: number; dotH?: number; w?: number; h?: number }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  .ant-badge-dot {
    width: ${p => p.dotW}px;
    height: ${p => p.dotH}px;
    top: auto;
    bottom: -6px !important;
    right: 5px;
    background: #00ff66;
    border: 1px solid #bababa;
  }

  .ant-avatar-image {
    ${p => p.w && `width: ${p.w}px;`}
    ${p => p.h && `height: ${p.h}px;`}
  }

  .wrap-name {
    ${p => p.gap && `margin-left: ${p.gap}px;`}
  }
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  color: #000000;
`;

const Desc = styled.div`
  margin-top: 3px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
