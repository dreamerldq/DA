import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
export default {

  namespace: 'header',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location => {
        const { pathname, query } = location;
        const match = pathToRegexp('/').exec(pathname);
        if (match) {
          console.log("这是首页")
        }
      }) 
    },
  },

  effects: {
    *link({ payload: path }, { call, put }) {  // eslint-disable-line
      yield put(routerRedux.push({
        pathname: `/${path}`,
      }));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
