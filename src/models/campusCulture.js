import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import { getNews, deleteNews, getNewsDetail } from '../services/news';

export default {

  namespace: 'campusCulture',

  state: {
    allRecord: [],
    loading: true,
    modalVisible: false,
    id: null,
    record: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const matchList = pathToRegexp('/CampusCulture').exec(pathname);
        const matchDetail = pathToRegexp('/CampusCulture/:id').exec(pathname);
        if (matchList) {
          dispatch({ type: 'getNewsList' })
        }
        if (matchDetail) {
          dispatch({ type: 'getNewsDetails', payload: matchDetail[1] })
        }
      })
    }
  },

  effects: {
    * getNewsDetails({ payload }, { call, put }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getNewsDetail, payload)
      if (!err) {
        yield put({ type: 'saveRecord', payload: data })
        yield put({ type: 'endSpin' })
      }
    },
    * getNewsList({ payload }, { call, put }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getNews)
      if (!err) {
        const allRecord = data.filter((item) => {
          return item.articleType === 'campusCulture'
        })
        yield put({ type: 'saveAllRecord', payload: allRecord })
        yield put({ type: 'endSpin' })
      } else {

      }
    },
    * deleteNewsRecord({ payload }, { call, put, select }) {
      const { id } = yield select(state => state.campusCulture)

      yield put({ type: 'hiddenModal' })
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(deleteNews, id)
      if (!err) {
        const allRecord = data.filter((item) => {
          return item.articleType === 'campusCulture'
        })
        yield put({ type: 'saveAllRecord', payload: allRecord })
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
    saveAllRecord(state, { payload }) {
      return { ...state, allRecord: payload }
    },
    saveRecord(state, { payload }) {
      return { ...state, record: payload }
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
