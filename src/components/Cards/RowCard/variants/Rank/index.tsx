import { FC } from 'react';
import { Grid, styled, Typography } from '@mui/material';
import { CopyText, GrowRate, RankInfo } from 'components';
import { COLOR_TEXT_GRAY_DARK } from 'theme/variables';
import { RankCardDataProps } from 'types';
import { dateFormatter, shortenPhrase } from 'utils';

import { RowCardProps } from '../../RowCard';

const RowTitleText = styled(Typography)(({ theme }) => ({
  display: 'none',
  fontSize: '14px',
  color: COLOR_TEXT_GRAY_DARK,

  [theme.breakpoints.down('md')]: { display: 'block' },
}));

export const Rank: FC<Pick<RowCardProps, 'cardData'>> = ({ cardData }) => {
  const { rankId, isGrow, walletAddress, stakedAmount, buyDate }: RankCardDataProps = cardData;
  return (
    <>
      <Grid container justifyContent="flex-start" alignItems="center" wrap="nowrap" columnGap={1}>
        {rankId && (
          <>
            <Grid item>
              <RowTitleText>Rank</RowTitleText>
              <RankInfo rankId={rankId} isCard />
            </Grid>
            {isGrow !== undefined && (
              <Grid item>
                <GrowRate growAmount={1} isGrow={isGrow} />
              </Grid>
            )}
          </>
        )}
      </Grid>

      {walletAddress && (
        <Grid item md={2} xs={6} container direction="column">
          <Grid item>
            <RowTitleText>Wallet Address</RowTitleText>
          </Grid>

          <Grid item container alignItems="center" spacing={1} wrap="nowrap">
            <Grid item>
              <Typography
                variant="body2"
                textTransform="none"
                sx={(theme) => ({
                  [theme.breakpoints.down('md')]: {
                    maxWidth: '100px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                })}
              >
                {shortenPhrase(walletAddress, 10, 10)}
              </Typography>
            </Grid>

            <Grid item>
              <CopyText text={walletAddress} variant="icon" />
            </Grid>
          </Grid>
        </Grid>
      )}
      {stakedAmount && (
        <Grid item md={2} xs={6}>
          <RowTitleText>Amount Staked</RowTitleText>
          <Typography variant="body2" textTransform="none">
            {stakedAmount} CRO
          </Typography>
        </Grid>
      )}
      {buyDate && (
        <Grid item md={2} xs={6}>
          <RowTitleText>Last Staked</RowTitleText>
          <Typography variant="body2" textTransform="none">
            {dateFormatter(buyDate)}
          </Typography>
        </Grid>
      )}
    </>
  );
};
