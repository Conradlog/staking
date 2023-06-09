import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { RoadLine } from 'modules/landing/components';
import { FontFamilies, FontWeights } from 'theme/Typography';
import { BG_MAIN, BORDER_RADIUS_ROAD_CARD, SHADOW_ROAD_CARD } from 'theme/variables';

import { roadCards } from './Road.helpers';

export const Road: FC = () => {
  return (
    <Box pt={8} mt={{ xs: 4, sm: 4, md: 0 }} sx={{ position: 'relative' }}>
      <Grid container direction="column" justifyContent="flex-start" alignItems="center" pb={14}>
        <RoadLine />
        <Grid item pb={2}>
          <Typography variant="h1" textAlign="center">
            Why Cronos Chain?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            maxWidth="578px"
            fontFamily={FontFamilies.primary}
            fontWeight={FontWeights.fontWeightRegular}
          >
            Cronos Chain is a decentralized permissionl ss blockchain with high speed and low fees, designed to drive
            mass adoption of blockchain technology.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        display={{ xs: 'flex', sm: 'flex', md: 'grid' }}
        justifyContent={{ xs: 'center', sm: 'center', md: 'space-between' }}
        gridTemplateColumns={{ xs: '1fr', sm: '1fr', md: 'repeat(2, 360px)' }}
        rowSpacing={4.5}
        columnGap={{ xs: 4.5, sm: 4.5, md: 0, lg: 0 }}
      >
        {roadCards.map(({ id, title, Image, text }) => (
          <Grid key={id} item>
            <Box
              width={{ xs: '342px', sm: '342px', md: '360px' }}
              height={{ xs: '391px', sm: '391px', md: '452px' }}
              sx={{
                p: 4.5,
                background: BG_MAIN,
                boxShadow: SHADOW_ROAD_CARD,
                borderRadius: BORDER_RADIUS_ROAD_CARD,
              }}
            >
              <Image />
              <Typography variant="h4" sx={{ pt: 4.5, pb: 3, textTransform: 'uppercase' }}>
                {title}
              </Typography>
              <Typography fontSize={{ xs: '16px', sm: '16px', md: '18px' }} fontWeight={FontWeights.fontWeightRegular}>
                {text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
