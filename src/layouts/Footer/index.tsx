import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styles/theme';
import { ReactComponent as LogoSvg } from 'assets/svg/logo.svg';
import { ReactComponent as LogoTextSvg } from 'assets/svg/logoText.svg';

export default () => {
  useEffect(() => {}, []);

  return (
    <Footer>
      <div className="logoArea">
        <LogoTextSvg />
        <LogoSvg />
      </div>
      <p className="sup">Can search every NFT item in the world</p>
      <div className="utilNav">
        <Link to={'/'}>NFTLABS</Link> |<Link to={'/'}>Q&amp;A</Link> |<Link to={'/'}>Contact us</Link>
      </div>
      <p className="sub2">
        I searched all the NFT contents that I wanted to buy. <br />
        It automatically creates and links wallets. <br />
        Artificial Intelligence Tutorial Transactions <br />
        NFT transaction escrow and concierge services <br />
        present a standard
      </p>
      <p className="address">
        Contact us 82+1038711079 <br />
        Email doubles7@nftlabs.io <br />
        8F/10, Teheran-ro 38 gil, Gangnam-gu, Seoul, Republic of Korea
      </p>
      <p className="copyright">COPYRIGHT INFORMATION NFTMOA © 2022. ALL RIGHTS RESERVED.</p>
    </Footer>
  );
};

const Footer = styled.div`
  padding: 40px 20px 25px;
  background: #828282;
  color: #fff;

  .logoArea {
    display: flex;

    svg + svg {
      margin-left: auto;

      path {
        stroke: #fff;
      }
    }
  }

  .sup {
    font-size: 12px;
    line-height: 18px;
    color: #fff;
  }

  .utilNav {
    margin-top: 28px;
    color: #fff;

    a {
      display: inline-block;
      color: #fff;
      font-size: 12px;
      font-weight: bold;

      + a {
        margin-left: 6px;
      }
    }
  }

  .sub2 {
    margin-top: 20px;
    font-size: 12px;
    color: #fff;
  }

  .address {
    margin-top: 20px;
    font-size: 11px;
    color: #fff;
  }

  .copyright {
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: -1px;
    color: #fff;
  }
`;
