import { BG_BLUE_LIGHT, BG_GRAY } from 'theme/variables';

import { ColorProps, VariantProps } from './RowCard.types';

const colorState: Record<ColorProps, string> = {
  gray: BG_GRAY,
  blue: BG_BLUE_LIGHT,
  transparent: 'none',
};

const sizeState: Record<VariantProps, number> = {
  project: 3.5,
  rank: 2,
  stakes: 1,
};

export const rowCardStyleState = {
  color: colorState,
  size: sizeState,
};
