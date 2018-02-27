import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'currentUser',

  state: {
    user: null
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/*').exec(pathname);
        if (match) {
        }
      })
    }
  },

  effects: {
    * clearCurrentUser({ payload }, { call, put }) {
      window.localStorage.removeItem('data');
      yield put({ type: 'clearLocalStorage' })
      yield put(routerRedux.push({
        pathname: '/login'
      }))
    }
  },

  reducers: {
    saveCurrentUser(state, { payload }) {
      const currentUser = JSON.parse(payload)
      return { ...state, user: currentUser }
    },
    clearLocalStorage(state, { payload }) {
      return { ...state, user: null }
    }
  }

};
