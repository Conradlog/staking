import { TypographyOptions } from '@mui/material/styles/createTypography';
import { COLOR_TEXT_BLACK } from 'theme/variables';

export enum FontWeights {
  fontWeightRegular = 400,
  fontWeightMedium = 500,
}

export enum FontFamilies {
  primary = '"Inter", sans-serif',
  secondary = '"Nasalization", sans-serif',
}

export const getTypographyOptions = (): TypographyOptions => ({
  fontFamily: FontFamilies.primary,

  allVariants: {
    color: COLOR_TEXT_BLACK,
    fontWeight: FontWeights.fontWeightRegular,
    textAlign: 'left',
    fontStyle: 'normal',
  },

  h1: {
    fontSize: '36px',
    lineHeight: '42px',
    fontWeight: FontWeights.fontWeightRegular,
    fontFamily: FontFamilies.secondary,
  },

  h2: {
    fontSize: '30px',
    lineHeight: '24px',
    fontWeight: FontWeights.fontWeightRegular,
    fontFamily: FontFamilies.secondary,
  },

  h3: {
    fontSize: '24px',
    lineHeight: '34px',
    fontWeight: FontWeights.fontWeightRegular,
    fontFamily: FontFamilies.secondary,
  },

  h4: {
    fontSize: '20px',
    lineHeight: '23px',
    fontWeight: FontWeights.fontWeightRegular,
    fontFamily: FontFamilies.secondary,
  },

  body1: {
    fontSize: '18px',
    lineHeight: '30px',
    fontWeight: FontWeights.fontWeightRegular,
    fontFamily: FontFamilies.primary,

    '&.s': {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: FontWeights.fontWeightRegular,
    },
  },

  body2: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: FontWeights.fontWeightMedium,
    fontFamily: FontFamilies.primary,
  },

  subtitle1: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: FontWeights.fontWeightMedium,
    fontFamily: FontFamilies.primary,
  },
});
