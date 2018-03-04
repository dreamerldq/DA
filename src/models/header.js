import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'header',

  state: {
    headerDisplay: true
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/login').exec(pathname);
        if (match) {
          dispatch({ type: 'displayHeader', payload: false })
        } else {
          dispatch({ type: 'displayHeader', payload: true })
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
    },
    displayHeader(state, { payload }) {
      return { ...state, headerDisplay: payload }
    }
  }

};
