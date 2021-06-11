/* * * * * * * * *
 *  PLAIN COLORS
 * * * * * * * * * */

export const PRIMARY_LIGHT = '#8abedd';
export const PRIMARY = '#2d9f88';
export const PRIMARY_DARK = '#3f8699';

export const WHITE = '#FFF';
export const LIGHTER_GRAY = '#eeeeee';
export const LIGHT_GRAY = '#dedede';
export const GRAY = '#4D4D4D';
export const BLACK = '#2a2a2a';

export const SUCCESS = '#5ce82d';
export const ERROR = '#bc0c06';
export const ALERT = '#FFB60D';
export const INFO = '#0c71c3';

export type EnumColorPalette =
  | 'PRIMARY_LIGHT'
  | 'PRIMARY'
  | 'PRIMARY_DARK'
  | 'WHITE'
  | 'LIGHTER_GRAY'
  | 'LIGHT_GRAY'
  | 'GRAY'
  | 'BLACK'
  | 'SUCCESS'
  | 'ERROR'
  | 'ALERT'
  | 'INFO';

export const ColorPalette: { [index: string]: string } = {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK,
  WHITE,
  LIGHTER_GRAY,
  LIGHT_GRAY,
  GRAY,
  BLACK,
  SUCCESS,
  ERROR,
  ALERT,
  INFO,
};
