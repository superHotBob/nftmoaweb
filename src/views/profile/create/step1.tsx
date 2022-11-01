import React from 'react';
import styled from 'styled-components';
import { Upload, Button as UploadButton } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { ReactComponent as CameraIcon } from 'assets/svg/camera.svg';
import { ReactComponent as GalleryIcon } from 'assets/svg/gallery.svg';
import { ReactComponent as UploadIcon } from 'assets/svg/upload.svg';
import { Button, WrapIcon } from 'styles';
import { useNavigate } from 'react-router-dom';
import GalleryItemComponent from 'components/GalleryItem';
const FollowListItemComponent: React.FC<any> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');
  const [galleryList, setGalleryList] = React.useState<any>([
    {
      uid: '0',
      status: 'done',
      url: 'https://lh3.googleusercontent.com/KhHIVlusXfzP1Ns65IsT6hpngYMLJzHQWj1BbvPHsxToWLWsmzrgQXB95flYTuve8xynAQW2X69YKsUKXEns30YOfGu9DcbR-XL_nH0=w600',
      thumbUrl: 'https://lh3.googleusercontent.com/KhHIVlusXfzP1Ns65IsT6hpngYMLJzHQWj1BbvPHsxToWLWsmzrgQXB95flYTuve8xynAQW2X69YKsUKXEns30YOfGu9DcbR-XL_nH0=w600'
    },
    {
      uid: '1',
      status: 'done',
      url: 'https://lh3.googleusercontent.com/Pv2fmcbu5dKaxATq6FIHjQsnerLg2qOehLKU3FSAE-U-xDY7rqhv_QSBjPtChb495jPeKAqwuTsTJwiG4IK_Mb7xxuZXKl9IUGJJxA=w325',
      thumbUrl: 'https://lh3.googleusercontent.com/Pv2fmcbu5dKaxATq6FIHjQsnerLg2qOehLKU3FSAE-U-xDY7rqhv_QSBjPtChb495jPeKAqwuTsTJwiG4IK_Mb7xxuZXKl9IUGJJxA=w325'
    },
    {
      uid: '3',
      status: 'done',
      url: 'https://lh3.googleusercontent.com/Pv2fmcbu5dKaxATq6FIHjQsnerLg2qOehLKU3FSAE-U-xDY7rqhv_QSBjPtChb495jPeKAqwuTsTJwiG4IK_Mb7xxuZXKl9IUGJJxA=w325',
      thumbUrl: 'https://lh3.googleusercontent.com/5LpUuGmEpAdPa_Rx2jOLGQiSH7G074QB9772iIr4zYOFfklfV4MMRZt-uNtZDrEvOs7DMeb3LY3rrZbx9tvp6Qa6q2LuuZ3usfpo=w277'
    }
  ]);

  const handleCamera = () => {};
  const handleGallery = () => {};

  return (
    <Wrap>
      <dl>
        <dt>1</dt>
        <dd>
          <h2>Upload File</h2>
          <p>Choose your file to upload</p>
        </dd>
      </dl>

      <StyledUpload>
        <Upload action="'//jsonplaceholder.typicode.com/posts/'">
          <UploadButton
            icon={
              <div>
                <WrapIcon w={60} h={60}>
                  <UploadIcon />
                </WrapIcon>
                <p>PNG, GIF, WEBP, MP4 or ....</p>
              </div>
            }
          />
        </Upload>
      </StyledUpload>

      <StyledGalleryList>
        <ul>
          <li>
            <Upload capture="environment" accept="image/*" action="'//jsonplaceholder.typicode.com/posts/'">
              <CameraIcon />
            </Upload>
          </li>
          <li>
            <Upload>
              <GalleryIcon />
            </Upload>
          </li>
          {galleryList.map((item: any, idx: number) => (
            <GalleryItemComponent key={idx} {...item} />
          ))}
        </ul>
      </StyledGalleryList>
      <Button color="border" full radius={10} text="NEXT" h={52} onClick={() => navigate('/profile/create/step2')} />
    </Wrap>
  );
};

export default FollowListItemComponent;

const Wrap = styled.div`
  padding: 20px;

  dl {
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: flex-start;
    margin-bottom: 20px;

    dt {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      color: #fff;
      border-radius: 50%;
      font-weight: 600;
      font-size: 12px;
      text-align: center;
      margin-right: 15px;
    }
    dd {
      h2 {
        font-weight: 700;
        font-size: 16px;
        letter-spacing: -0.01em;
        color: #000000;
        margin-bottom: 4px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        letter-spacing: 0.01em;
        color: #6f6f6f;
      }
    }
  }
`;

const StyledUpload = styled.div`
  margin-bottom: 16px;

  .ant-upload {
    width: 100%;
    height: 335px;
    margin-bottom: 30px;

    .ant-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #ffffff;
      border: 1px solid #efefef;
      box-sizing: border-box;
      box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.1);
      border-radius: 17px;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > p {
          margin-top: 21px;
          font-weight: 500;
          font-size: 12px;
          line-height: 19px;
          text-align: center;
          letter-spacing: 0.01em;
          color: #6f6f6f;
        }
      }
    }
  }
`;

const StyledGalleryList = styled.div`
  margin-bottom: 16px;

  & > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 13px;
    flex-wrap: wrap;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 74px;
      width: 74px;
      flex-shrink: 0;
      height: 74px;
      border-radius: 10px;
      overflow: hidden;
      background: #ab3fff;
    }
  }
`;
