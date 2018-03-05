import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import _ from 'lodash';
import { get, create, getAll, deleteProject, editProject } from '../services/ventureProject';

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
        const matchID = pathToRegexp('/ventureProjectCreate/:id').exec(pathname);
        const match = pathToRegexp('/ventureProjectCreate').exec(pathname);
        if (match) {
          dispatch({ type: 'clearState' })
        }
        if (matchDetail) {
          dispatch({ type: 'getVentureProject', payload: matchDetail[1] })
        }
        if (matchID) {
          dispatch({ type: 'saveID', payload: matchID[1] })
          dispatch({ type: 'getVentureProject', payload: matchID[1] })
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
    * editVentureProject({ payload }, { call, put, select }) {
      const { id } = yield select(state => state.ventureProject)
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(editProject, id, payload)
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
    },
    * deleteVentureProject({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(deleteProject, payload)
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ventureProject'
        }))
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
    },
    saveID(state, { payload }) {
      return { ...state, id: payload }
    },
    clearState(state, { payload }) {
      return { ...state, record: {} }
    }
  }

};
