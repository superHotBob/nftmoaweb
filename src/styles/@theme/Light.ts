import { css } from '@emotion/react';
import { FONT_SECONDARY } from '../Reset';

const NONE = 'transparent';
const DEFAULT = '#000000';

// Default Color
const WHITE = '#FFFFFF';
const BLACK = '#000000';

// Text Color
const TEXT_PRIMARY = '#333333';
const TEXT_REGULAR = '#000000';
const TEXT_SECONDARY = '#969696';
const TEXT_PLACEHOLDER = '#C2C2C2';
const TEXT_DISABLED = '#D8D8D8';
const TEXT_BASE = '#FFFFFF';
const TEXT_BRAND = '#00A1FF';
const TEXT_LINK = '#0071B2';
const TEXT_POINT = '#FF6422';

// Background Color
const BG_BRAND = '#00A1FF';
const BG_BRAND_REGULAR = '#0071B2';
const BG_BRAND_LIGHT = '#CDE4F5';
const BG_BRAND_LIGHTER = '#E7F6FF';
const BG_REGULAR = '#FFFFFF';
const BG_BASE = '#000000';
const BG_OVERLAY1 = 'rgba(0, 0, 0, 0.7)';
const BG_OVERLAY2 = 'rgba(32, 33, 37, 0.8)';
const BG_OVERLAY3 = 'rgba(0, 0, 0, 0.6)';
const BG_PRIMARY = '#3D3D3D';
const BG_SECONDARY = '#969696';
const BG_LIGHT01 = '#858585';
const BG_LIGHT02 = '#C2C2C2';
const BG_LIGHT03 = '#D8D8D8';
const BG_LIGHT04 = '#EFEFEF';
const BG_LIGHT05 = '#FAFAFA';
const BG_POINT = '#FF6422';
const BG_BODY = '#FFFFFF';

// Border Color
const BORDER_REGULAR = '#EFEFEF';
const BORDER_LIGHT01 = '#D8D8D8';

// Custom Color
const EL_LIKE = '#EB4149';
const EL_IMG = '#FFD200';
const EL_VIDEO = '#FF8076';
const EL_LOCK = '#3BC1EB';

export const SIZE = {
  n46: '46px',
  n30: '30px',
  n26: '26px',
  n24: '24px',
  n22: '22px',
  n20: '20px',
  n18: '18px',
  n16: '16px',
  n14: '14px',
  n12: '12px',
  n11: '11px'
};

export const COLORS = {
  NONE,
  DEFAULT,
  TEXT_PRIMARY,
  TEXT_REGULAR,
  TEXT_SECONDARY,
  TEXT_PLACEHOLDER,
  TEXT_DISABLED,
  TEXT_BASE,
  TEXT_BRAND,
  TEXT_LINK,
  TEXT_POINT,
  BG_BRAND,
  BG_BRAND_REGULAR,
  BG_BRAND_LIGHT,
  BG_BRAND_LIGHTER,
  BG_REGULAR,
  BG_BASE,
  BG_OVERLAY1,
  BG_OVERLAY2,
  BG_OVERLAY3,
  BG_PRIMARY,
  BG_SECONDARY,
  BG_LIGHT01,
  BG_LIGHT02,
  BG_LIGHT03,
  BG_LIGHT04,
  BG_LIGHT05,
  BG_POINT,
  BG_BODY,
  BORDER_REGULAR,
  BORDER_LIGHT01,
  EL_LIKE,
  EL_IMG,
  EL_VIDEO,
  EL_LOCK,
  WHITE,
  BLACK,
  MODAL: {
    ONE: BG_REGULAR
  }
};

export const TEXTS = {
  BOARD_LINK_TITLE: css`
    color: ${TEXT_BRAND};
    font-size: ${SIZE.n12};
    line-height: ${SIZE.n18};
    font-weight: 500;
  `,
  PROFILE_NAME: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};
    font-weight: 500;
  `,
  LIST_TITLE: css`
    color: ${TEXT_REGULAR};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};
    font-weight: 500;
  `,
  LIST_PROFILE_TIME: css`
    color: ${TEXT_SECONDARY};
    font-size: ${SIZE.n11};
    line-height: ${SIZE.n11};
  `,
  LIST_PROFILE_EL_NUM: css`
    color: ${TEXT_SECONDARY};
    font-size: ${SIZE.n11};
    line-height: ${SIZE.n14};
    ${FONT_SECONDARY};
  `,
  LIST_EL_NUM: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n12};
    line-height: ${SIZE.n14};
    ${FONT_SECONDARY};
  `,
  LIST_COMMENT_NUM: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n16};
    font-weight: 500;
    ${FONT_SECONDARY};
  `,
  BOARD_TITLE: css`
    color: ${TEXT_REGULAR};
    font-size: ${SIZE.n18};
    line-height: ${SIZE.n26};
    font-weight: 500;
  `,
  BOARD_CONTENT: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n16};
    line-height: ${SIZE.n24};
  `,
  COMMENT_CONT: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};
  `,
  FEED_EL_NUM: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n16};
    ${FONT_SECONDARY};
  `,
  TOP_TITLE: css`
    font-size: ${SIZE.n16};
    line-height: ${SIZE.n24};
    font-weight: 500;
  `,
  BTN_WRITE: css`
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};
    font-weight: 500;
  `,
  INFO_TXT_ALL_NUM: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n12};
    line-height: ${SIZE.n12};
    font-weight: 500;
    ${FONT_SECONDARY};
  `,
  INFO_TXT: css`
    color: ${TEXT_SECONDARY};
    font-size: ${SIZE.n11};
    line-height: ${SIZE.n12};
  `,
  INFO_SORT: css`
    color: ${TEXT_PLACEHOLDER};
    font-size: ${SIZE.n11};

    &.active {
      color: ${TEXT_PRIMARY};
    }
  `,
  TXT_PLACEHOLDER_NEW: css`
    color: ${TEXT_SECONDARY};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};
  `,
  TXT_PLACEHOLDER_SM: css`
    color: ${TEXT_REGULAR};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};

    ::placeholder {
      color: ${TEXT_PLACEHOLDER};
    }
  `,
  TXT_PLACEHOLDER_MD: css`
    color: ${TEXT_REGULAR};
    font-size: ${SIZE.n16};
    line-height: ${SIZE.n24};

    ::placeholder {
      color: ${TEXT_PLACEHOLDER};
    }
  `,
  TXT_PLACEHOLDER_LG: css`
    color: ${TEXT_REGULAR};
    font-size: ${SIZE.n18};
    line-height: ${SIZE.n26};
    font-weight: 500;

    ::placeholder {
      color: ${TEXT_PLACEHOLDER};
    }
  `,
  TXT_FILEBOX: css`
    height: 44px;
    color: ${TEXT_BRAND};
    font-size: ${SIZE.n12};
    line-height: ${SIZE.n14};
    border: 1px solid ${BORDER_REGULAR};
    border-radius: 6px;
    background: ${COLORS.BG_LIGHT05};
    word-break: break-all;
    overflow: hidden;
  `,
  TXT_TAG: css`
    font-size: ${SIZE.n16};
    line-height: ${SIZE.n24};
    font-weight: 500;
  `,
  SYSTEM_TITLE: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n30};
    line-height: ${SIZE.n46};
    font-weight: 500;
  `,
  SYSTEM_EMPTY: css`
    color: ${TEXT_SECONDARY};
    font-size: ${SIZE.n16};
    line-height: ${SIZE.n24};
  `,
  SYSTEM_TXT: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n18};
    line-height: ${SIZE.n22};
  `,
  SYSTEM_TOAST: css`
    color: ${TEXT_DISABLED};
    font-size: ${SIZE.n12};
    line-height: ${SIZE.n14};
    font-weight: 500;
  `,
  CONTROL_SCALE: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n16};
    line-height: ${SIZE.n24};
  `,
  CONTROL_TXT: css`
    color: ${TEXT_PRIMARY};
    font-size: ${SIZE.n14};
    line-height: ${SIZE.n22};
  `
};

export const BUTTONS = {
  PRIMARY: css`
    color: ${WHITE};
    background-color: ${BG_BRAND};

    &:hover {
      background-color: ${BG_BRAND_REGULAR};
    }

    &.disable {
      background-color: ${BG_BRAND_LIGHT};
    }
  `,
  CANCEL: css`
    color: ${WHITE};
    background-color: ${BG_SECONDARY};
  `
};

export const ICONS = {
  EMPTY: {
    ONE: BG_BRAND,
    TWO: BG_BRAND_LIGHTER,
    THREE: BG_BRAND_LIGHT,
    FOUR: BG_REGULAR
  },
  ARROW01: {
    ONE: BG_LIGHT01
  },
  ARROW02: {
    ONE: BG_BRAND
  },
  LOCK: {
    ONE: BG_PRIMARY
  },
  SCRAPE: {
    ONE: BG_LIGHT01
  },
  PROFILE: {
    ONE: BG_LIGHT03
  },
  WRITE: {
    ONE: BG_PRIMARY
  },
  COMMENT: {
    ONE: BG_LIGHT01
  },
  MORE: {
    ONE: BG_SECONDARY
  },
  VIEW: {
    ONE: BG_SECONDARY
  },
  VIDEO: {
    ONE: BG_OVERLAY3,
    TWO: BG_REGULAR
  }
};

export default {
  COLORS,
  SIZE,
  BUTTONS,
  TEXTS,
  ICONS
};
