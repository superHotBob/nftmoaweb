import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, FixedButton, Input, Label, Price, WrapButton, StepItem, WrapIcon } from 'styles';
import { ReactComponent as QRcode } from 'assets/svg/qrcode.svg';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import { SelectLabel } from 'styles';
import { Select } from 'antd';
import { TOKEN_MAPPING_LIST, TOKEN_LIST } from 'api/mock/wallet';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import numeral from 'numeral';
import { digit } from 'utils';

const WalletTokenBuyView: React.FC<any> = () => {
  const { Option } = Select;
  const paymentRef: any = React.useRef(null);
  const [inputs, setInputs]: any = React.useState({ select: 'ETH', payment: 0 });

  const handleChangeSelect = (value: string) => {
    setInputs({ ...inputs, select: value });
  };

  const { curPrice, logoUrl, symbol } = TOKEN_MAPPING_LIST[inputs?.select];

  return (
    <Wrap>
      <ScanQR>
        <WrapIcon w={48} h={48}>
          <QRcode />
        </WrapIcon>
      </ScanQR>

      <StepItem num={1} title={'Buy'} />

      <SelectLabel>
        <Select suffixIcon={<SelectDownArrowIcon />} bordered={false} defaultValue={'ETH'} onChange={handleChangeSelect}>
          {TOKEN_LIST?.map((item, idx) => (
            <Option key={idx} value={item?.symbol}>
              {item?.name}({item?.symbol})
            </Option>
          ))}
        </Select>
      </SelectLabel>

      <Form>
        <Label label={'Current price'}>
          <Price icon={logoUrl} price={curPrice} iconW={15} iconH={26} fontSize={30} suffix={<Suffix>1 ({symbol})</Suffix>} />
        </Label>

        <Card>
          <div className={'section'}>
            <Input
              type={'tel'}
              ref={paymentRef}
              onChange={() => setInputs({ ...inputs, payment: paymentRef?.current.getValue() })}
              label={'AMOUNT'}
              bar={false}
              prefix={<Prefix>$</Prefix>}
              value={numeral(inputs?.payment).format('0,00')}
              labelSuffix={`${symbol}/USD`}
            />
            <StyledAmount>
              <Price icon={logoUrl} price={0.011} iconW={30} iconH={30} fontSize={30} suffix={<Suffix className={'suffix'}>ETH</Suffix>} />
            </StyledAmount>
          </div>
          <div className={'section'}>
            <table>
              <tr>
                <th>Purchase Price</th>
                <td>${digit(20000, 0, true, true)}</td>
              </tr>
              <tr>
                <th>fee</th>
                <td>${digit(30.96, 2, true, true)}</td>
              </tr>
            </table>
          </div>
          <div className={'section'}>
            <table>
              <tr>
                <th>total</th>
                <td className="bold">${digit(230.06, 2, true, true)}</td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>

      <WrapButton>
        <Button rect color={'border'} text={'CONTINUE'} full />
      </WrapButton>
    </Wrap>
  );
};

export default WalletTokenBuyView;

const Wrap = styled.div`
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
  font-weight: 700;
  font-size: 12px;
  display: flex;
  text-transform: uppercase;
  align-self: flex-end;
  line-height: 2.5;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 5px;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 17px;

  & > .section {
    padding: 23px 30px;
  }

  & > .section + .section {
    border-top: 1px solid #eaeaea;
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
