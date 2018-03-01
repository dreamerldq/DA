import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import { getNews, deleteNews } from '../services/news';

export default {

  namespace: 'profileIntroduction',

  state: {
    newsList: [],
    loading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/*').exec(pathname);
        if (match) {
          dispatch({ type: 'getNewsList' })
        }
      })
    }
  },

  effects: {
    * getNewsList({ payload }, { call, put }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getNews)
      if (!err) {
        const profileIntroductionNews = data.filter((item) => {
          return item.articleType === 'profileIntroduction'
        })
        yield put({ type: 'saveRecord', payload: profileIntroductionNews })
        yield put({ type: 'endSpin' })
      } else {
        console.log('请求失败')
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
    saveRecord(state, { payload }) {
      return { ...state, newsList: payload }
    }
  }

};
