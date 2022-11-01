import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import DirectComponent from '../components/direct';
import CommunityComponent from '../components/community';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Tab } from 'styles';
import { MSG_COMMUNITY_LIST, MSG_DIRECT_LIST } from 'api/mock/community';
import ModalLayout from 'layouts/ModalLayout';

const MessageListView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const [activeTab, setActiveTab] = React.useState(state?.type ? state?.type : 'direct');

  return (
    <ModalLayout title={'Message'}>
      <Wrap>
        <Tab active={activeTab}>
          <Tab.Item value="direct" text="Direct Message" onClick={() => setActiveTab('direct')} />
          <Tab.Item badge={100} value="community" text="Community" onClick={() => setActiveTab('community')} />
        </Tab>

        <MessageList>
          {activeTab === 'direct' && <DirectComponent list={MSG_DIRECT_LIST} />}
          {activeTab === 'community' && <CommunityComponent list={MSG_COMMUNITY_LIST} />}
        </MessageList>
      </Wrap>
    </ModalLayout>
  );
};

export default MessageListView;

const Wrap = styled.div`
  padding-top: 18px;
`;

const MessageList = styled.div`
  padding: 20px;
`;
