import React from 'react';
import styled from 'styles/theme';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MoreIcon } from 'assets/svg/moreArrow.svg';
import APIService from 'api/index';

const apiService = new APIService();

const QnAItem: React.FC<any> = ({ uid, name, ctg, title, views, by, bg, ...props }) => {
  const navigate = useNavigate();
  const [faq, setFaq] = React.useState<any>();

  const getFaqList = async () => {
    const faqList = await apiService.getFaqList({ uid, page: 1, size: 1 });

    setFaq(faqList.list[0]);
  };

  React.useEffect(() => {
    getFaqList();
  }, []);

  return (
    <Wrap {...props} onClick={() => navigate(`/qna?ctg=${uid}`)}>
      {faq && (
        <div>
          <dl className="wrap-list wrap-list-ctg">
            {/* <dt>
            <img src={iconUrl} />
          </dt> */}
            <dd>{name}</dd>
          </dl>
          <h2>{faq.title}</h2>
          <dl className={'wrap-more'}>
            <dt>
              by <strong>nftmoa.</strong>
            </dt>
            <dd>
              <MoreIcon />
            </dd>
          </dl>
        </div>
      )}
    </Wrap>
  );
};

export default QnAItem;

const Wrap = styled.div<{ bg?: string }>`
  display: flex;
  background: #000;
  box-sizing: border-box;
  border-radius: 10px;

  &:nth-child(even) {
    background: #007eb5;
  }

  & + div {
    margin-left: 15px;
  }

  > div {
    position: relative;
    padding: 18px;
    width: 230px;
    min-height: 230px;
    overflow: hidden;

    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;
      color: #ffffff;
    }
  }

  .wrap-list-ctg {
    align-items: center;
    margin-bottom: 20px;

    dt {
      width: 20px;
      height: 25px;
      margin-right: 6px;

      img {
        object-fit: contain;
      }
    }

    dd {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 12px;
      color: #fff;
    }
  }

  .wrap-more {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 23px;
    width: 100%;
    padding: 0 22px 0 17px;

    dt {
      font-weight: 800;
      font-size: 10px;
      color: #8c8c8c;
    }

    strong {
      color: #fff;
    }

    dd {
      svg {
        path {
          stroke: #fff;
          stop-opacity: 1;
        }
      }
    }
  }
`;
