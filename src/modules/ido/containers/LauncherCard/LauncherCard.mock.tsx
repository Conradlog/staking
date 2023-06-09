import { noop } from 'lodash';
import { Color } from 'types/api/enums';

import { LauncherCardProps } from './LauncherCard';

export const launcherCardPropsMocked: LauncherCardProps = {
  userAddress: 'q3fsdfgdf',
  isRegistration: false,
  isGettingInvestmentsInfo: false,
  isCanAddLiquidity: false,
  isAddingLiquidity: false,
  isClaiming: false,
  isRefunding: false,
  onAddLiquidity: () => noop,
  totalBought: '123',
  projectData: {
    id: 1,
    maxBuyPercent: '20.00',
    timer: '1657700814',
    videoUrl: '',
    logoUrl: 'https://devcronos.rocknblock.io/media/logos/linkedin.png',
    projectName: 'KHB7sPwf',
    tokenName: 'IiQ8zh1eZX',
    tokenSymbol: 'IiQ',
    totalSupply: '9934514',
    tokenAddress: '0x43bA502a34D66BAd37122E84da4697B900Ef55d2',
    type: 'public',
    vesting: false,
    startUnlockPercent: 0,
    unlockPercent: 0,
    unlockStepTime: 0,
    start: '1657700814',
    end: '1658305614',
    liquidityAddedTime: '1658305614',
    price: 53,
    status: 'PENDING',
    softCap: '77544',
    hardCap: '9934514',
    totalBought: '0',
    owner: 2,
    ownerAddress: '0x491539D6d1c59D1502c5a16dc6DF8D140a9dD177',
    discord: '',
    medium: '',
    telegram: '',
    twitter: '',
    tokenomics: [
      {
        title: '123',
        percent: 123,
        color: Color['#5E99F5'],
        id: 1,
      },
    ],
    lotteryParams: [],
    partners: [],
    team: [],
    projectSummary: '',
    roadmap: '',
    tokenLogoUrl: '',
    investor: '',
    decimals: 18,
    investors: '',
    targetedRaise: '',
    idoIncrement: 1,
  },
  userAllocation: '',
};
