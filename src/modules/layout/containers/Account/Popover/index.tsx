import { FC, RefObject } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Popover, styled, Typography } from '@mui/material';
import { CopyText, RankInfo } from 'components';
import { Close, OutIcon } from 'components/Icon/components';
import { FontFamilies, FontWeights } from 'theme/Typography';
import { BG_BLUE, BG_BUTTON_WHITE, BORDER_RADIUS_POPOVER, COLOR_TEXT_RED, COLOR_TEXT_WHITE } from 'theme/variables';

import { accountLinkItems, buyCryptoLink } from './Popover.helpers';

interface AccountModalProps {
  address: string;
  visible: boolean;
  anchorEl: RefObject<HTMLElement>;
  onClose: () => void;
  onDisconnect: () => void;
}

const DisconnectButton = styled(Button)({
  width: '100%',
  color: COLOR_TEXT_RED,
  textTransform: 'none',
  fontFamily: FontFamilies.primary,

  '&:hover': {
    background: BG_BUTTON_WHITE,
    color: COLOR_TEXT_RED,
  },
});

const BuyLinkTypography = styled(Typography)({
  color: COLOR_TEXT_WHITE,
  fontSize: '14px',
  whiteSpace: 'nowrap',
  fontWeight: FontWeights.fontWeightMedium,
  textDecoration: 'none',
});

export const AccountPopover: FC<AccountModalProps> = ({ address, anchorEl, visible, onClose, onDisconnect }) => {
  return (
    <Popover
      anchorEl={anchorEl.current}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={visible}
      onClose={onClose}
      sx={{
        '& .MuiPopover-paper': {
          mt: 1,
          px: 2.5,
          pt: 1,
          pb: 2.5,
          width: '310px',
          height: '389px',
          background: BG_BLUE,
          borderRadius: BORDER_RADIUS_POPOVER,
        },
      }}
    >
      <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" rowGap={2}>
        <Grid item container justifyContent="space-between" alignItems="center" xs={12}>
          <Typography variant="h4" color={COLOR_TEXT_WHITE}>
            Account
          </Typography>
          <Button
            variant="text"
            startIcon={<Close sx={{ maxWidth: '16px', maxHeight: '16px' }} />}
            onClick={onClose}
            sx={{ p: 0 }}
          />
        </Grid>

        <Grid item container justifyContent="space-between" alignItems="center" xs={12}>
          <RankInfo rankId={1} />

          <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start" rowSpacing={1}>
            <Typography variant="subtitle1" color={COLOR_TEXT_WHITE}>
              Network
            </Typography>
            <Typography variant="h4" color={COLOR_TEXT_WHITE}>
              Cronos
            </Typography>
          </Grid>
        </Grid>

        <CopyText size="sm" color="secondary" text={address} />

        {accountLinkItems.map(({ link, title, Icon }, index) => (
          // list is not re rendering
          // eslint-disable-next-line react/no-array-index-key
          <RouterLink key={index} to={link} onClick={onClose}>
            <Grid item container xs={12} columnGap={2}>
              <Icon />
              <Typography variant="body2" color={COLOR_TEXT_WHITE}>
                {title}
              </Typography>
            </Grid>
          </RouterLink>
        ))}

        <Link
          href={buyCryptoLink}
          target="_blank"
          rel="noreferrer"
          sx={{
            pt: 1,
            width: '100%',
            textDecoration: 'none',
          }}
        >
          <Grid container alignItems="center" columnGap={1}>
            <BuyLinkTypography variant="body2">Click here to</BuyLinkTypography>
            <BuyLinkTypography
              variant="body2"
              sx={{
                borderBottom: '1px solid',
                borderColor: COLOR_TEXT_WHITE,
                fontWeight: '900',
              }}
            >
              buy CRO
            </BuyLinkTypography>
          </Grid>
        </Link>

        <DisconnectButton color="secondary" onClick={onDisconnect} endIcon={<OutIcon />}>
          Disconnect
        </DisconnectButton>
      </Grid>
    </Popover>
  );
};
