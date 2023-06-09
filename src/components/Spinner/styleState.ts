import { CSSProperties } from 'react';

import { SpinnerSizeProps } from './Spinner.types';

const sizeState: Record<SpinnerSizeProps, CSSProperties> = {
  s: {
    width: '87px',
  },
  xl: {
    width: '600px',
  },
};

export const spinnerStyleState = {
  size: sizeState,
};
