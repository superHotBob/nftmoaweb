import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const RollingsStyles: React.FC<any> = ({ list, ...props }) => {
  return (
    <Rolling {...props}>
      <Carousel autoplay>
        {list.map((item: any, idx: number) => (
          <CarouselItem key={idx}>
            <img src={item.url} />
          </CarouselItem>
        ))}
      </Carousel>
    </Rolling>
  );
};

export default RollingsStyles;

const Rolling = styled.div`
  .ant-carousel {
    padding: 0 20px 22px;

    .slick-list {
      overflow: hidden;
      border-radius: 10px;
    }

    .slick-dots-bottom {
      bottom: 12px;
    }

    .slick-dots li {
      width: 39px !important;
      height: 2px !important;

      button {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.5) !important;
      }

      &.slick-active {
        button {
          background: #fff !important;
        }
      }
    }
  }

  .slideTemp {
    padding: 35px 20px;

    div {
      &:before {
        content: '';
        display: block;
        width: 230px;
        height: 150px;
      }

      + div {
        margin-left: 8px;
      }
    }
  }
`;

const CarouselItem = styled.div`
  width: 100%;
  background: #364d79;
  color: #fff;
`;
