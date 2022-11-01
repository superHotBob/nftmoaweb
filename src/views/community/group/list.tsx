import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as HashIcon } from 'assets/svg/hash.svg';
import { ReactComponent as InviteIcon } from 'assets/svg/follow.svg';
import { ListItem, CommentItem, Button, FilterSearch, Label, Link, Input } from 'styles';
import { COMMENT_LIST, GROUP_LIST, INVITE_LIST } from 'api/mock/community';
import { Avatar, Divider } from 'antd';
import { BottomSheet } from 'react-spring-bottom-sheet';
import DrawerLayout from '../layout/Drawer';

const CommunityGroupListView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { gid } = useParams();
  const [me, setMe] = React.useState(true);
  const [openInvite, setOpenInvite] = React.useState(false);
  const [query, setQuery] = React.useState({ filter: 0, text: '' });

  const handleClose = () => {
    setOpenInvite(false);
  };

  return (
    <DrawerLayout>
      <StyledGroup>
        <div className={'header'}>
          <h3># Group</h3>
        </div>
        <ListItem prefix={<HashIcon />} suffix={<InviteIcon />} key={0} title={`Welcome to ${GROUP_LIST.name}`} />
      </StyledGroup>

      <StyledComment>
        <Divider plain>May 5, 2022</Divider>
        {COMMENT_LIST.map((item: any, idx: number) =>
          item.type === 'WELCOME' ? (
            <>
              <CommentItem
                key={idx}
                name={item.name}
                avatar={item.avatar}
                content={
                  <>
                    <p>
                      Welcome to ${GROUP_LIST.name}. This is your brand new, shiny channel, Here are some steps to help you get started. For more, Check out our{' '}
                      <Link to="/">Getting Started guide</Link>
                    </p>
                  </>
                }
                timestamp={item.timestamp}
              />
              {me ? (
                <StyledButton>
                  <Button onClick={() => setOpenInvite(true)} color={'black'} rect full h={50} fontSize={12} text={'Invite your friends'} />
                  <Button onClick={() => navigate(`/community/channel/edit/${gid}`)} color={'black'} rect full h={50} fontSize={12} text={'Personalize your channel with an icon'} />
                  <Button color={'black'} rect full h={50} fontSize={12} text={'Send your first message'} />
                </StyledButton>
              ) : (
                <StyledButton>
                  <Button rect color={'black'} h={40} fontSize={12} text={'Verify'} />
                </StyledButton>
              )}
            </>
          ) : (
            <>
              <CommentItem key={idx} name={item.name} avatar={item.avatar} content={item.content} timestamp={item.timestamp} />
            </>
          )
        )}
      </StyledComment>

      {/* TODO: Comment editor 추가 */}
      <BottomSheet open={true} scrollLocking={false} blocking={false}>
        <Input />
      </BottomSheet>

      {openInvite && (
        <BottomSheet
          open={openInvite}
          onDismiss={handleClose}
          header={
            <Header>
              <dt>Invite friends</dt>
              <dd># Welcome to {GROUP_LIST.name}</dd>
            </Header>
          }
          snapPoints={({ minHeight }) => minHeight}
        >
          <StyledSearch>
            <FilterSearch className="search" rect placeholder={'MOA_'} query={query} setQuery={setQuery} />
          </StyledSearch>

          <InviteList>
            {INVITE_LIST.map((item, idx) => (
              <ListItem key={idx} prefix={<Avatar src={item.avatar} />} title={item.name} suffix={<Button h={30} w={100} fontSize={12} rect color={'blue'} text={'INVITE'} />} />
            ))}
          </InviteList>

          <StyledCopy>
            <Label label={'send a channel invite link to a friend'}>
              <Copy>
                <p>https://nftmoa/io/s6SsS5Wv</p>
                <Button color={'black'} w={80} h={30} text={'COPY'} fontSize={10} rect />
              </Copy>
              <Link className={'link-expire'} to={'/'}>
                Your invite link expires in 7 days.
              </Link>
            </Label>
          </StyledCopy>
        </BottomSheet>
      )}
    </DrawerLayout>
  );
};

export default CommunityGroupListView;

const StyledCopy = styled.div`
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  .link-expire {
    padding-left: 10px;
  }
`;

const StyledGroup = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 28px 20px;

  .header {
    position: relative;

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 12px;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 14px;
    }

    .btn-create {
      position: absolute;
      right: 0;
      top: -1px;
    }
  }
`;

const StyledComment = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 9px 20px;
  background: #f9f9f9;
  position: relative;

  .ant-comment-actions {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;

    & > li {
      cursor: pointer;
    }
  }

  .ant-divider-inner-text {
    font-weight: 400;
    font-size: 10px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.5);
  }

  .ant-divider-plain.ant-divider-with-text {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const StyledButton = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled.dl`
  text-align: left;
  margin-bottom: 13px;

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

const StyledSearch = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
`;

const InviteList = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;

  .list-title {
    font-weight: 600;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-left: 15px;
  background: #f9f9f9;
  border: 1px solid #e6e8ec;
  border-radius: 12px;
  margin-bottom: 10px;

  & > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 26px;
    color: #000000;
  }
`;
