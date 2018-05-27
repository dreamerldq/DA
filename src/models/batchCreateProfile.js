import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { createUser, getUser } from '../services/registered';

export default {

  namespace: 'batchCreateProfile',

  state: {
    user: [],
    loading: true
  },

  subscriptions: {
  },

  effects: {
    * createProfile({ payload }, { call, put }) {
      yield put({ type: 'saveDataSource', payload })
      yield put({ type: 'create', payload: 0 })
    },
    * create({ payload }, { call, put, select }) {
      const { dataSource } = yield select(state => state.batchCreateProfile)
      let count = payload
      if (count <= dataSource.length - 1) {
        const { data, err } = yield call(createUser, { user: dataSource[count] });
        if (!err) {
          count += 1
          yield put({ type: 'create', payload: count })
        }
      }
    }

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, user: payload };
    },
    startSpin(state, { payload }) {
      return { ...state, loading: true }
    },
    endSpin(state, { payload }) {
      return { ...state, loading: false }
    },
    saveDataSource(state, { payload }) {
      return { ...state, dataSource: payload || [] }
    }
  }

};
