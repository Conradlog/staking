import { CronosMockLogo } from 'assets/img';
import { ProjectCardDataProps, RankCardDataProps } from 'types';

export const investmentsMockData: ProjectCardDataProps[] = [
  {
    id: 1,
    projectName: 'CRONOS LAUNCHER',
    projectIcon: CronosMockLogo,
    token: {
      name: 'Cronos Launcher',
      symbol: 'CRO',
      icon: CronosMockLogo,
    },
    boughtAmount: '100,000',
    status: 'progress',
  },
  {
    id: 2,
    projectName: 'CRONOS LAUNCHER',
    projectIcon: CronosMockLogo,
    token: {
      name: 'Cronos Launcher',
      symbol: 'CRO',
      icon: CronosMockLogo,
    },
    boughtAmount: '100,000',
    status: 'loading',
  },
];

export const investmentsRankMockData: RankCardDataProps[] = [
  {
    id: 1,
    rankIcon: CronosMockLogo,
    walletAddress: '0x4064a8586217ffbc6ac72aad9eef5e7198c13cb7',
    stakedAmount: '100,000',
    buyDate: new Date(Date.UTC(2022, 7, 16)).getTime(),
    isGrow: true,
  },
  {
    id: 2,
    rankIcon: CronosMockLogo,
    walletAddress: '0x4064a8586217ffbc6ac72aad9eef5e7198c13cb7',
    stakedAmount: '100,000',
    buyDate: new Date(Date.UTC(2022, 7, 16)).getTime(),
    isGrow: true,
  },
  {
    id: 3,
    rankIcon: CronosMockLogo,
    walletAddress: '0x4064a8586217ffbc6ac72aad9eef5e7198c13cb7',
    stakedAmount: '100,000',
    buyDate: new Date(Date.UTC(2022, 7, 16)).getTime(),
    isGrow: false,
  },
];