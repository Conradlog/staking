import { RankCardDataProps } from 'components/Cards/RowCard/RowCard.types';
import { useShallowSelector } from 'hooks';
import stakingSelector from 'store/staking/selectors';
import { fromDecimals } from 'utils';

export const useUpdateDataForLeaderBoards = (): RankCardDataProps[] => {
  const topInvestors = useShallowSelector(stakingSelector.getProp('topInvestors'));

  return topInvestors.map(({ address, lastStaked, stakeAmount, positionDelta }, index) => {
    return {
      id: index,
      rankId: 1,
      walletAddress: address,
      stakedAmount: fromDecimals(stakeAmount),
      buyDate: lastStaked,
      growAmount: positionDelta,
    };
  });
};
