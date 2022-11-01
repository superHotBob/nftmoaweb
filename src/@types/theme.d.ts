import "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

type BUTTON_VARIANT = "DEFAULT" | "PRIMARY" | "INFOMATION" | "WARNING" | "DANGER" | "SUCCESS" | "ERROR" | "OTHER" | "NORMAL" | "CONFIRM" | "DELETE" | "CANCEL";

declare module "@emotion/react" {
  export interface Theme {
    children: any | Element[],
    SIZE: {
      n46: string;
      n30: string;
      n26: string;
      n24: string;
      n22: string;
      n20: string;
      n18: string;
      n16: string;
      n14: string;
      n12: string;
      n11: string;
    },
    COLORS: {
      NONE: string;
      DEFAULT: string;
      TEXT_PRIMARY: string;
      TEXT_REGULAR: string;
      TEXT_SECONDARY: string;
      TEXT_PLACEHOLDER: string;
      TEXT_DISABLED: string;
      TEXT_BASE: string;
      TEXT_BRAND: string;
      TEXT_LINK: string;
      TEXT_POINT: string;
      BORDER_REGULAR: string;
      BORDER_LIGHT01: string;
      BG_BRAND: string;
      BG_BRAND_REGULAR: string;
      BG_BRAND_LIGHT: string;
      BG_BRAND_LIGHTER: string;
      BG_REGULAR: string;
      BG_BASE: string;
      BG_OVERLAY1: string;
      BG_OVERLAY2: string;
      BG_OVERLAY3: string;
      BG_PRIMARY: string;
      BG_SECONDARY: string;
      BG_LIGHT01: string;
      BG_LIGHT02: string;
      BG_LIGHT03: string;
      BG_LIGHT04: string;
      BG_LIGHT05: string;
      BG_POINT: string;
      BG_BODY: string;
      EL_LIKE: string;
      EL_IMG: string;
      EL_VIDEO: string;
      EL_LOCK: string;
      WHITE: string;
      BLACK: string;
      MODAL: {
        ONE: string;
      }
    },
    BUTTONS: {
      DEFAULT: SerializedStyles;
      PRIMARY: SerializedStyles;
      INFOMATION: SerializedStyles;
      WARNING: SerializedStyles;
      DANGER: SerializedStyles;
      SUCCESS: SerializedStyles;
      ERROR: SerializedStyles;
      OTHER: SerializedStyles;
      NORMAL: SerializedStyles;
      CONFIRM: SerializedStyles;
      DELETE: SerializedStyles;
      CANCEL: SerializedStyles;
    },
    TEXTS: {
      BOARD_LINK_TITLE: SerializedStyles;
      PROFILE_NAME: SerializedStyles;
      LIST_TITLE: SerializedStyles;
      LIST_PROFILE_TIME: SerializedStyles;
      LIST_PROFILE_EL_NUM: SerializedStyles;
      LIST_EL_NUM: SerializedStyles;
      LIST_COMMENT_NUM: SerializedStyles;
      BOARD_TITLE: SerializedStyles;
      BOARD_CONTENT: SerializedStyles;
      COMMENT_CONT: SerializedStyles;
      FEED_EL_NUM: SerializedStyles;
      TOP_TITLE: SerializedStyles;
      BTN_WRITE: SerializedStyles;
      INFO_TXT_ALL_NUM: SerializedStyles;
      INFO_TXT: SerializedStyles;
      INFO_SORT: SerializedStyles;
      TXT_PLACEHOLDER_NEW: SerializedStyles;
      TXT_PLACEHOLDER_SM: SerializedStyles;
      TXT_PLACEHOLDER_MD: SerializedStyles;
      TXT_PLACEHOLDER_LG: SerializedStyles;
      TXT_FILEBOX: SerializedStyles;
      TXT_TAG: SerializedStyles;
      SYSTEM_TITLE: SerializedStyles;
      SYSTEM_EMPTY: SerializedStyles;
      SYSTEM_TXT: SerializedStyles;
      SYSTEM_TOAST: SerializedStyles;
      CONTROL_SCALE: SerializedStyles;
      CONTROL_TXT: SerializedStyles;
    },
    ICONS: {
      EMPTY: {
        ONE: string;
        TWO: string;
        THREE: string;
        FOUR: string;
      }
      ARROW01: {
        ONE: string;
      }
      ARROW02: {
        ONE: string;
      }
      SCRAPE: {
        ONE: string;
      }
      PROFILE: {
        ONE: string;
      }
      WRITE: {
        ONE: string;
      }
      COMMENT: {
        ONE: string;
      },
      MORE: {
        ONE: string;
      },
      VIEW: {
        ONE: string;
      },
      VIDEO: {
        ONE: string;
        TWO: string;
      }
    }
  }
}


// // You are also able to use a 3rd party theme this way:
// import '@emotion/react'
// import { MuiTheme } from 'material-ui'

// declare module '@emotion/react' {
//   export interface Theme extends MuiTheme {}
// }