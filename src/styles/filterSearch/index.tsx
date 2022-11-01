import React from 'react';
import styled from 'styled-components';
import { Button, Radio, FilterSheet } from 'styles';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as DownArrowIcon } from 'assets/svg/downArrow2.svg';

const FilterSearchStyles: React.FC<any> = ({ type, placeholder, rect = false, query, setQuery, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [optionValue, setOptionValue] = React.useState(query.filter);
  const typeSet: any = {
    board: [
      {
        text: 'Title',
        value: 0
      },
      {
        text: 'Title+Content',
        value: 1
      },
      {
        text: 'Comments',
        value: 2
      },
      {
        text: 'Nickname',
        value: 3
      },
      {
        text: 'Tag',
        value: 4
      }
    ]
  };

  const handleSelectChange = (e: any) => {
    // setOptionValue(value);
    setOpen(true);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
  };

  const handleSearch = () => {
    setQuery({ ...query, filter: optionValue, text: inputValue });
  };

  return (
    <div {...props}>
      <Wrap rect={rect} isValue={inputValue.length > 0}>
        {type && (
          <SelectFilter onClick={() => setOpen(true)}>
            <span>{typeSet[type][optionValue].text}</span>
            <DownArrowIcon />
          </SelectFilter>
        )}
        <Input>
          <input type="text" placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
        </Input>
        <SearchButton onClick={handleSearch}>
          <SearchIcon width={17} height={17} />
        </SearchButton>
      </Wrap>
      <FilterSheet open={open} setOpen={setOpen} snapTo={0.8} title="Search" footer={<Button color="border" h={45} full radius={10} text="SEARCH" onClick={handleSearch} />}>
        <div style={{ marginTop: 35 }}>
          <Radio center={false} value={optionValue} onChange={(optionValue: any) => setOptionValue(optionValue)}>
            <Radio.Item value="0">Title</Radio.Item>
            <Radio.Item value="1">Title+Content</Radio.Item>
            <Radio.Item value="2">Comments</Radio.Item>
            <Radio.Item value="3">Nickname</Radio.Item>
            <Radio.Item value="4">Tag</Radio.Item>
          </Radio>
          <Wrap>
            <Input>
              <input type="text" placeholder="NFT_" value={inputValue} onChange={handleInputChange} />
            </Input>
            <SearchButton onClick={handleSearch}>
              <SearchIcon width={17} height={17} />
            </SearchButton>
          </Wrap>
        </div>
      </FilterSheet>
    </div>
  );
};

export default FilterSearchStyles;

const Wrap = styled.div<{ rect?: boolean; isValue?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 17px;
  height: 40px;
  background: ${p => (p.isValue ? '#fff' : '#F9F9F9')};
  border: 1px solid #efefef;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.06);
  border-radius: ${p => (p.rect ? '8px' : '80px')};

  .ant-select {
    & .ant-select-selector {
      padding: 0;

      & .ant-select-selection-item {
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.01em;
        color: #000000;
      }
    }

    & .ant-select-arrow {
      top: 55%;
      right: 8px;
    }

    &.ant-select-open {
      & .ant-select-arrow {
        transform: rotate(-180deg);
      }
    }
  }

  input {
    width: 100%;
    border: none;
    font-size: 16px;
    background: transparent;

    &::placeholder {
      color: #bfbfbf;
    }
  }
`;

const Input = styled.div`
  flex: 1;
`;

const SearchButton = styled.button`
  flex-basis: 17px;
`;

const SelectFilter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 110px;
  justify-content: space-between;
  padding-right: 10px;

  & > span {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #000000;
  }
`;
