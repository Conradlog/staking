import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material';
import {
  getMuiButtonDefaultProps,
  getMuiButtonOverrides,
  getMuiIconButtonDefaultProps,
  getMuiIconButtonOverrides,
  getMuiToggleButtonDefaultProps,
  getMuiToggleButtonOverrides,
} from 'theme/Button';
import { getMuiContainerDefaultProps, getMuiContainerOverrides } from 'theme/Container';
import { breakpointOptions, getMuiGridDefaultProps, getMuiGridOverrides } from 'theme/Grid';
import { getTypographyOptions } from 'theme/Typography';
import { COLOR_TEXT_BLACK } from 'theme/variables';

import { getMuiLoadingButtonDefaultProps, getMuiLoadingButtonOverrides } from './Button/LoadingButton.theme';
import { getMuiAccordion, getMuiAccordionDetails, getMuiAccordionPropsDefaultProps } from './Accordion';
import { getMuiBackdropDefaultProps, getMuiBackdropOverrides } from './Backdrop';
import { getMuiBreadcrumbsDefaultProps, getMuiBreadcrumbsOverrides } from './Breadcrumbs';
import { getMuiCssBaselineDefaultProps, getMuiCssBaselineOverrides } from './CssBaseLine';
import { getMuiDialogDefaultProps, getMuiDialogOverrides } from './Dialog';
import { getMuiLinkDefaultProps, getMuiLinkOverrides } from './Link';
import { getMuiPopoverDefaultProps, getMuiPopoverOverrides } from './Popover';
import { getMuiSelectDefaultProps, getMuiSelectOverrides } from './Select';
import { getMuiTextFieldDefaultProps, getMuiTextFieldOverrides } from './TextField';

const themeBase = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLOR_TEXT_BLACK,
    },
  },
  typography: getTypographyOptions(),
  breakpoints: breakpointOptions,
});

export const theme = createTheme(themeBase, {
  components: {
    MuiCSSBaseLine: {
      defaultProps: getMuiCssBaselineDefaultProps(),
      styleOverrides: getMuiCssBaselineOverrides(themeBase),
    },
    MuiGrid: {
      defaultProps: getMuiGridDefaultProps(),
      styleOverrides: getMuiGridOverrides(),
    },
    MuiContainer: {
      defaultProps: getMuiContainerDefaultProps(),
      styleOverrides: getMuiContainerOverrides(),
    },
    MuiBackdrop: {
      defaultProps: getMuiBackdropDefaultProps(),
      styleOverrides: getMuiBackdropOverrides(themeBase),
    },
    MuiButton: {
      defaultProps: getMuiButtonDefaultProps(),
      styleOverrides: getMuiButtonOverrides(themeBase),
    },
    MuiIconButton: {
      defaultProps: getMuiIconButtonDefaultProps(),
      styleOverrides: getMuiIconButtonOverrides(),
    },
    MuiToggleButton: {
      defaultProps: getMuiToggleButtonDefaultProps(),
      styleOverrides: getMuiToggleButtonOverrides(themeBase),
    },
    MuiLoadingButton: {
      defaultProps: getMuiLoadingButtonDefaultProps(),
      styleOverrides: getMuiLoadingButtonOverrides(),
    },
    MuiDialog: {
      defaultProps: getMuiDialogDefaultProps(),
      styleOverrides: getMuiDialogOverrides(),
    },
    MuiPopover: {
      defaultProps: getMuiPopoverDefaultProps(),
      styleOverrides: getMuiPopoverOverrides(themeBase),
    },
    MuiBreadcrumbs: {
      defaultProps: getMuiBreadcrumbsDefaultProps(),
      styleOverrides: getMuiBreadcrumbsOverrides(),
    },
    MuiSelect: {
      defaultProps: getMuiSelectDefaultProps(),
      styleOverrides: getMuiSelectOverrides(themeBase),
    },
    MuiTextField: {
      defaultProps: getMuiTextFieldDefaultProps(),
      styleOverrides: getMuiTextFieldOverrides(themeBase),
    },
    MuiLink: {
      defaultProps: getMuiLinkDefaultProps(),
      styleOverrides: getMuiLinkOverrides(themeBase),
    },
    MuiAccordion: {
      defaultProps: getMuiAccordionPropsDefaultProps(),
      styleOverrides: getMuiAccordion(themeBase),
    },
    MuiAccordionDetails: {
      styleOverrides: getMuiAccordionDetails(themeBase),
    },
  },
});
