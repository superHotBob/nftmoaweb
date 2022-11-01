import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { ReactComponent as XIcon } from 'assets/svg/x.svg';
import { ReactComponent as VIcon } from 'assets/svg/confirm.svg';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/common/logo.png';
import { Button } from 'styles';

const MoaWalletAgreeView: React.FC<any> = () => {
  const navigate = useNavigate();
  const handleAgree = () => {
    navigate('/wallet/create/password');
  };

  const handleDisAgree = () => {};
  return (
    <Wrap>
      <Header>
        <div className="wrap-list">
          <img src={logo} />
          <h2>MOA Wallet</h2>
        </div>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <PageIntro>
        <p className="desc">MOA wants to collect basic usage data to better understand how users use mobile apps. This data is used to continuously improve product usability and user experience.</p>
      </PageIntro>

      <Section>
        <h4>In MOA</h4>
        <dl className="wrap-list wrap-list-membership s-b">
          <dt>
            <VIcon />
          </dt>
          <dd>
            <span>You can opt out of the configuration at any time.</span>
          </dd>
          <dt>
            <VIcon />
          </dt>
          <dd>
            <span>Send anonymous clicks and pageview events</span>
          </dd>
          <dt>
            <VIcon />
          </dt>
          <dd>
            <span>
              Send country/region city data
              <br />
              (not specific location)
            </span>
          </dd>
          <dt>
            <XIcon />
          </dt>
          <dd>
            <span>Never collect keys, addresses, transactions, balances, hash, or personal information.</span>
          </dd>
          <dt>
            <XIcon />
          </dt>
          <dd>
            <span>IP addresses are not collected.</span>
          </dd>
          <dt>
            <XIcon />
          </dt>
          <dd>
            <span>We do not sell data for profit. Never!</span>
          </dd>
        </dl>
      </Section>

      <Policy>
        this data is aggregated and i therefore anonymous for the purposes of general data protection regulation (EU) 2016/679. for more information in relation to our privacy practices, please see
        our <Link to="">privacy policy</Link>
      </Policy>

      <StyledButton>
        <Button color="border" full radius={10} text="DISAGREE" h={52} onClick={handleDisAgree} />
        <Button color="black" full radius={10} text="AGREE" h={52} onClick={handleAgree} />
      </StyledButton>
    </Wrap>
  );
};

export default MoaWalletAgreeView;

const Wrap = styled.div``;

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

  & > .wrap-list {
    & > img {
      width: 30px;
      height: 30px;
      margin-right: 7px;
    }

    & > h2 {
      font-weight: 700;
      font-size: 24px;
      color: #000000;
    }
  }
`;

const PageIntro = styled.div`
  padding: 20px 25px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 30px;

  & > h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.01em;
    margin-bottom: 12px;
    color: #000000;
  }

  & > .desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #6f6f6f;
  }
`;

const Section = styled.div`
  padding: 0 25px 25px;

  & > h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #6f6f6f;
    margin-bottom: 9px;
  }

  & > .wrap-list-membership {
    flex-wrap: wrap;
    align-items: flex-start;

    & > dt {
      display: flex;
      align-items: center;
      width: 5%;
      padding-top: 2px;
      padding-bottom: 15px;
    }

    & > dd {
      width: 95%;
      line-height: 1;
      padding-bottom: 15px;

      & > span {
        font-weight: 400;
        font-size: 12px;
        color: #6f6f6f;
        display: inline-block;
        margin-left: 12px;
        line-height: 16px;
      }
    }
  }
`;

const Policy = styled.div`
  padding: 0 31px 0 28px;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  color: #6f6f6f;

  & > a {
    text-decoration: underline;
  }
`;

const StyledButton = styled.div`
  padding: 0 20px;
  margin: 30px 0;

  & > button + button {
    margin-top: 12px;
  }
`;
