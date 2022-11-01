import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DrawerIcon } from 'assets/svg/bar-3.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { Label, AvatarName } from 'styles';
import { OFFLINE_LIST, ONLINE_LIST, OWNER } from 'api/mock/community';
import { Drawer } from 'antd';

const DrawerLayout: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = React.useState(false);

  const onClose = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      <FixedHeader className={'wrap-list'}>
        <DrawerIcon onClick={() => setOpenMenu(true)} />
        <h2>NFT World by justin</h2>
      </FixedHeader>
      <StyledDrawer>
        <Drawer
          width={'70%'}
          title={
            <div className={'header'}>
              <p className={'icon-hash'}>#</p>
              <p className={'title'}>announcements</p>
            </div>
          }
          headerStyle={{ borderBottom: 'none', fontSize: 18 }}
          placement="right"
          onClose={onClose}
          visible={openMenu}
          closable={false}
        >
          <Label label={'owner'}>
            <StyledAvatarName>
              <AvatarName gap={7} dot={true} avatar={OWNER.avatar} name={OWNER.name} />
            </StyledAvatarName>
          </Label>
          <Label label={'Online'}>
            <StyledAvatarName>
              {ONLINE_LIST.map((item: any, idx: number) => (
                <AvatarName gap={7} onClick={() => navigate(`/message/direct/${item.name}`)} key={idx} dot={true} avatar={item.avatar} name={item.name} />
              ))}
            </StyledAvatarName>
          </Label>
          <Label label={'Offline'}>
            <StyledAvatarName>
              {OFFLINE_LIST.map((item: any, idx: number) => (
                <AvatarName gap={7} key={idx} dot={false} avatar={item.avatar} name={item.name} />
              ))}
            </StyledAvatarName>
          </Label>
        </Drawer>
      </StyledDrawer>
      {children}
    </div>
  );
};

export default DrawerLayout;

const FixedHeader = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding: 9px 20px;
  background-color: #fff;
  z-index: 99;

  & > h2 {
    margin-left: 18px;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
  }
`;

const StyledDrawer = styled.div`
  .ant-drawer-header {
    border-bottom: none;
  }

  .ant-drawer-title {
    .header {
      .icon-hash {
        font-weight: 900;
        font-size: 26px;
        line-height: 26px;
        color: #000000;
      }

      .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        color: #000000;
      }
    }
  }
`;

const StyledAvatarName = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    position: relative;
    padding: 6px 20px;
  }

  & > div:active {
    background: rgba(0, 0, 0, 0.1);

    &::after {
      content: '';
      position: absolute;
      right: 20px;
      top: 14px;
      width: 15px;
      height: 15px;
      background: url('https://user-images.githubusercontent.com/45615584/169661870-f13b02a2-1f7c-4eae-9f76-cb71b46642ab.png') no-repeat center center;
      background-size: contain;
    }
  }
`;
