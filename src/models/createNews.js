import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import { createNews, editNews, getNewsDetail } from '.././services/news';

export default {

  namespace: 'createNews',

  state: {
    article: {},
    id: null,
    news: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        const matchID = pathToRegexp('/createNews/:id').exec(pathname);
        const match = pathToRegexp('/createNews').exec(pathname);
        if (matchID) {
          dispatch({ type: 'saveID', payload: matchID[1] })
        }
        if (match) {
          dispatch({ type: 'clearState' })
        }
      })
    }
  },

  effects: {
    * createNews({ payload }, { select, call, put }) {
      const { data, err } = yield call(createNews, { news: payload });
      if (!err) {
      } else {
      }
    },
    * getNews({ payload }, { select, call, put }) {
      const { data, err } = yield call(getNewsDetail, payload);
      if (!err) {
        yield put({ type: 'saveNews', payload: data })
        yield put(routerRedux.push({
          pathname: `/createNews/${payload}`
        }))
      } else {
      }
    },
    * editNews({ payload: value }, { select, call, put }) {
      const { id } = yield select(state => state.createNews)
      const { data, err } = yield call(editNews, id, value);
      if (!err) {
        yield put(routerRedux.push({
          pathname: '/createNeProfileManagement'
        }))
      } else {
      }
    }
  },

  reducers: {
    saveID(state, { payload }) {
      return { ...state, id: payload }
    },
    saveNews(state, { payload }) {
      return { ...state, news: payload }
    },
    clearState(state, { payload }) {
      return { ...state, news: {} }
    }
  }

};
