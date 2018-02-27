import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'header',

  state: {
    modelVisiable: false,
    HTMLContent: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/').exec(pathname);
        if (match) {
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
    showModel(state, { payload }) {
      return { ...state, modelVisiable: true }
    },
    hiddenModel(state, { payload }) {
      return { ...state, modelVisiable: false }
    },
    saveHTMLContent(state, { payload }) {
      return { ...state, HTMLContent: payload }
    }
  }

};
