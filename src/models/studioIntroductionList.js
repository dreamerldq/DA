import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import { getNews, deleteNews } from '../services/createNews';

export default {

  namespace: 'studioIntroductionList',

  state: {
    newsList: [],
    loading: true,
    modalVisible: false,
    id: null
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/NewsNotice').exec(pathname);
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
        yield put({ type: 'saveRecord', payload: data })
        yield put({ type: 'endSpin' })
        console.log('这是返回的新闻列表', data)
      } else {
        console.log('请求失败')
      }
    },
    * deleteNewsRecord({ payload }, { call, put, select }) {
      const { id } = yield select(state => state.newsNotice)
      console.log('将要删除的是', id)
      yield put({ type: 'hiddenModal' })
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(deleteNews, id)
      if (!err) {
        yield put({ type: 'saveRecord', payload: data })
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
    },
    showModal(state, { payload }) {
      return { ...state, modalVisible: true }
    },
    hiddenModal(state, { payload }) {
      return { ...state, modalVisible: false }
    },
    saveID(state, { payload }) {
      return { ...state, id: payload }
    }
  }

};
