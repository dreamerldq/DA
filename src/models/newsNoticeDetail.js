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
        const match = pathToRegexp('/News/detail/:id+').exec(pathname);
        if (match) {
          dispatch({ type: 'saveFetchId', payload: match[1] })
        }
      })
    }
  },

  effects: {
    * link({ payload: path }, { call, put }) {
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
