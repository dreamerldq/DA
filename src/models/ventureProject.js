import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import _ from 'lodash';
import { get, create, getAll } from '../services/ventureProject';

export default {

  namespace: 'ventureProject',

  state: {
    loading: true,
    record: {},
    allRecord: []

  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const matchDetail = pathToRegexp('/ventureProject/detail/:id').exec(pathname);
        const matchAll = pathToRegexp('/ventureProject').exec(pathname);
        if (matchDetail) {
          dispatch({ type: 'getVentureProject', payload: matchDetail[1] })
        }
        if (matchAll) {
          dispatch({ type: 'getAllVentureProject' })
        }
      })
    }
  },

  effects: {
    * createVentureProject({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(create, { project: payload })
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ventureProject'
        }))
      } else {
      }
    },
    * getAllVentureProject({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getAll)
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put({ type: 'savaAll', payload: data })
      } else {
      }
    },
    * getVentureProject({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(get, payload)
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put({ type: 'sava', payload: data })
      } else {
      }
    }
  },

  reducers: {
    startSpin(state, { payload }) {
      return { ...state, loading: true }
    },
    endSpin(state, { payload }) {
      return { ...state, loading: false }
    },
    sava(state, { payload }) {
      return { ...state, record: payload }
    },
    savaAll(state, { payload }) {
      return { ...state, allRecord: payload }
    }
  }

};
