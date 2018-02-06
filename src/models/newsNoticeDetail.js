import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import getNewsDetail from '../services/newsDetail';

export default {

  namespace: 'newsNoticeDetail',

  state: {
    news: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        const match = pathToRegexp('/News/detail/:id+').exec(pathname);
        if (match) {
          console.log('ASAAAA')
          dispatch({ type: 'fetchUser', payload: match[1] })
        } else {
          console.log('1111')
        }
      })
    }
  },

  effects: {
    * fetchUser({ payload }, { call, put, select }) {
      console.log('开始获取')
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getNewsDetail, payload);
      if (!err) {
        console.log('获取单个员工记录', data)
        yield put({ type: 'saveRecord', payload: data })
        yield put({ type: 'endSpin' })
      } else {
        console.log('获取失败')
      }
    }
  },

  reducers: {
    saveRecord(state, { payload }) {
      console.log('成功读取了数据')
      return { ...state, news: payload }
    },
    startSpin(state, { payload }) {
      return { ...state, loading: true }
    },
    endSpin(state, { payload }) {
      return { ...state, loading: false }
    }
  }

};
