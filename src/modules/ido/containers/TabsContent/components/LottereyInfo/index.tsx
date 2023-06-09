import { FC } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import { rankColors, RankInfo, UserStakingRankIds } from 'components';
import { FontFamilies, FontWeights } from 'theme/Typography';
import {
  BG_GRAY_LIGHT,
  BORDER_ACCENT_BLUE,
  BORDER_BUTTON_BLUE,
  BORDER_GRAY_LIGHT,
  BORDER_RADIUS_DEFAULT,
  COLOR_TEXT_ACCENT_BLUE,
  COLOR_TEXT_BLACK,
  COLOR_TEXT_BLUE,
} from 'theme/variables';

import { TabsContentProps } from '../../TabsContent';

const TextTitleContainer = styled(Typography)({
  fontSize: '16px',
  lineHeight: '19px',
  color: COLOR_TEXT_BLUE,
  fontFamily: FontFamilies.secondary,
  textTransform: 'uppercase',
});

export const LottereyInfo: FC<TabsContentProps> = ({ projectData, myRankId }) => {
  const { lotteryParams } = projectData;

  return (
    <Box>
      <Typography variant="h2" fontSize="22px" mb={3}>
        Lotterey Info
      </Typography>

      <Grid container direction="column">
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 3.6, height: '60px', background: BG_GRAY_LIGHT, borderRadius: BORDER_RADIUS_DEFAULT }}
        >
          <Grid item xs={6}>
            <TextTitleContainer>Rank</TextTitleContainer>
          </Grid>
          <Grid item xs={6}>
            <TextTitleContainer>Lottery Percent</TextTitleContainer>
          </Grid>
        </Grid>

        <Grid item container direction="column" justifyContent="flex-start" alignItems="center">
          {lotteryParams.map(({ level, percent }, index) => {
            const rankId = +level + 1;
            return (
              <Grid
                // not rerendering date items
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                item
                container
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                sx={{
                  p: 2,
                  borderRadius: +myRankId === +rankId ? BORDER_RADIUS_DEFAULT : 'none',
                  borderBottom: BORDER_GRAY_LIGHT,
                  border: +myRankId === +rankId ? BORDER_BUTTON_BLUE : '',
                }}
              >
                <Grid item container justifyContent="space-between" alignItems="center" xs={6}>
                  <Grid item container justifyContent="space-between" alignItems="center">
                    <RankInfo rankId={+rankId as UserStakingRankIds} />
                    <Typography
                      ml={1}
                      fontSize={{ xs: 16, sm: 16, md: 20 }}
                      fontFamily={FontFamilies.secondary}
                      color={+myRankId === +rankId ? COLOR_TEXT_BLUE : COLOR_TEXT_BLACK}
                    >
                      {rankColors[+rankId]?.title}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item container justifyContent="space-between" alignItems="center" xs={6}>
                  <Grid item container justifyContent="space-between" xs={12}>
                    <Typography
                      fontSize={{ xs: 16, sm: 16, md: 20 }}
                      fontWeight={FontWeights.fontWeightMedium}
                      fontFamily={FontFamilies.secondary}
                      color={+myRankId === +rankId ? COLOR_TEXT_BLUE : COLOR_TEXT_BLACK}
                    >
                      {percent} %
                    </Typography>
                    {+myRankId === +rankId && (
                      <Typography
                        px={{ xs: 0.5, sm: 0.5, md: 1 }}
                        fontFamily={FontFamilies.secondary}
                        fontSize={{ xs: 14, sm: 14, md: 16 }}
                        color={COLOR_TEXT_ACCENT_BLUE}
                        border={BORDER_ACCENT_BLUE}
                        borderRadius={BORDER_RADIUS_DEFAULT}
                      >
                        your rank
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
