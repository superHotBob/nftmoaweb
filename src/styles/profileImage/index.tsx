import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as EditProfile } from 'assets/svg/editProfile.svg';
import profile_default from 'assets/common/profile_default.png';

const ProfileImageStyles: React.FC<any> = ({ w, h, border, image, unit, ...props }) => {
  const handleImgError = (e: any) => {
    e.target.onerror = null;
    e.target.src = profile_default;
  };

  return (
    <ProfileImage border={border} {...props}>
      <div className="wrap-img">
        <img src={image ? image : profile_default} onError={handleImgError} />
      </div>
      {unit &&
        unit.map((item: any, idx: number) => {
          if (item === 'edit')
            return (
              <button key={idx} className="btn-edit">
                <EditProfile />
              </button>
            );
        })}
    </ProfileImage>
  );
};

export default ProfileImageStyles;
const defaultBorder = css`
  border: 2px solid #ffffff;
`;
const ProfileImage = styled.div<{ border?: boolean; w?: number; h?: number }>`
  position: relative;
  width: ${p => (p.w ? p.w : '80px')};
  height: ${p => (p.h ? p.h : '80px')};
  margin: 0 auto 17px;

  & div.wrap-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    ${p => p.border && defaultBorder}
  }

  & button.btn-edit {
    position: absolute;
    bottom: 0;
    right: -2px;
  }
`;
