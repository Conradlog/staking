import { omit } from 'lodash';
import { call, select } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { baseApi } from 'store/api/apiRequestBuilder';
import idosSelector from 'store/ido/selectors';
import usersSelector from 'store/user/selectors';
import { put, takeLatest } from 'typed-redux-saga';
import { IdoState, UserState } from 'types';
import { Ido } from 'types/api/Ido';
import { camelize } from 'utils';

import { getIdoList } from '../actions';
import actionTypes from '../actionTypes';
import { updateIdoState } from '../reducer';

export function* getIdoListSaga({ type, payload }: ReturnType<typeof getIdoList>) {
  yield* put(apiActions.request(type));

  const { idos }: IdoState['ido'] = yield select(idosSelector.getProp('ido'));
  const myAddress: UserState['address'] = yield select(usersSelector.getProp('address'));

  try {
    // for owner or investor filter page
    const owner = payload.isMyIdos ? myAddress : '';
    const investor = payload.isMyInvesments ? myAddress : '';

    const {
      data: { count, result },
    } = yield call(baseApi.getIdoList, {
      ...omit(payload, 'shouldConcat', 'isMyIdos', 'isMyInvesments'),
      owner,
      investor,
    });

    const camleizedIdoData = camelize(result);

    let newIdos = camleizedIdoData;

    if (payload.shouldConcat) {
      newIdos = [...idos, ...(newIdos as Ido[])];
    }

    yield put(
      updateIdoState({
        ido: {
          idos: [...(newIdos as Ido[])],
          count,
        },
      }),
    );

    yield* put(apiActions.success(type));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    yield* put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.GET_IDO_LIST, getIdoListSaga);
}
