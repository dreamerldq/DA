import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import { getStudioList } from '../services/studio';

export default {

  namespace: 'profileManagement',

  state: {
    newsList: [],
    key: 'studio',
    studio: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/ProfileManagement').exec(pathname);
        if (match) {
          dispatch({ type: 'getList' })
        }
      })
    }
  },

  effects: {
    * getList({ payload }, { call, put, select }) {
      const { key } = yield select(state => state.profileManagement)
      switch (key) {
        case 'studio':
          yield put({ type: 'getStudioList' })
          break;
        default:
          break;
      }
    },
    * getStudioList({ payload }, { call, put, select }) {
      console.log('开始执行我')
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getStudioList)
      if (!err) {
        yield put({ type: 'saveStudioRecord', payload: data })
        yield put({ type: 'endSpin' })
        console.log('这是返回的新闻列表', data)
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
    saveStudioRecord(state, { payload }) {
      console.log('payload', payload)
      return { ...state, studio: payload }
    },
    saveTab(state, { payload }) {
      return { ...state, key: payload }
    }
  }

};
