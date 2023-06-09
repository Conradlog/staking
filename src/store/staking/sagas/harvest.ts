import { select } from 'redux-saga/effects';
import { ContractsNames } from 'services/WalletService/config';
import { notifyText } from 'services/WalletService/config/constants';
import { error, request, success } from 'store/api/actions';
import userSelector from 'store/user/selectors';
import { call, put, takeLatest } from 'typed-redux-saga';
import { UserState } from 'types';
import { StakingAbi } from 'types/contracts';
import { getContractDataByItsName, getToastMessage } from 'utils';

import { onHarvest } from '../actions';
import actionTypes from '../actionTypes';

import { getUserStakesSaga } from './getUserStakes';

export function* harvestSaga({ type, payload: { web3Provider, stakeIndex } }: ReturnType<typeof onHarvest>) {
  yield put(request(type));
  const { address, chainType }: UserState = yield select(userSelector.getUser);
  const [stakingAbi, stakingContractAddress] = getContractDataByItsName(ContractsNames.staking, chainType);

  try {
    const stakingContract: StakingAbi = yield new web3Provider.eth.Contract(stakingAbi, stakingContractAddress);

    yield call(stakingContract.methods.harvest(stakeIndex).send, {
      from: address,
    });

    yield call(getUserStakesSaga, {
      type: actionTypes.GET_USER_STAKES,
      payload: { web3Provider },
    });

    yield put(success(type));
    getToastMessage('success', notifyText.harvest.success);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    getToastMessage('error', notifyText.harvest.error);
    yield put(error(type));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.HARVEST, harvestSaga);
}
