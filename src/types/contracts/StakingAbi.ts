/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from 'bn.js';
import type { ContractOptions } from 'web3-eth-contract';
import type { EventLog } from 'web3-core';
import type { EventEmitter } from 'events';
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from './types';

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Harvest = ContractEventLog<{
  user: string;
  amount: string;
  0: string;
  1: string;
}>;
export type RoleAdminChanged = ContractEventLog<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleGranted = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleRevoked = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type Staked = ContractEventLog<{
  user: string;
  amount: string;
  start: string;
  poolId: string;
  level: string;
  totalStaked: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type Withdraw = ContractEventLog<{
  user: string;
  amount: string;
  poolId: string;
  earlyWithdraw: boolean;
  level: string;
  totalStaked: string;
  0: string;
  1: string;
  2: string;
  3: boolean;
  4: string;
  5: string;
}>;
export type WithdrawExcess = ContractEventLog<{
  user: string;
  amount: string;
  0: string;
  1: string;
}>;

export interface StakingAbi extends BaseContract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions): StakingAbi;
  clone(): StakingAbi;
  methods: {
    DEFAULT_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    PERCENT_BASE(): NonPayableTransactionObject<string>;

    addPool(
      newPool: [number | string | BN, number | string | BN, number | string | BN],
    ): NonPayableTransactionObject<void>;

    addressToDepositInfo(
      arg0: string,
      arg1: number | string | BN,
    ): NonPayableTransactionObject<{
      amount: string;
      start: string;
      poolId: string;
      maxUnstakeReward: string;
      rewardCollected: string;
      depositApr: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    addressToUserInfo(arg0: string): NonPayableTransactionObject<{
      totalStakedAmount: string;
      level: string;
      0: string;
      1: string;
    }>;

    aprSum(): NonPayableTransactionObject<string>;

    arsh(): NonPayableTransactionObject<string>;

    depositXArsh(amount: number | string | BN): NonPayableTransactionObject<void>;

    depositsAmount(): NonPayableTransactionObject<string>;

    emergencyWithdraw(): NonPayableTransactionObject<void>;

    feeRecipient(): NonPayableTransactionObject<string>;

    getFront(_user: string): NonPayableTransactionObject<string[][]>;

    getPoolsAmount(): NonPayableTransactionObject<string>;

    getRewardAmount(
      _user: string,
      _depositInfoId: number | string | BN,
    ): NonPayableTransactionObject<{
      0: string;
      1: boolean;
    }>;

    getRoleAdmin(role: string | number[]): NonPayableTransactionObject<string>;

    getTotalStakeBatch(_users: string[]): NonPayableTransactionObject<string[]>;

    getTvlAndApr(): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
    }>;

    getWeight(_user: string): NonPayableTransactionObject<string>;

    getWeightBatch(_users: string[]): NonPayableTransactionObject<string[]>;

    grantRole(role: string | number[], account: string): NonPayableTransactionObject<void>;

    harvest(_depositInfoId: number | string | BN): NonPayableTransactionObject<void>;

    harvestAll(): NonPayableTransactionObject<void>;

    hasRole(role: string | number[], account: string): NonPayableTransactionObject<boolean>;

    levelToWeight(arg0: number | string | BN): NonPayableTransactionObject<string>;

    lockedAmount(): NonPayableTransactionObject<string>;

    numOfStakers(): NonPayableTransactionObject<string>;

    pools(arg0: number | string | BN): NonPayableTransactionObject<{
      apr: string;
      timeLockUp: string;
      commission: string;
      0: string;
      1: string;
      2: string;
    }>;

    renounceRole(role: string | number[], account: string): NonPayableTransactionObject<void>;

    revokeRole(role: string | number[], account: string): NonPayableTransactionObject<void>;

    rewardAmount(): NonPayableTransactionObject<string>;

    setApr(_poolId: number | string | BN, _apr: number | string | BN): NonPayableTransactionObject<void>;

    setCommission(_poolId: number | string | BN, _commission: number | string | BN): NonPayableTransactionObject<void>;

    stake(_poolId: number | string | BN, amount: number | string | BN): NonPayableTransactionObject<void>;

    stakeToLevel(arg0: number | string | BN): NonPayableTransactionObject<string>;

    stakedAmount(): NonPayableTransactionObject<string>;

    supportsInterface(interfaceId: string | number[]): NonPayableTransactionObject<boolean>;

    totalValueLocked(): NonPayableTransactionObject<string>;

    withdraw(_depositInfoId: number | string | BN): NonPayableTransactionObject<void>;

    withdrawExcess(amount: number | string | BN): NonPayableTransactionObject<void>;

    xarsh(): NonPayableTransactionObject<string>;
  };
  events: {
    Harvest(cb?: Callback<Harvest>): EventEmitter;
    Harvest(options?: EventOptions, cb?: Callback<Harvest>): EventEmitter;

    RoleAdminChanged(cb?: Callback<RoleAdminChanged>): EventEmitter;
    RoleAdminChanged(options?: EventOptions, cb?: Callback<RoleAdminChanged>): EventEmitter;

    RoleGranted(cb?: Callback<RoleGranted>): EventEmitter;
    RoleGranted(options?: EventOptions, cb?: Callback<RoleGranted>): EventEmitter;

    RoleRevoked(cb?: Callback<RoleRevoked>): EventEmitter;
    RoleRevoked(options?: EventOptions, cb?: Callback<RoleRevoked>): EventEmitter;

    Staked(cb?: Callback<Staked>): EventEmitter;
    Staked(options?: EventOptions, cb?: Callback<Staked>): EventEmitter;

    Withdraw(cb?: Callback<Withdraw>): EventEmitter;
    Withdraw(options?: EventOptions, cb?: Callback<Withdraw>): EventEmitter;

    WithdrawExcess(cb?: Callback<WithdrawExcess>): EventEmitter;
    WithdrawExcess(options?: EventOptions, cb?: Callback<WithdrawExcess>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: 'Harvest', cb: Callback<Harvest>): void;
  once(event: 'Harvest', options: EventOptions, cb: Callback<Harvest>): void;

  once(event: 'RoleAdminChanged', cb: Callback<RoleAdminChanged>): void;
  once(event: 'RoleAdminChanged', options: EventOptions, cb: Callback<RoleAdminChanged>): void;

  once(event: 'RoleGranted', cb: Callback<RoleGranted>): void;
  once(event: 'RoleGranted', options: EventOptions, cb: Callback<RoleGranted>): void;

  once(event: 'RoleRevoked', cb: Callback<RoleRevoked>): void;
  once(event: 'RoleRevoked', options: EventOptions, cb: Callback<RoleRevoked>): void;

  once(event: 'Staked', cb: Callback<Staked>): void;
  once(event: 'Staked', options: EventOptions, cb: Callback<Staked>): void;

  once(event: 'Withdraw', cb: Callback<Withdraw>): void;
  once(event: 'Withdraw', options: EventOptions, cb: Callback<Withdraw>): void;

  once(event: 'WithdrawExcess', cb: Callback<WithdrawExcess>): void;
  once(event: 'WithdrawExcess', options: EventOptions, cb: Callback<WithdrawExcess>): void;
}
