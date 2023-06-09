import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CircleChart } from 'modules/ido/components';
import { ProjectDataProps } from 'modules/ido/pages/Details/Details.types';
import { formatTokenomicsKeyNames } from 'modules/ido/utils';
import { FontFamilies } from 'theme/Typography';
import { BG_GRAY, BORDER_RADIUS_DEFAULT } from 'theme/variables';

export const Tokenomics: FC<ProjectDataProps> = ({ projectData }) => {
  const { tokenomics } = projectData;
  const formatedTokenomicsData = formatTokenomicsKeyNames(tokenomics);

  return (
    <Box p={1}>
      <Typography variant="h2" fontSize="22px" mb={3}>
        Tokenomics
      </Typography>
      <Grid
        container
        justifyContent={{ xs: 'center', sm: 'center', md: 'space-between' }}
        alignItems="center"
        sx={{
          p: { xs: 2, sm: 2, md: 3 },
          background: BG_GRAY,
          borderRadius: BORDER_RADIUS_DEFAULT,
        }}
      >
        <CircleChart chartData={formatedTokenomicsData} />

        <Grid item container mt={{ xs: 1, sm: 1, md: 0 }} spacing={2} xs={12} md={5}>
          {formatedTokenomicsData.map(({ title, value, color }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid key={index} item container alignItems="flex-start" xs={6}>
              <Box sx={{ mt: 0.7, width: '12px', height: '12px', background: color, borderRadius: '50%' }} />
              <Box ml={1}>
                <Typography variant="body2">{title}</Typography>
                <Typography variant="body2" fontFamily={FontFamilies.secondary}>
                  {value} %
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
