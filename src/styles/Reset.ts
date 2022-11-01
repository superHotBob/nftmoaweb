import { css } from '@emotion/react';

const FONT_PRIMARY = css`
  font-family: 'Noto Sans', 'Apple SD Gothic Neo', '맑은 고딕', 'Malgun Gothic', '돋움', 'dotum', Helvetica, Arial, Verdana, Tahoma, sans-serif !important;
`;

const FONT_SECONDARY = css`
  font-family: 'Roboto', 'Apple SD Gothic Neo', '맑은 고딕', 'Malgun Gothic', '돋움', 'dotum', Helvetica, Arial, Verdana, Tahoma, sans-serif !important;
`;

export { FONT_PRIMARY, FONT_SECONDARY };

export default css`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500|Noto+Sans:400,500,600,700,900&amp;subset=korean');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    ${FONT_PRIMARY}
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    color: #000;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    color: #555;
    background: #f1f3f4;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  strong,
  b {
    font-weight: 800;
  }

  .bold {
    font-weight: 700 !important;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  textarea,
  blockquote,
  th,
  td,
  p,
  button,
  span {
    text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  fieldset,
  img,
  abbr,
  acronym {
    border: 0 none;
  }

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  legend {
    *margin-left: -7px;
  }

  legend.hidden {
    position: absolute;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    text-indent: -10000px;
  }

  input:focus,
  a:focus,
  button:focus {
    /* outline: #000 dotted 1px !important; outline-offset: -1px;  */
    outline: 0 none;
  }

  textarea:focus {
    /* outline: none !important; */
  }

  a {
    color: inherit;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  a:focus {
    transition: outline 0.2s;
    color: inherit;
  }

  a:focus,
  a:hover {
    color: inherit;
    text-decoration: underline;
  }

  button {
    position: relative;
    border: 0 none;
    background: none;
    padding: 0;
    cursor: pointer;
    line-height: 1;
  }

  /* button span,
  button:active span,
  button:focus span,
  button:active img,
  button:focus img {
    position: relative;
    top: 0;
    left: 0;
  } */

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  label,
  button,
  input,
  select,
  textarea {
    color: #5b5b5b;
    line-height: 1;
    font-size: inherit;
    vertical-align: middle;
    ${FONT_PRIMARY};
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    overflow: visible;
    appearance: button;
  }

  select {
    border-radius: 0;
  }

  textarea {
    overflow: auto;
    resize: none;
  }

  textarea[readonly='readonly']:focus {
    border-color: #bfbfbf;
  }

  input[type='checkbox'],
  input[type='radio'] {
    width: 13px;
    height: 13px;
    box-sizing: border-box;
    border-radius: 0;
    cursor: pointer;
  }

  input[type='search'] {
    appearance: textfield;
    box-sizing: border-box;
  }

  input[type='search']::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #a1a1a1;
    opacity: 1;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a1a1a1;
    opacity: 1;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a1a1a1;
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a1a1a1;
  }

  :-ms-textarea-placeholder {
    /* Internet Explorer 10-11 */
    color: #a1a1a1;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  /* ::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  } */

  label {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  label:active {
    appearance: none;
  }

  label:focus {
    outline: none;
  }

  /* html5 태그 */

  header,
  footer,
  article,
  section,
  aside,
  details,
  figure,
  figcaption,
  nav,
  hgroup {
    display: block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  audio[controls],
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  /* 건너뛰기 네비게이션 */

  #skip-nav {
    width: 100%;
    height: 0;
    text-align: center;
    overflow: hidden;
  }

  #skip-nav a {
    color: #000;
    font-size: 14px;
    font-weight: 800;
    float: left;
  }

  #skip-nav a:focus,
  #skip-nav a:hover,
  #skip-nav a:active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-decoration: underline;
    background-color: #fff;
    overflow: visible;
    z-index: 9999;
  }

  svg {
    fill: currentColor;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: 0;
  }

  [contenteditable] {
    user-select: text;
    -webkit-user-modify: read-write;
  }

  .pyro {
    color: #c52525;
    font-weight: bold;

    &.back {
      background: #c52525;
    }
  }

  .cryo {
    color: #5bb;
    font-weight: bold;

    &.back {
      background: #9ff;
    }
  }

  .electro {
    color: #8c30a6;
    font-weight: bold;

    &.back {
      background: #faf;
    }
  }

  .geo {
    color: #bfa640;
    font-weight: bold;

    &.back {
      background: #bfa640;
    }
  }

  .f16 {
    font-size: 16px;
  }

  .f14 {
    font-size: 14px;
  }

  .extra-bold {
    font-weight: 800;
  }

  .wrap-list {
    display: flex;
    flex-direction: row;
    align-items: center;

    &.s-b {
      justify-content: space-between;
    }

    .price {
      text-align: right;
      color: #000000;
    }

    .left {
      flex: 1;
      text-align: left;
    }

    .right {
      flex: 1;
      text-align: right;
    }
  }

  .nftmoa-notice {
    font-size: 12px;
    color: #6f6f6f;

    a {
      text-decoration: underline;
    }
  }

  .t-c {
    text-align: center;
  }

  /* antd */
  .ant-input {
    background: #f9f9f9;
  }

  .ant-form-item-control-input-content > .ant-input,
  .ant-input-affix-wrapper {
    background: #f9f9f9;
    border: 1px solid #cbcbcb;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 16px;
    line-height: 26px;
  }

  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-collapse-content {
    background: inherit;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }

  .ant-checkbox-wrapper {
    margin-top: 18px;
  }

  .ant-checkbox-inner {
    border-color: #7e7e7e !important;
  }

  .ant-checkbox + span {
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    color: #6f6f6f;
  }

  .ant-drawer-header {
    padding-top: 110px;
    padding-bottom: 0;

    .icon-hash {
      font-weight: 900;
      font-size: 26px;
      line-height: 26px;
      color: #000000;
    }

    .title {
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      color: #000000;
    }
  }

  .ant-drawer-body {
    padding: 16px 0;

    & > div.nftmoa-label-container {
      margin-bottom: 23px;

      .ntfmoa-label {
        padding-left: 20px;
      }
    }
  }

  .ant-upload.ant-upload-select-picture-card {
    background: transparent;
    border: none;
  }

  /* quill */

  @media only screen and (max-width: 769px) {
    body {
      .ant-menu-submenu-popup {
        display: none !important;
      }
    }
  }

  @media only screen and (max-width: 769px) {
    .include-video {
      flex-direction: column;
    }

    .thum-video {
      display: flex;
      flex: 0 0 auto !important;
      margin-bottom: 10px;

      > div:first-of-type {
        flex: 0 0 82px;
      }
    }
  }
`;
