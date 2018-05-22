import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { createUser, getUser } from '../services/registered';

export default {

  namespace: 'digitalMediaArtTeam',

  state: {
    user: [],
    loading: true
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/digitalMediaArtTeam').exec(pathname);
        if (match) {
          const path = pathname.split('/')[1]
          dispatch({ type: 'getProfile', payload: path })
        }
      })
    }
  },

  effects: {
    * getProfile({ payload }, { call, put }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getUser, payload);
      if (!err) {
        yield put({ type: 'save', payload: data })
        yield put({ type: 'endSpin' })
      } else {
        console.log(err)
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
    }
  }

};
