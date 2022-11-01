import React from 'react';
import styled from 'styled-components';
import { ReactComponent as QRcode } from 'assets/svg/qrcode.svg';
import { ReactComponent as FullIcon } from 'assets/svg/view-full.svg';
import { ReactComponent as CardIcon } from 'assets/svg/view-card.svg';
import { ReactComponent as ListIcon } from 'assets/svg/view-list.svg';
import { Link, useNavigate } from 'react-router-dom';
import CreateWalletStep1 from 'views/wallet/create/agree';
import { Button, FixedButton, ProfileImage, PublicKey, Tab, WrapButton, WrapIcon } from 'styles';
import { MY_WALLET } from 'api/mock/wallet';
import numeral from 'numeral';
import TokenItemComponent from 'components/tokenItem';
import { MY_NFT_LIST } from 'api/mock/nft';
import NftsItem from 'components/nftsItem';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import { BottomSheet } from 'react-spring-bottom-sheet';
import temp_line_chart from 'assets/temp/temp_line_chart.png';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';

const MoaWalletView: React.FC<any> = () => {
  const navigate = useNavigate();
  const [dmCount, setDmCount] = React.useState(99);
  const [open, setOpen] = React.useState(false);
  const [date, setDate]: any = React.useState('day');
  const [hasWallet, setHasWallet] = React.useState(true);
  const [activeTab1, setActiveTab1] = React.useState('Buy');
  const [activeTab2, setActiveTab2] = React.useState('TOKENS');
  const [viewType, setViewType] = React.useState('full');
  const { profileImage, publicKey, totalPrice, tokens } = MY_WALLET;
  const handleNavigate = (v: string): string => {
    switch (v) {
      case 'Swap':
        return '/wallet/token/swap';

      default:
        return '/wallet/token/buy';
    }
  };

  const mapping: any = {
    day: '1 Day Ago',
    week: 'Last Week',
    month: 'Last Month'
  };

  const handleSelect = (v: string) => {
    setDate(v);
    setOpen(false);
  };

  if (!hasWallet) return <CreateWalletStep1 />;

  return (
    <Wrap>
      <RightMenu dmCount={dmCount}>
        <WrapIcon onClick={() => navigate('/message')} className={'mailbox'} w={48} h={48}>
          <MailIcon />
        </WrapIcon>
        <WrapIcon w={48} h={48}>
          <QRcode />
        </WrapIcon>
      </RightMenu>

      <MyWallet>
        <ProfileImage image={profileImage} />
        <PublicKey address={publicKey} style={{ marginBottom: 15 }} />
        <h2>${numeral(totalPrice).format('0,00')}</h2>
      </MyWallet>

      <Tab wrap active={activeTab1}>
        <Tab.Item value="Receive" onClick={() => setActiveTab1('Receive')} />
        <Tab.Item value="Buy" onClick={() => setActiveTab1('Buy')} />
        <Tab.Item value="Send" onClick={() => setActiveTab1('Send')} />
        <Tab.Item value="Swap" onClick={() => setActiveTab1('Swap')} />
      </Tab>

      <Tab wrap shape={'bar'} active={activeTab2}>
        <Tab.Item value="TOKENS" onClick={() => setActiveTab2('TOKENS')} />
        <Tab.Item value="NFTs" onClick={() => setActiveTab2('NFTs')} />
      </Tab>

      {activeTab2 === 'TOKENS' && (
        <TokenList>
          {tokens.map((item, idx) => (
            <TokenItemComponent key={idx} iconUrl={item.logoUrl} amount={item.amount} price={item.price} crypto={item.symbol} />
          ))}
          <Notice>
            <p> Don’t see your token?</p>
            <Link to="/wallet/token/import">Add your token</Link>
          </Notice>
        </TokenList>
      )}

      {activeTab2 === 'NFTs' && (
        <NftList>
          <div className={'wrap-select'}>
            <StyledSelect onClick={() => setOpen(true)}>
              <Select>{mapping[date]}'s Activities</Select>
              <SelectDownArrowIcon />
            </StyledSelect>
          </div>

          <ControlView>
            <FullIcon className={viewType === 'full' ? 'active' : undefined} onClick={() => setViewType('full')} />
            <CardIcon className={viewType === 'card' ? 'active' : undefined} onClick={() => setViewType('card')} />
            <ListIcon className={viewType === 'list' ? 'active' : undefined} onClick={() => setViewType('list')} />
          </ControlView>

          <img src={temp_line_chart} />

          {MY_NFT_LIST[`${date}`].map((item: any, idx: number) => (
            <NftsItem key={idx} {...item} type={viewType} />
          ))}
        </NftList>
      )}

      <BottomSheet className={'wrap-option'} open={open} onDismiss={() => setOpen(false)} snapPoints={({ minHeight }) => minHeight}>
        <ul>
          <li onClick={() => handleSelect('day')}>1 Day Ago</li>
          <li onClick={() => handleSelect('week')}>Last Week</li>
          <li onClick={() => handleSelect('month')}>Last Month</li>
        </ul>
      </BottomSheet>
    </Wrap>
  );
};

export default MoaWalletView;

const ControlView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 23px 0;

  & > svg {
    margin-left: 15px;
  }

  .active {
    rect {
      stroke-opacity: 1;
    }

    path {
      fill-opacity: 1;
    }
  }
`;

const NftList = styled.div`
  padding: 0 21px;
  padding-bottom: 20px;
`;

const Wrap = styled.div`
  .nftmoa-tab-container {
    margin-top: 44px;
  }

  .wrap-select {
    margin-top: 20px;
  }
`;

const RightMenu = styled.button<{ dmCount?: number }>`
  position: absolute;
  top: -59px;
  right: 20px;
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > div {
    margin-left: 5px;
  }

  .mailbox {
    position: relative;

    &::after {
      content: '${p => p.dmCount}';
      position: absolute;
      top: 0;
      right: -5px;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background-color: #000;
      color: #fff;
      font-weight: 700;
      font-size: 10px;
      display: ${p => (p.dmCount! > 0 ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;
    }
  }
`;

const MyWallet = styled.div`
  text-align: center;
  margin-top: 13px;
  margin-bottom: 29px;

  & > h2 {
    font-weight: 700;
    font-size: 30px;
    color: #000000;
  }
`;

const TokenList = styled.div``;
const Notice = styled.div`
  margin: 56px 0 34px;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  color: #6f6f6f;
  text-align: center;

  & > a {
    text-decoration: underline;
  }
`;

const StyledButton = styled.div`
  padding: 0 20px 30px;
`;

const StyledSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  background: #f9f9f9;
  padding: 9px 15px;
  border-radius: 9px;

  svg {
    path {
      stroke: #000;
    }
  }
`;

const Select = styled.div`
  flex: 1;
  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;
