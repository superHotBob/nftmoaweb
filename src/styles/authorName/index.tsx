import React from 'react';
import { ReactComponent as Badge } from 'assets/svg/certBadge.svg';
import styled, { css } from 'styled-components';
interface IAuthorName {
  name: string;
  center?: boolean;
  mark?: boolean;
  color?: string;
  fontSize?: number;
  iconW?: number;
  iconH?: number;
}
const AuthorNameStyles: React.FC<IAuthorName> = ({ iconW, iconH, name, fontSize, center, mark = true, color, ...props }: any) => {
  return (
    <AuthorName className={'nftmoa-author-name'} center={center} color={color} iconW={iconW} iconH={iconH} fontSize={fontSize} {...props}>
      {mark && <Badge width={iconW ? iconW : 12} height={iconH ? iconH : 11} />}
      <div className="name">
        <span>{name}</span>
      </div>
    </AuthorName>
  );
};

export default AuthorNameStyles;

const center = css`
  justify-content: center;
`;

const left = css`
  justify-content: flex-start;
`;

const AuthorName = styled.div<{ center?: boolean; color?: string; fontSize?: number; iconW?: number; iconH?: number }>`
  display: flex;
  align-items: center;
  ${p => (p.center ? center : left)}
  margin-bottom: 5px;

  & > div.name {
    margin-left: 3px;
    line-height: 1;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    > span {
      letter-spacing: 0.01em;
      color: ${p => (p.color ? p.color : '#000000')};
      font-weight: 600;
      font-size: ${p => (p.fontSize ? p.fontSize : 10)}px;
    }
  }
`;
