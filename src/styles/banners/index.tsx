import React from 'react';
import styled from 'styled-components';
import ScrollWrap from 'components/common/slideWrap';

const Banners: React.FC<any> = ({ list, ...props }) => {
  return (
    <Wrap {...props}>
      {list.length > 1 ? (
        <ScrollWrap className="wrap-banner">
          {list.map((item: any, idx: number) => (
            <img key={idx} src={item.imgUrl} />
          ))}
        </ScrollWrap>
      ) : (
        <div className="wrap-banner">
          {list.map((item: any, idx: number) => (
            <img key={idx} src={item.imgUrl} />
          ))}
        </div>
      )}
    </Wrap>
  );
};

export default Banners;

const Wrap = styled.div`
  .wrap-banner {
    & > div {
      gap: 8px;

      & > img {
        width: 335px;
        min-width: 335px;
        height: 150px;
        border-radius: 10px;
      }
    }
  }
`;
