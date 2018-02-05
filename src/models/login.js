import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import createUser from '../services/login';

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
          console.log('这是登录界面')
        }
      })
    }
  },

  effects: {
    * saveUserData({ payload }, { call, put }) {
      const { data, err } = yield call(createUser, { user: payload });
      if (!err) {
        console.log('注册用户成功', data)
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, user: payload };
    }
  }

};
