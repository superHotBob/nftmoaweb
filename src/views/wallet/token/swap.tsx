import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Label, Price, WrapButton, StepItem, WrapIcon, Tab } from 'styles';
import { ReactComponent as QRcode } from 'assets/svg/qrcode.svg';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import ExchangeIcon from 'assets/svg/exchange.svg';

import { SelectLabel } from 'styles';
import logo from 'assets/common/logo.png';
import { Select } from 'antd';
import { TOKEN_MAPPING_LIST, TOKEN_LIST, CURRENCY_LIST } from 'api/mock/wallet';
import numeral from 'numeral';
import { digit } from 'utils';

const WalletTokenSwapView: React.FC<any> = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('Swap');
  const { Option } = Select;
  const paymentRef: any = React.useRef(null);
  const amountRef: any = React.useRef(null);
  const [inputs, setInputs]: any = React.useState({ select: 'ETH', payment: 0, currency: 'USD', amount: 0, symbol: 'ETH' });

  const handleChangeSelect = (value: string) => {
    setInputs({ ...inputs, currency: value });
  };

  const { curPrice, logoUrl, symbol } = TOKEN_MAPPING_LIST[inputs?.select];

  return (
    <Wrap>
      <ScanQR>
        <WrapIcon w={48} h={48}>
          <QRcode />
        </WrapIcon>
      </ScanQR>

      <StepItem num={1} title={'Exchange'} />

      <Tab wrap active={activeTab}>
        <Tab.Item value="Receive" onClick={() => setActiveTab('Receive')} />
        <Tab.Item value="Send" onClick={() => setActiveTab('Send')} />
        <Tab.Item value="Swap" onClick={() => setActiveTab('Swap')} />
      </Tab>

      <Form>
        <Label label={'Your Balance'}>
          <Price
            price={curPrice}
            iconW={15}
            iconH={26}
            fontSize={30}
            prefix={<span style={{ paddingRight: 10 }}>$</span>}
            suffix={
              <Suffix>
                <img src={logo} />
                <span>MOA Wallet</span>
              </Suffix>
            }
          />
        </Label>

        <Card>
          <div className={'section'}>
            <div className={'section-item wrap-list s-b'}>
              <Input
                last
                type={'tel'}
                ref={paymentRef}
                onChange={() => setInputs({ ...inputs, payment: paymentRef?.current.getValue() })}
                label={'you pay'}
                bar={false}
                prefix={<Prefix>$</Prefix>}
                value={digit(inputs?.payment ?? 0, 0, false, true)}
              />

              <SelectLabel label={'(1 USD = 0.00023 USD)'}>
                <Select suffixIcon={<SelectDownArrowIcon />} bordered={false} defaultValue={inputs.currency} onChange={handleChangeSelect}>
                  {CURRENCY_LIST?.map((item, idx) => (
                    <Option key={idx} value={item?.name}>
                      <div className="wrap-list">
                        <img src={item?.logoUrl} style={{ width: 28, height: 28, marginRight: 5 }} />
                        <span style={{ fontWeight: 700 }}>{item?.name}</span>
                      </div>
                    </Option>
                  ))}
                </Select>
              </SelectLabel>
            </div>
            <div className="section-item wrap-list s-b">
              <Input
                last
                type={'tel'}
                ref={amountRef}
                onChange={() => setInputs({ ...inputs, amount: amountRef?.current.getValue() })}
                bar={false}
                value={digit(inputs?.amount ?? 0, 2, true, false)}
              />
              <SelectLabel>
                <Select suffixIcon={<SelectDownArrowIcon />} bordered={false} defaultValue={inputs.symbol} onChange={handleChangeSelect}>
                  {TOKEN_LIST?.map((item, idx) => (
                    <Option key={idx} value={item?.symbol}>
                      <div className="wrap-list">
                        <img src={item?.logoUrl} style={{ width: 28, height: 28, marginRight: 5 }} />
                        <span style={{ fontWeight: 700 }}>{item?.symbol}</span>
                      </div>
                    </Option>
                  ))}
                </Select>
              </SelectLabel>
            </div>
          </div>
          <div className={'section'}>
            <Label label={'exchange fee'}>
              <div className="wrap-list">
                <p className={'left f16 bold'}>0.08%</p>
                <p className={'right f16 bold'}>$32</p>
              </div>
            </Label>
          </div>

          <div className={'nftmoa-notice t-c'}>
            Click here for <Link to="">Terms & Conditions</Link>
            <br />
            For this transaction fee will be taken
          </div>
        </Card>
      </Form>

      <WrapButton>
        <Button rect color={'border'} text={'CONTINUE'} full onClick={() => navigate('/wallet/card/list')} />
      </WrapButton>
    </Wrap>
  );
};

export default WalletTokenSwapView;

const Wrap = styled.div`
  background-color: #f8fafc;

  .nftmoa-step-container {
    padding: 20px;
  }

  .nftmoa-select-container {
    padding: 0 20px;
    border-bottom: 1px solid #eaeaea;

    .ant-select-selection-item {
      font-size: 16px;
    }
  }

  .nftmoa-price-container {
    & > img {
      margin-right: 10px;
    }
  }

  .ntfmoa-input-container {
    input {
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

const ScanQR = styled.button`
  position: absolute;
  top: -50px;
  right: 20px;
  z-index: 99;
`;

const Form = styled.div`
  padding: 18px 20px;

  .nftmoa-label-container {
    margin-bottom: 15px;
  }
`;

const Suffix = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  & > span {
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    color: #000000;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 17px;
  padding-bottom: 25px;

  & > .section {
    padding: 23px 30px;
  }

  & > .section + .section {
    border-top: 1px solid #eaeaea;
  }

  .section-item {
    position: relative;
    padding: 25px 0;
  }
  .section-item + .section-item {
    border-top: 1px solid #eaeaea;

    &::after {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 40px;
      border: 1px solid #eaeaea;
      border-radius: 50%;
      background: #ffffff;
      background-image: url(${ExchangeIcon});
      background-size: 18px 23px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .ntfmoa-input-container {
    width: 50%;
    padding-right: 10px;
  }

  .nftmoa-select-container {
    width: 50%;
    padding: 0;
    border-bottom: none;
  }

  .ant-select-selection-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;

    & > img {
      width: 28px;
      height: 28px;
    }
  }

  table {
    th {
      text-align: left;
      padding-bottom: 10px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }

    td {
      padding-bottom: 10px;
      text-align: right;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
    }
  }
`;

const Prefix = styled.div`
  padding-right: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  padding-left: 5px;
`;

const StyledAmount = styled.div`
  .nftmoa-price-container {
    position: relative;

    .price {
      font-weight: 500;
      font-size: 20px;
      color: #000000;
    }

    .suffix {
      position: absolute;
      right: 0;
    }
  }
`;
