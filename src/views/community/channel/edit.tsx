import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as SelectPictureIcon } from 'assets/svg/select_picture.svg';
import { ReactComponent as SelectChannelIcon } from 'assets/svg/select_channel.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/downArrow2.svg';
import { ReactComponent as HashIcon } from 'assets/svg/hash.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { getBase64 } from 'utils';
import { Collapse, Switch, Upload } from 'antd';
import { Button, Input, Label, Link } from 'styles';
import ModalLayout from 'layouts/ModalLayout';
import { CHANNEL_EDIT } from 'api/mock/community';

const CommunityChannelEditView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Panel } = Collapse;
  const nameRef: any = React.useRef(null);
  const [isNotification, setIsNotification] = React.useState(true);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isUploading2, setIsUploading2] = React.useState(false);
  const [resultData, setResultData]: any = React.useState({ ctg: '', profile: '', channel: '', name: '' });
  const ProfileUpload = isUploading ? <LoadingOutlined /> : <SelectPictureIcon />;
  const ChannelUpload = isUploading ? <LoadingOutlined /> : <SelectChannelIcon />;

  const { cname } = CHANNEL_EDIT;

  const handleProfileChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setIsUploading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl: React.SetStateAction<null>) => {
        setResultData({ ...resultData, profile: imageUrl });
        setIsUploading(false);
      });
    }
  };

  const handleChannelChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setIsUploading2(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl: React.SetStateAction<null>) => {
        setResultData({ ...resultData, channel: imageUrl });
        setIsUploading2(false);
      });
    }
  };

  const Header = () => {
    return (
      <StyledHeader>
        <HashIcon />
        <p>Welcome to {cname}</p>
      </StyledHeader>
    );
  };

  const handleNotification = (checked: boolean) => {
    setIsNotification(!checked);
  };

  return (
    <ModalLayout title={'Channel Edit'}>
      <Wrap>
        <StyledProfileUpload dark>
          <Upload
            className="channel-uploader"
            name={'channel-banner'}
            listType={'picture-card'}
            showUploadList={false}
            action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
            onChange={(info: any) => handleChannelChange(info)}
          >
            {resultData.channel ? <img src={resultData.channel} /> : ChannelUpload}
          </Upload>
          <div className={'desc'}>
            Profile Icon
            <br /> We recommend an image of at least 800x800px.
          </div>
        </StyledProfileUpload>

        <StyledProfileUpload>
          <Upload
            className="avatar-uploader"
            name={'avatar'}
            listType={'picture-card'}
            showUploadList={false}
            action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
            onChange={(info: any) => handleProfileChange(info)}
          >
            {resultData.profile ? <img src={resultData.profile} /> : ProfileUpload}
          </Upload>
          <div className={'desc'}>
            Profile Icon
            <br /> We recommend an image of at least 800x800px.
          </div>
        </StyledProfileUpload>

        <Label label={'channel name'}>
          <Input preValue={cname} ref={nameRef} bar={false} onChange={() => setResultData({ ...resultData, name: nameRef?.current.getValue() })} />
          <Link to={'/'}>By creating a group, you agree to nftmoa’s Community guidelines.</Link>
        </Label>

        <Label label={'System First Message by Group'}>
          <Collapse defaultActiveKey={['1']} expandIcon={() => <DownArrowIcon />} expandIconPosition={'right'}>
            <Panel header={<Header />} key="1">
              <Textbox>Welcome to {cname}. This is your brand new, shiny channel, Here are some steps to help you get started. For more, Check out our Getting Started guide</Textbox>
            </Panel>
          </Collapse>
        </Label>

        <Label label={'notification'}>
          <StyledSwitch>
            <Switch defaultChecked={isNotification} onChange={handleNotification} />
          </StyledSwitch>
        </Label>

        <StyledButton>
          <Button rect full color={'border'} text={'OK'} />
        </StyledButton>
      </Wrap>
    </ModalLayout>
  );
};

export default CommunityChannelEditView;

const Wrap = styled.div`
  .nftmoa-link {
    margin-top: 10px;
    padding-left: 14px;
  }

  .nftmoa-label-container {
    padding: 10px 20px;
  }

  .ant-collapse {
    border: none;
    background: transparent;

    .ant-collapse-item {
      border: none;
    }

    .ant-collapse-header {
      background: transparent;
      border: none;
    }

    .ant-collapse-content {
      border: none;
    }
  }
`;

const FixedHeader = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 20px;
  z-index: 99;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }
`;

const StyledProfileUpload = styled.div<{ dark?: boolean }>`
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${p => p.dark && `background:#000;`}

  .avatar-uploader,
  .channel-uploader {
    width: 80px;
    height: 80px;
    margin-right: 36px;
    .ant-upload.ant-upload-select-picture-card {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;

      &:hover {
        border: none;
      }
    }
  }

  .desc {
    color: ${p => (p.dark ? '#fff' : '#6f6f6f')};
    word-break: keep-all;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

const Textbox = styled.div`
  background: #f9f9f9;
  border: 1px solid #e6e8ec;
  border-radius: 12px;
  padding: 10px 17px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    margin-left: 5px;
    font-weight: 900;
    font-size: 12px;
    line-height: 26px;
    color: #000000;
  }
`;

const StyledButton = styled.div`
  padding: 30px 20px;
`;

const StyledSwitch = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: -30px;
    right: 20px;
  }
`;
