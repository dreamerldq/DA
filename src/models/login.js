import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import createSession from '../services/login';

export default {

  namespace: 'login',

  state: {
    user: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/login').exec(pathname);
        if (match) {
        }
      })
    }
  },

  effects: {
    * saveUserData({ payload }, { call, put }) {
      const { data, err } = yield call(createSession, { session: payload });
      if (!err) {
        // yield put({ type: 'header/saveCurrentUser', payload: data })
        const dataString = JSON.stringify(data)
        window.localStorage.setItem('data', dataString);
        yield put({ type: 'currentUser/saveCurrentUser', payload: dataString })
        yield put(routerRedux.push({
          // pathname: `/TeacherDetail/${data}`
          pathname: './index'
        }))
      } else {
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, user: payload };
    }
  }

};
