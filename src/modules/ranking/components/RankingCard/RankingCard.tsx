import { FC, useRef, useState } from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { rankColors, RankInfo, UserStakingRankIds } from 'components';
import {
  COLOR_LIGHT_BLUE,
  COLOR_TEXT_BLUE,
  COLOR_TEXT_GRAY_EXTRALIGHT,
  COLOR_TEXT_WHITE,
  TRANSITION_DEFAULT_TIME,
} from 'theme/variables';
import { Nullable } from 'types';

export interface RankingCardProps {
  rankId: UserStakingRankIds;
  description: string;
  stakedTokens: string;
  poolWeight: string;
}

type BoxWithBottomBorderProps = {
  isBorder?: boolean;
  isTopPadding?: boolean;
};

const BoxWithBottomBorder = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isBorder' && prop !== 'isTopPadding',
})<BoxWithBottomBorderProps>(({ theme, isBorder, isTopPadding }) => ({
  borderBottom: `1px solid ${isBorder ? COLOR_TEXT_GRAY_EXTRALIGHT : 'none'}`,
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(isTopPadding ? 2 : 0),
}));

export const RankingCard: FC<RankingCardProps> = ({ rankId, description, stakedTokens, poolWeight }) => {
  const currentRank = rankColors.find(({ id }) => id === rankId);

  const [isExpanded, setExpanded] = useState(false);

  const detailsBoxRef = useRef<Nullable<HTMLDivElement>>(null);
  return (
    <Box
      sx={(theme) => ({
        transition: TRANSITION_DEFAULT_TIME,
        padding: theme.spacing(2, 3, 3),
        background: isExpanded ? COLOR_TEXT_WHITE : COLOR_LIGHT_BLUE,
        borderRadius: 8,
        border: `1px solid ${isExpanded ? COLOR_TEXT_GRAY_EXTRALIGHT : 'transparent'}`,
        '*': {
          transition: TRANSITION_DEFAULT_TIME,
        },
      })}
    >
      <BoxWithBottomBorder
        isBorder
        sx={{
          pl: isExpanded ? '0' : 'calc(50% - 40px)',
          position: 'relative',
          borderBottomColor: isExpanded ? COLOR_TEXT_GRAY_EXTRALIGHT : COLOR_TEXT_BLUE,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <RankInfo rankId={rankId} type="card" size="m" hideText={!isExpanded} />
      </BoxWithBottomBorder>
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="h4"
          sx={{
            mb: isExpanded ? 0 : 1,
            height: isExpanded ? 0 : 25,
            color: isExpanded ? COLOR_TEXT_WHITE : COLOR_TEXT_BLUE,
          }}
        >
          {currentRank?.title}
        </Typography>
        <Box
          ref={detailsBoxRef}
          sx={{
            maxHeight: isExpanded ? detailsBoxRef.current?.scrollHeight : 40,
            overflow: 'hidden',
          }}
        >
          <BoxWithBottomBorder isBorder>
            <Typography className="s">{description}</Typography>
          </BoxWithBottomBorder>
          <BoxWithBottomBorder isBorder isTopPadding>
            <Typography variant="body2" sx={{ pb: 2 }}>
              Full staked tokens
            </Typography>
            <Typography
              variant="h2"
              color={COLOR_TEXT_BLUE}
              noWrap
              sx={(theme) => ({
                maxWidth: { xs: 255, sm: 255, md: 'auto' },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '26px',
                },
              })}
            >
              {stakedTokens}
            </Typography>
          </BoxWithBottomBorder>
          <BoxWithBottomBorder
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2">Pool weight</Typography>
            <Typography variant="h2" color={COLOR_TEXT_BLUE}>
              {poolWeight}
            </Typography>
          </BoxWithBottomBorder>
        </Box>
        <Button variant="text" className="secondary" onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? 'Show less' : 'Learn more ...'}
        </Button>
      </Box>
    </Box>
  );
};
