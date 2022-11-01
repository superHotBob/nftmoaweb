import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as PlusIcon } from 'assets/svg/plus.svg';
import { BOARD_DETAIL } from 'api/mock/community';
import { ReactComponent as MoreDotIcon } from 'assets/svg/more-dot.svg';
import { Button, Input, Label, Link, WrapButton } from 'styles';
import APIService from 'api/index';
import InviteProfile from 'components/inviteProfile';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Switch } from 'antd';
import { GroupItem } from './components';
import DefaultLayout from '../layout/Default';

const apiService = new APIService();
const CommunityDetailView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { uid } = useParams();
  const nameRef: any = React.useRef();
  const [open, setOpen] = React.useState({ channel: false, group: false });

  const { title, bg, online, members, welcome, group, author, level, profileImage } = BOARD_DETAIL;
  const [resultData, setResultData]: any = React.useState({ ctg: '', profile: '', name: '' });

  const [detailView, setDetailView] = React.useState<any>();

  // const getCommunityView = async () => {
  //   const communityData = await apiService.getCommunityView({ uid });
  //   await apiService.putCommunityCount({ uid });

  //   setDetailView(communityData);
  // };

  // React.useEffect(() => {
  //   getCommunityView();
  // }, []);

  const handleOpen = (v: string) => {
    setOpen({ ...open, [v]: true });
    setResultData({ name: '', private: false });
  };

  const handleClose = () => {
    setOpen({ channel: false, group: false });
    setResultData({ name: '', private: false });
  };

  const onGroupCreate = () => {
    console.log(resultData, 'resultData: group');
    navigate(`/community/group/${resultData.name}`);
  };

  return (
    <DefaultLayout>
      <Wrap>
        <StyledBanner bg={bg}>
          <h2>{title}</h2>
          <ul>
            <li className={'online'}>{online} Online</li>
            <li>{members} Memebers</li>
          </ul>
        </StyledBanner>

        <StyledProfile>
          <div className={'wrap-list header-bar'}>
            <h3>{welcome}</h3>
            <MoreDotIcon className="btn-more" />
          </div>
          <InviteProfile author={author} profileImage={profileImage} level={level} />
          <Button full h={50} rect text={'INVITE'} color={'blue'} />
        </StyledProfile>

        <StyledGroup>
          <div className={'header'}>
            <h3># Group</h3>
            <PlusIcon className={'btn-create'} onClick={() => handleOpen('group')} width={15} height={16} />
          </div>
          {group.map((item, idx) => (
            <GroupItem key={idx} onClick={() => navigate(`/community/group/${item.gid}`)} name={item.name} isPrivate={item.isPrivate} />
          ))}
        </StyledGroup>

        {open.group && (
          <BottomSheet
            open={open.group}
            onDismiss={handleClose}
            header={
              <Header>
                <dt>Create Group</dt>
              </Header>
            }
            footer={<Button rect color={'border'} full={true} text={'CREATE'} onClick={onGroupCreate} />}
            snapPoints={({ minHeight }) => minHeight}
          >
            <StyledForm>
              <Input
                prefix={'#'}
                ref={nameRef}
                bar={false}
                label={'group name'}
                placeholder={'NFT World by justin'}
                onChange={() => setResultData({ ...resultData, name: nameRef?.current.getValue() })}
              />
              <Link className={'link-notice'} to={'/'}>
                By creating a group, you agree to nftmoa’s Community guidelines.
              </Link>

              <Label label={'private'}>
                <StyledSwitch>
                  <Switch defaultChecked={resultData.private} onChange={(c: any) => setResultData({ ...resultData, isPrivate: c })} />
                </StyledSwitch>
              </Label>
            </StyledForm>
          </BottomSheet>
        )}
      </Wrap>
    </DefaultLayout>
  );
};

export default CommunityDetailView;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .wrap-invite-profile {
    margin-bottom: 20px;
  }
`;

const Header = styled.dl`
  text-align: left;
  margin-bottom: 28px;

  dt {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 5px;
    color: #000000;
  }

  dd {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #6f6f6f;
  }
`;

const StyledForm = styled.div`
  padding: 0 20px;

  .link-notice {
    margin-top: 5px;
    margin-bottom: 38px;
  }

  .avatar-uploader {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 20px;

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
`;

const StyledBanner = styled.div<{ bg?: any }>`
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  height: 170px;
  background: url(${p => p.bg}) no-repeat center center;
  ${p => !p.bg && `background: #000;`}
  background-size: 110%;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #fff;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .online {
      position: relative;
      padding-left: 15px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 4px;
        border-radius: 50%;
        background-color: #00ff66;
      }
    }

    & > li {
      position: relative;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      color: #fff;
      padding: 0 10px;

      & + li {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 10px;
          background: #fff;
          opacity: 0.5;
        }
      }
    }
  }
`;

const StyledProfile = styled.div`
  padding: 0 20px 20px;
  .header-bar {
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;

    h3 {
      font-weight: 800;
      font-size: 18px;
      line-height: 22px;
      color: #000000;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-right: 10px;
    }

    .btn-more {
      min-width: 18px;
      margin-bottom: 10px;
    }
  }
`;

const StyledGroup = styled.div`
  border-top: 1px solid #eaeaea;
  background-color: #f9f9f9;
  padding: 28px 20px;

  .header {
    position: relative;

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 12px;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 25px;
    }

    .btn-create {
      position: absolute;
      right: 0;
      top: -1px;
    }
  }
`;

const StyledSwitch = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: -30px;
    right: 20px;
  }
`;
