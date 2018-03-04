import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import _ from 'lodash'
import { getStudioList } from '../services/studio';
import { getNews } from '../services/news';
import { getAll } from '../services/ventureProject'

export default {

  namespace: 'rightSide',

  state: {
    data: {
      studio: null,
      news: null
    },
    loading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/*').exec(pathname);
        if (match) {
          dispatch({ type: 'getList' })
          dispatch({ type: 'getProject' })
        }
      })
    }
  },

  effects: {
    * getList({ payload }, { call, put, select }) {
      const { data } = yield select(state => state.rightSide)
      const { studio, news } = data
      if (!studio && !news) {
        yield put({ type: 'startSpin' })
        const { data, err } = yield call(getNews)
        if (!err) {
          yield put({ type: 'saveNewsRecord', payload: data })
          yield put({ type: 'getStudio' })
          yield put({ type: 'endSpin' })
        }
      }
    },
    * getStudio({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getStudioList)
      if (!err) {
        yield put({ type: 'saveStudioRecord', payload: data })
        yield put({ type: 'endSpin' })
      }
    },
    * getProject({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getAll)
      if (!err) {
        yield put({ type: 'saveProjectRecord', payload: data })
        yield put({ type: 'endSpin' })
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
    saveStudioRecord(state, { payload }) {
      return { ...state, data: { ...state.data, studio: payload } }
    },
    saveNewsRecord(state, { payload }) {
      return { ...state, data: { ...state.data, news: payload } }
    },
    saveProjectRecord(state, { payload }) {
      return { ...state, data: { ...state.data, project: payload } }
    }
  }

};
