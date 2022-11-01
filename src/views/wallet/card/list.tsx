import React from 'react';
import { Collapse, Switch } from 'antd';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/downArrow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { CARD_LIST } from 'api/mock/wallet';
import CreditCardItem from 'components/CreditCardItem';
import ScrollWrap from 'components/common/slideWrap';
import { Button, FixedButton, WrapButton } from 'styles';

const WalletCardListView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <Wrap>
      <Header>
        <h2>Purchase Method</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <StyledCollapse>
        <Collapse defaultActiveKey={['1']} accordion expandIconPosition={'right'} expandIcon={() => <DownArrowIcon className={'icon-open'} />}>
          <Panel header="Credit Card" key="1">
            <CreditCardList>
              <EmptyCardArea />
              <ScrollWrap className={'warp-scroll-cards'}>
                {CARD_LIST.map((item, idx) => (
                  <CreditCardItem key={idx} {...item} />
                ))}
              </ScrollWrap>
            </CreditCardList>

            <StyledAddCard>
              <Link to="/wallet/register/card">+ Add new card</Link>
            </StyledAddCard>
          </Panel>
          <Panel
            header={
              <div className="wrap-list">
                <img className={'logo-paypal'} src="https://user-images.githubusercontent.com/45615584/163773340-474e3b66-15fe-4a1b-8262-e14a87700719.png" />
                <span>PayPal</span>
              </div>
            }
            key="2"
          ></Panel>
        </Collapse>
      </StyledCollapse>
      <WrapButton top={108}>
        <StyledSwitch className={'wrap-list s-b'}>
          <p className="label">Send receipt to your email</p>
          <Switch defaultChecked />
        </StyledSwitch>
        <Button color={'border'} full rect text={'CONTINUE'} />
      </WrapButton>
    </Wrap>
  );
};

export default WalletCardListView;

const Wrap = styled.div`
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
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
    color: #000000;
  }
`;

const StyledCollapse = styled.div`
  .ant-collapse-header {
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    background: #fff;
  }

  .ant-collapse-item-active {
    .ant-collapse-header {
      background: #f8fafc;
    }
  }

  .logo-paypal {
    width: 17px;
    height: 17px;
    object-fit: cover;
    margin-right: 12px;
  }

  .icon-open {
    path {
      stroke: #000;
    }
  }
`;

const CreditCardList = styled.div`
  position: relative;
  margin: 35px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .warp-scroll-cards {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 38px;

    & > div {
      gap: 22px;
      padding: 12px;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

const EmptyCardArea = styled.div`
  position: relative;
  width: 310px;
  height: 199px;
  border: 1px dashed #858585;
  border-radius: 17px;
`;

const StyledAddCard = styled.div`
  margin-bottom: 58px;
  text-align: center;

  & > a {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #6f6f6f;
  }
`;

const StyledSwitch = styled.div`
  margin-bottom: 50px;

  & > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    /* or 158% */

    letter-spacing: 0.01em;

    color: #6f6f6f;
  }
`;
