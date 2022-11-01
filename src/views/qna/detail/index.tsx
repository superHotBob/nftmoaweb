import React from 'react';
import ScrollWrap from 'components/common/slideWrap';
import QnaItem from 'components/qnaItem';
import { Collapse } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';
import styled from 'styled-components';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import { BottomSheet } from 'react-spring-bottom-sheet';

import APIService from 'api/index';

const apiService = new APIService();

const QnaDetailView: React.FC<any> = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const qsParse = qs.parse(search);
  const { ctg }: any = qsParse;
  const { Panel } = Collapse;

  const [open, setOpen] = React.useState(false);
  // const mappingIcon: any = {
  //   buying: 'https://user-images.githubusercontent.com/45615584/167830165-1d00f1c8-9813-4e47-be79-f1291a9b956a.png',
  //   create: 'https://user-images.githubusercontent.com/45615584/167830175-844e4bb6-8f18-48a9-a42d-295f031e4a42.png',
  //   selling: 'https://user-images.githubusercontent.com/45615584/167849272-0dd4f2f5-7927-439c-88a3-583e6bfed478.png',
  //   partners: 'Partners'
  // };

  const [faq, setFaq] = React.useState<any>();
  const [faqList, setFaqList] = React.useState<any>();

  const getFaqCtg = async () => {
    const faqData = await apiService.getFaqCtg();

    faqData && setFaq(faqData.list);
  };

  const getFaqList = async () => {
    const faqList = await apiService.getFaqList({ uid: ctg, page: 1, size: 100 });

    setFaqList(faqList.list);
  };

  const handleSelect = (v: string) => {
    navigate(`/qna?ctg=${v}`);
    setOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [qsParse]);

  React.useEffect(() => {
    getFaqCtg();
    getFaqList();
  }, [ctg]);

  return (
    <Wrap>
      <div className={'wrap-select'}>
        <StyledSelect onClick={() => setOpen(true)}>
          <Select>
            {/* {ctg && <img src={mappingIcon[selectedCtg]} />} */}
            {ctg && <em>{faq?.filter((item: any) => item.uid === Number(ctg))[0].name}</em>}
          </Select>
          <SelectDownArrowIcon />
        </StyledSelect>
      </div>

      <StyledCollapse>
        <Collapse defaultActiveKey={[`${0}`]}>
          {faqList?.map((item: any, idx: number) => (
            <Panel
              key={idx}
              header={
                <Header>
                  <dt>{idx + 1}.</dt>
                  <dd>{item.title}</dd>
                </Header>
              }
            >
              <p className={'pre'}>{item.content}</p>
              <ByName>
                by <strong>nftmoa.</strong>
              </ByName>
            </Panel>
          ))}
        </Collapse>
      </StyledCollapse>

      <ScrollWrap title="Related" style={{ backgroundColor: '#F5F5F5' }} round>
        {faq
          ?.filter((item: any) => item.uid !== Number(ctg))
          .map((item: any, index: number) => (
            <QnaItem {...item} key={index} />
          ))}
      </ScrollWrap>

      <BottomSheet className={'wrap-option'} open={open} onDismiss={() => setOpen(false)} snapPoints={({ minHeight }) => minHeight}>
        <ul>
          {faq
            ?.filter((item: any) => item.uid !== Number(ctg))
            .map((item: any, index: number) => (
              <li onClick={() => handleSelect(item.uid)} key={index}>
                {item.name}
              </li>
            ))}
        </ul>
      </BottomSheet>
    </Wrap>
  );
};

export default QnaDetailView;

const Wrap = styled.div`
  .wrap-select {
    padding: 20px;
    margin-bottom: 15px;
  }
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
  background: #000;
  padding: 9px 15px;
  border-radius: 9px;

  svg {
    path {
      stroke: #fff;
    }
  }
`;

const Select = styled.div`
  flex: 1;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  img {
    width: 20px;
    height: 25px;
    object-fit: contain;
    margin-right: 10px;
  }

  & > em {
    font-weight: 700;
    color: #fff;
  }
`;

const StyledCollapse = styled.div`
  .ant-collapse {
    border-left: 0 none;
    border-right: 0 none;
    & > .ant-collapse-item {
      padding: 16px 20px;

      & > .ant-collapse-header {
        padding-left: 0;
        padding-right: 0;
        font-weight: 700;
        font-size: 16px;
        color: #000000;

        & > div {
          display: none;
        }
      }
    }
  }

  .ant-collapse-content {
    border: none;
    font-weight: 400;
    font-size: 14px;
    color: #101010;
  }

  .pre {
    white-space: pre-line;
  }
`;

const ByName = styled.div`
  margin-top: 30px;
  font-weight: 800;
  font-size: 10px;
  line-height: 26px;
  color: #8c8c8c;

  strong {
    color: #000;
  }
`;

const Header = styled.dl`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  dt {
    margin-right: 10px;
    font-size: inherit;
  }

  dd {
    font-size: inherit;
  }
`;
