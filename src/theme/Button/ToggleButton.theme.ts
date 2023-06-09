import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { FontFamilies } from 'theme/Typography';
import {
  BG_BUTTON_BLUE,
  BORDER_BUTTON_GRAY,
  BORDER_RADIUS_DEFAULT,
  COLOR_TEXT_BLACK,
  COLOR_TEXT_WHITE,
} from 'theme/variables';

export const getMuiToggleButtonOverrides = (theme: Theme): ComponentsOverrides['MuiToggleButton'] => ({
  root: {
    margin: `${theme.spacing(0.5)} !important`,
    height: '44px',
    minWidth: '155px',
    background: 'transparent',
    border: BORDER_BUTTON_GRAY,
    borderRadius: BORDER_RADIUS_DEFAULT,
    color: COLOR_TEXT_BLACK,
    fontSize: 16,
    fontFamily: FontFamilies.secondary,
    fontWeight: 700,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      minWidth: 'auto',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      minWidth: 'auto',
      width: '100%',
    },

    '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
      borderRadius: BORDER_RADIUS_DEFAULT,
      border: BORDER_BUTTON_GRAY,
    },
    '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
      borderRadius: BORDER_RADIUS_DEFAULT,
      border: BORDER_BUTTON_GRAY,
    },

    '&.MuiToggleButton-root.Mui-selected': {
      background: BG_BUTTON_BLUE,
      border: 'none',
      borderRadius: BORDER_RADIUS_DEFAULT,
      color: COLOR_TEXT_WHITE,
    },
  },
});

export const getMuiToggleButtonDefaultProps = (): ComponentsProps['MuiToggleButton'] => ({});
