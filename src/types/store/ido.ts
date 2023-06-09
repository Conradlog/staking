import { Ido } from 'types/api/Ido';

export type VestingInfoProps = {
  startUnlockPercent: string;
  unlockPercent: string;
  unlockStepTime: string;
};

export type IdoState = {
  ido: {
    count: number;
    idos: Ido[];
  };
  currentIdo: Ido;
  userInfo: {
    userAllocation: string | null;
    payed: string;
    bought: string;
    claimAmount: string[];
    totalBought: string;
    contractHardCap: string;
  };
  vestingInfo: VestingInfoProps;
  isLiqAdded: boolean;
};
