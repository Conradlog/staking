import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, BoxProps, Button, Typography } from '@mui/material';
import { routes } from 'appConstants';
import { RankIcon } from 'components/Icon/components';
import { isFunction } from 'lodash';
import { BG_BUTTON_GRAY_DARK, BG_GRAY_LIGHT, COLOR_TEXT_BLUE } from 'theme/variables';

import { rankColors, styleHelper } from './Rank.helpers';
import { UserStakingRankIds } from './Rank.types';

export interface RankInfoProps {
  rankId?: UserStakingRankIds;
  subtitle?: string;
  size?: 's' | 'm';
  type?: 'card' | 'account' | 'icon' | 'rank';
  hideText?: boolean;
  onClick?: () => void;
}

export const RankInfo: FC<RankInfoProps & Pick<BoxProps, 'sx'>> = ({
  rankId = 1,
  size,
  subtitle,
  type = 'icon',
  hideText,
  onClick,
  sx,
}) => {
  const currentRank = rankColors.find(({ id }) => id === rankId);

  return (
    <Box
      sx={(theme) => {
        // TODO: https://manzoni.atlassian.net/jira/software/projects/CRON/boards/160?assignee=60d5a3f3f6505400697aa5fa%2C613f02d449f7bd006889717f&selectedIssue=CRON-52
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sxProps: any = isFunction(sx) ? sx(theme) : sx;
        return {
          display: 'flex',
          alignItems: 'center',
          ...sxProps,
        };
      }}
    >
      <Box position="relative">
        <RankIcon
          sx={{
            width: size === 'm' ? 70 : 35,
            height: size === 'm' ? 80 : 40,
          }}
          stopColorOne={currentRank?.stopColorOne}
          stopColorTwo={currentRank?.stopColorTwo}
        />
        {type === 'rank' && (
          <Typography
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: BG_GRAY_LIGHT,
              width: 25,
              height: 25,
            }}
            variant="h2"
            align="center"
          >
            {rankId}
          </Typography>
        )}
      </Box>

      {type !== 'icon' && type !== 'rank' && (
        <Box ml={size === 'm' ? 3 : 2}>
          {subtitle && (
            <Typography
              sx={{ color: hideText ? 'transparent' : styleHelper[type].subtitleColor }}
              variant={size === 'm' ? 'body1' : 'subtitle1'}
            >
              {subtitle}
            </Typography>
          )}

          <Box>
            {/* For large page info version */}
            {size === 'm' ? (
              <Typography sx={{ color: hideText ? 'transparent' : styleHelper[type].rankColor }} variant="h1">
                {currentRank?.title}
              </Typography>
            ) : (
              <Link to={rankId === 0 ? routes.staking.root.path : routes.staking.ranking.root.path} onClick={onClick}>
                {/* For small popover onClick version */}
                {rankId !== 0 && (
                  <Typography sx={{ color: hideText ? 'transparent' : styleHelper[type].rankColor }} variant="h4">
                    {currentRank?.title}
                  </Typography>
                )}

                {rankId === 0 && (
                  <Button
                    color="secondary"
                    sx={{
                      width: '128px',
                      height: '22px',
                      fontSize: '12px',
                      color: COLOR_TEXT_BLUE,
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                      textTransform: 'none',
                      '&:hover': {
                        background: BG_BUTTON_GRAY_DARK,
                      },
                    }}
                  >
                    {currentRank?.title}
                  </Button>
                )}
              </Link>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
