import { Select, Switch } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Input, Textarea } from 'styles';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import { SelectLabel } from 'styles';

const StepTwoView: React.FC<any> = () => {
  const navigation = useNavigate();
  const labelRef: any = React.useRef(null);
  const descRef: any = React.useRef(null);
  const metaRef: any = React.useRef(null);
  const priceRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ label: '', desc: '', price: 0, category: '0', metadata: '', isSale: false });
  const { Option } = Select;

  const handleSale = (checked: boolean) => {
    setInputs({ ...inputs, isSale: checked });
  };

  const handleChangePrice = (value: string) => {
    setInputs({ ...inputs, category: value });
  };

  const handleSubmit = () => {
    console.log(inputs, 'inputs');
    navigation('/profile/create/step2');
  };

  return (
    <Wrap>
      <dl>
        <dt>2</dt>
        <dd>
          <h2>Item Detail</h2>
          <p>Describe your item</p>
        </dd>
      </dl>

      <StyledForm>
        <Input ref={labelRef} label={'label'} value={inputs.label} placeholder={'3zY1K . . . CoACVj '} onChange={() => setInputs({ ...inputs, label: labelRef?.current?.getValue() })} />

        <Textarea ref={descRef} placeholder={'justin@justin.com'} label={'description'} rows={3} value={inputs.desc} onChange={() => setInputs({ ...inputs, desc: descRef?.current?.getValue() })} />

        <div className="wrap-list" style={{ gap: 20 }}>
          <StyledPrice>
            <Input
              last={true}
              ref={priceRef}
              label={'price'}
              bar={false}
              type="number"
              onChange={() => setInputs({ ...inputs, price: priceRef?.current?.getValue() })}
              prefix={<img style={{ width: 30, height: 30, marginRight: 9, borderRadius: '50%', overflow: 'hidden' }} src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" />}
              suffix={<p style={{ fontWeight: 700, fontSize: 12, color: 'rgba(0,0,0,0.5)' }}>ETH</p>}
            />
          </StyledPrice>

          <StyledCategory>
            <SelectLabel label="category">
              <Select suffixIcon={<SelectDownArrowIcon />} bordered={false} defaultValue={'0'} onChange={handleChangePrice}>
                <Option value={'0'}>Photography</Option>
                <Option value={'1'}>ddd</Option>
                <Option value={'2'}>ssss</Option>
              </Select>
            </SelectLabel>
          </StyledCategory>
        </div>

        <Input label={'meta data'} value={inputs.metadata} ref={metaRef} placeholder={'peace  smirc'} onChange={() => setInputs({ ...inputs, metadata: metaRef?.current?.getValue() })} />

        <StyledSwitch>
          <div className="wrap-list container-switch">
            <p className="label">Put on sale</p>
            <Switch defaultChecked onChange={handleSale} />
          </div>
          <p className="notion">You’ll receive bids on this item</p>
        </StyledSwitch>
      </StyledForm>

      <Button color="border" full radius={10} text="SAVE" h={52} onClick={handleSubmit} />
    </Wrap>
  );
};

export default StepTwoView;

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

const StyledForm = styled.div`
  margin-bottom: 30px;

  & > div + div {
    margin-top: 23px;
  }
`;

const StyledSwitch = styled.div`
  margin-bottom: 4px;
  margin-top: 50px;

  .container-switch {
    justify-content: space-between;

    .label {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #23262f;
    }
  }

  .ant-switch {
    width: 48px;
    height: 24px;
    line-height: 24px;
    background: #e6e8ec;
  }

  .ant-switch-handle {
    top: 50%;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);

    &::before {
      background-color: #3772ff;
    }
  }

  .notion {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #777e91;
  }
`;

const StyledPrice = styled.div`
  flex: 2;
`;
const StyledCategory = styled.div`
  flex: 1;
`;
