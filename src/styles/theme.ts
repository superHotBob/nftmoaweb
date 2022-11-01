import styled from '@emotion/styled';
import LIGHT from './@theme/Light';
import DARKEN from './@theme/Darken';

export const theme = {
  light: {
    COLORS: LIGHT.COLORS,
    SIZE: LIGHT.SIZE,
    BUTTONS: LIGHT.BUTTONS,
    TEXTS: LIGHT.TEXTS,
    ICONS: LIGHT.ICONS
  },
  darken: {
    COLORS: DARKEN.COLORS,
    SIZE: DARKEN.SIZE,
    BUTTONS: DARKEN.BUTTONS,
    TEXTS: DARKEN.TEXTS,
    ICONS: DARKEN.ICONS
  }
};
export type themeTypes = 'light' | 'darken';

export default styled;
