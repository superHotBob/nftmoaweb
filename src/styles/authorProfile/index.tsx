import React from 'react';
import { ReactComponent as Badge } from 'assets/svg/certBadge.svg';
import styled, { css } from 'styled-components';

const AuthorProfileStyles: React.FC<any> = ({ icon, iconW, iconH, mark = true, ...props }: any) => {
  return (
    <AuthorProfile {...props}>
      <img className="img-icon" src={icon} style={{ borderRadius: 50, width: iconW ? iconW : 50, height: iconH ? iconH : 50 }} />
      {mark && <Badge width={iconW ? iconW : 20} height={iconH ? iconH : 20} style={{ position: 'absolute', right: 0, bottom: 0 }} />}
    </AuthorProfile>
  );
};

export default AuthorProfileStyles;

const AuthorProfile = styled.div`
  position: relative;
`;
