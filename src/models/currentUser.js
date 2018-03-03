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
          dispatch({ type: 'getCurrentUser' })
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
    },
    * getCurrentUser({ payload }, { call, put }) {
      const data = window.localStorage.getItem('data');
      yield put({ type: 'saveCurrentUser', payload: data })
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
