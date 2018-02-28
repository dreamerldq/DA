import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'

import { getStudioList, getProfessionList, getProfession } from '../services/studio';

export default {

  namespace: 'studioIntroduction',

  state: {
    studio: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/StudioIntroduction').exec(pathname);
        if (match) {
          dispatch({ type: 'getStudioList' })
        }
      })
    }
  },

  effects: {
    * getStudioList({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getStudioList)
      if (!err) {
        yield put({ type: 'saveStudioRecord', payload: data })
        yield put({ type: 'endSpin' })
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
    saveStudioRecord(state, { payload }) {
      return { ...state, studio: payload }
    }
  }

}
