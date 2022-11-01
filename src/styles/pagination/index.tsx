import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';

const PaginationStyle: React.FC<any> = ({ totalPage, defaultPageSize = 10, pageSize = 10, ...props }) => {
  const navigate = useNavigate();
  const itemRender: any = (current: any, type: any, originalElement: any): any => {
    if (type === 'prev') return <a className={'link-pn'}>&lt; Back</a>;
    if (type === 'next') return <a className={'link-pn'}>Next &gt;</a>;
    return originalElement;
  };

  return (
    <StyledPagination>
      <Pagination defaultCurrent={0} defaultPageSize={defaultPageSize} pageSize={pageSize} total={500} itemRender={itemRender} showTitle={false} showSizeChanger={false} />
    </StyledPagination>
  );
};

export default PaginationStyle;

const StyledPagination = styled.div`
  text-align: center;

  .ant-pagination {
    .ant-pagination-item {
      & > a {
        font-size: 10px;
      }
    }
    .ant-pagination-item-ellipsis {
      letter-spacing: -0.14px;
      color: #000;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    line-height: 28px;
  }

  .link-pn {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
  }
  .ant-pagination-item-active {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  .ant-pagination-item-active a {
    color: #000000;
  }
`;
