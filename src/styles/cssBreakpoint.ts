import { FlattenSimpleInterpolation } from 'styled-components';

export const breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

type screenBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * bootstrap breakpoints for css
 * @param 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param css:  css function from styled component or string
 */
export const cssBreakpoint = {
  up: (
    key: screenBreakpoint,
    css: string | FlattenSimpleInterpolation,
  ): string => {
    return `@media (min-width: ${breakpoint[key]}px){${css}}`;
  },

  down: (
    key: screenBreakpoint,
    css: string | FlattenSimpleInterpolation,
  ): string => {
    return `@media (max-width:${breakpoint[key]}px){${css}}`;
  },

  between: (
    start: screenBreakpoint,
    end: screenBreakpoint,
    css: string | FlattenSimpleInterpolation,
  ): string => {
    return `@media (min-width:${breakpoint[start]}) and (max-width:${breakpoint[end]}){${css}}`;
  },
};
