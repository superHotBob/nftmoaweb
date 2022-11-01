import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SelectDownArrowIcon } from 'assets/svg/downArrow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Filter } from 'styles';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { TOP_SELLERS } from 'api/mock/home';
import RankSellerItem from 'components/rankSellerItem';

const RankSellerView: React.FC<any> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [date, setDate]: any = React.useState('day');
  const [tagList, setTagList] = React.useState(['3,000 ETH', 'Art']);
  const [categories, setCategories] = React.useState({ art: false, music: false, games: false, photography: false, domains: false });
  const [saleType, setSaleType] = React.useState({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });

  const handleSelect = (v: string) => {
    setDate(v);
    setOpen(false);
  };

  const mapping: any = {
    day: '1 Day Ago',
    week: 'Last Week',
    month: 'Last Month'
  };

  return (
    <Wrap>
      <StyledSearch open={openSearch}>
        <Link to={'/search'}>
          <SearchIcon className="icon-search" onClick={() => setOpenSearch(true)} />
        </Link>
      </StyledSearch>

      <div className={'wrap-select'}>
        <StyledSelect onClick={() => setOpen(true)}>
          <Select>
            Top Sellers in <em>{mapping[date]}</em>
          </Select>
          <SelectDownArrowIcon />
        </StyledSelect>
      </div>

      <Filter
        tagList={tagList}
        setTagList={setTagList}
        categories={categories}
        setCategories={setCategories}
        saleType={saleType}
        setSaleType={setSaleType}
        filterList={{ price: true, category: true, sale: true }}
      />

      <RankList>
        {TOP_SELLERS[date].map((item: any, index: number) => (
          <RankSellerItem {...item} key={index} />
        ))}
      </RankList>

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

export default RankSellerView;

const Wrap = styled.div`
  .wrap-select {
    padding: 29px 20px 0;
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
`;

const Select = styled.div`
  flex: 1;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  & > em {
    font-weight: 700;
    color: #0085ff;
    text-decoration: underline;
  }
`;

const RankList = styled.div`
  padding: 0 20px 30px;
`;

const StyledSearch = styled.div<{ open?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 50px;
  z-index: 9999;
  background: ${p => (p.open ? '#fff' : 'transparent')};

  .icon-search {
    margin-right: 20px;
  }
`;
