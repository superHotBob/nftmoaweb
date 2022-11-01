import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteSvg } from 'assets/svg/deleteTag.svg';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import { ReactComponent as EthereumIcon } from 'assets/svg/coins/ethereum.svg';
import prev_arrow from 'assets/common/arrow_left_white.png';
import next_arrow from 'assets/common/arrow_right_white.png';
import { Button, Checkbox, Labelbox, FilterSheet } from 'styles';
import { Slider as SliderItem } from 'antd';
import ScanningComponent from 'components/scanning';

const Tag: React.FC<any> = ({ tagList, setTagList }) => {
  const handleTagRemove = (idx: number) => {
    const _tagList = [...tagList];
    _tagList.splice(idx, 1);
    setTagList(_tagList);
  };

  return tagList.map((tag: string, idx: number) => (
    <li key={idx}>
      <button onClick={() => handleTagRemove(idx)}>
        <DeleteSvg />
      </button>
      <span>{tag}</span>
    </li>
  ));
};

const PriceCompoent: React.FC<any> = () => {
  return (
    <Section>
      <Labelbox
        style={{ marginBottom: 20 }}
        label="PRICE"
        suffix={
          <>
            <EthereumIcon width={8} height={13} /> <span style={{ fontSize: 10, fontWeight: 600, color: '#747474', marginLeft: -7 }}>(ETH)</span>
          </>
        }
        gap={9}
      >
        <Slider autoFocus={true} tooltipPlacement="top" range={{ draggableTrack: true }} defaultValue={[20, 50]} />
      </Labelbox>
    </Section>
  );
};

const CategoryComponent: React.FC<any> = ({ categories, setCategories }) => {
  return (
    <Section>
      <Checkbox label="CATEGORY">
        <Checkbox.Item checked={categories?.art} value="ART" onClick={() => setCategories({ ...categories, art: !categories.art })} />
        <Checkbox.Item checked={categories?.music} value="MUSIC" onClick={() => setCategories({ ...categories, music: !categories.music })} />
        <Checkbox.Item checked={categories?.games} value="GAMES" onClick={() => setCategories({ ...categories, games: !categories.games })} />
        <Checkbox.Item checked={categories?.photography} value="PHOTOGRAPHY" onClick={() => setCategories({ ...categories, photography: !categories.photography })} />
        <Checkbox.Item checked={categories?.domains} value="DOMAINS" onClick={() => setCategories({ ...categories, domains: !categories.domains })} />
      </Checkbox>
    </Section>
  );
};

const SalesCompoent: React.FC<any> = ({ saleType, setSaleType }) => {
  return (
    <Sales>
      <Checkbox icon label="SALE TYPE">
        <Checkbox.Item checked={saleType?.timedAuction} value="Timed Auction" onClick={() => setSaleType({ ...saleType, timedAuction: !saleType.timedAuction })} />
        <Checkbox.Item checked={saleType?.userOnly} value="User Only" onClick={() => setSaleType({ ...saleType, userOnly: !saleType.userOnly })} />
        <Checkbox.Item checked={saleType?.fixedPrice} value="Fixed Price" onClick={() => setSaleType({ ...saleType, fixedPrice: !saleType.fixedPrice })} />
        <Checkbox.Item checked={saleType?.openFor} value="Open for" onClick={() => setSaleType({ ...saleType, openFor: !saleType.openFor })} />
      </Checkbox>
    </Sales>
  );
};

const FilterStyles: React.FC<any> = ({ tagList, setTagList, categories, setCategories, saleType, setSaleType, filterList }) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { price, category, sale } = filterList;
  const handleApply = (e: any) => {
    console.log('apply');
    setOpen(false);
    setIsLoading(true);
    // 초기화
    setCategories({ art: false, music: false, games: false, photography: false, domains: false });
    setSaleType({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });
  };

  React.useEffect(() => {
    // 초기화
    if (!open) {
      setCategories({ art: false, music: false, games: false, photography: false, domains: false });
      setSaleType({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });
    }
  }, [open]);

  return (
    <Wrap className={'nftmoa-filter-container'}>
      {isLoading && <ScanningComponent />}
      <Filter>
        <Tags>
          <Tag tagList={tagList} setTagList={setTagList} />
        </Tags>
        <button onClick={() => setOpen(true)}>
          <FilterIcon />
        </button>
      </Filter>
      <FilterSheet
        open={open}
        setOpen={setOpen}
        icon={<FilterIcon />}
        snapTo={0.8}
        title="Filter"
        footer={<Button color="border" h={45} full radius={10} text="APPLY" onClick={(e: any) => handleApply(e)} />}
      >
        <Contents>
          <div>
            {price && <PriceCompoent />}
            {category && <CategoryComponent categories={categories} setCategories={setCategories} />}
            {sale && <SalesCompoent saleType={saleType} setSaleType={setSaleType} />}
          </div>
        </Contents>
      </FilterSheet>
    </Wrap>
  );
};

export default FilterStyles;
const Wrap = styled.div``;
const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #f4f4f4;
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex: 1;
  overflow-x: scroll;

  & > li {
    display: flex;
    padding: 6px;
    min-width: 64px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
    border-radius: 80px;

    & > span {
      display: inline-block;
      margin-left: 6px;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.01em;
      color: #000000;
    }
  }
`;

const Section = styled.div`
  margin-top: 30px;
`;

const Sales = styled.div`
  margin-top: 30px;
  & .wrap-checkbox {
    justify-content: space-between;
    gap: unset;

    & > div {
      margin-bottom: 15px;
    }
  }
`;

const Slider = styled(SliderItem)`
  .ant-slider-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-top: -13px;
    background-color: #000;
    border: none;

    &.ant-slider-handle-1 {
      &::after {
        display: inline-block;
        content: '';
        width: 7px;
        height: 12px;
        background-image: url(${prev_arrow});
        background-size: 100% 100%;
        background-position: center;
      }
    }

    &.ant-slider-handle-2 {
      &::after {
        display: inline-block;
        content: '';
        width: 7px;
        height: 12px;
        background-image: url(${next_arrow});
        background-size: 100% 100%;
        background-position: center;
      }
    }
  }

  .ant-slider-track {
    height: 6px;
    background: linear-gradient(90deg, #ff0002 0%, #fa0089 102.15%);
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
