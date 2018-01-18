import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'

export default {

  namespace: 'newsNotice',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/NewsNotice').exec(pathname);
        if (match) {
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
