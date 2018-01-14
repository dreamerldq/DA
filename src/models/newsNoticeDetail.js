import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'

export default {

  namespace: 'newsNoticeDetail',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        console.log('RRRR', query)
        const match = pathToRegexp('NewsNotice/detail/:id+').exec(pathname);
        if (match) {
          console.log('这是新闻通知详情界面')
          dispatch({ type: 'saveFetchId', payload: query })
        }
      })
    }
  },

  effects: {
    *link({ payload: path }, { call, put }) {  // eslint-disable-line
      yield put(routerRedux.push({
        pathname: `/${path}`
      }));
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveFetchId(state, { payload }) {
      return { ...state, id: payload }
    }
  }

};
