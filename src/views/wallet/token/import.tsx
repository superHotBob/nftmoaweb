import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { useNavigate } from 'react-router-dom';
import { TOKEN_LIST } from 'api/mock/wallet';
import TokenItemComponent from 'components/tokenItem';
import { Button, FilterSearch, FixedButton } from 'styles';

const WalletTokenImportView: React.FC<any> = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState({ filter: 0, text: '' });
  return (
    <Wrap>
      <Header>
        <h2>Import tokens</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <StyledSearch>
        <FilterSearch className="search" query={query} placeholder={'Moa_'} setQuery={setQuery} />
      </StyledSearch>

      <TokenList>
        {TOKEN_LIST.map((item, idx) => (
          <TokenItemComponent key={idx} iconUrl={item.logoUrl} name={item.name} more={false} />
        ))}
      </TokenList>

      <FixedButton>
        <Button full color={'border'} rect text={'IMPORT'} />
      </FixedButton>
    </Wrap>
  );
};

export default WalletTokenImportView;

const Wrap = styled.div`
  position: relative;

  .nftmoa-token-item {
    padding: 18px 33px;
  }
`;
const Header = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 20px;
  z-index: 99;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    color: #000000;
  }
`;

const StyledSearch = styled.div`
  padding: 30px 20px;
  border-bottom: 1px solid #eaeaea;
`;

const TokenList = styled.div``;
