import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CameraIcon } from 'assets/svg/camera.svg';
import { ReactComponent as GalleryIcon } from 'assets/svg/gallery.svg';

const GalleryItemComponent: React.FC<any> = ({ uid, status, url, thumbUrl }) => {
  return <GalleryItem thumbUrl={thumbUrl} />;
};

export default GalleryItemComponent;

const GalleryItem = styled.li<{ thumbUrl?: string }>`
  width: 74px;
  height: 74px;
  border-radius: 10px;
  overflow: hidden;
  background: #ab3fff;
  background: url(${p => p.thumbUrl}) no-repeat center center !important;
  background-size: cover !important;
  object-fit: cover !important;
`;
