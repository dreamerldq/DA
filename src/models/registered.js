import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { createUser } from '../services/registered';

export default {

  namespace: 'registered',

  state: {
    user: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/registered').exec(pathname);
        if (match) {
          console.log('这是登录界面')
        }
      })
    }
  },

  effects: {
    * createProfile({ payload }, { call, put }) {
      console.log('sssss', payload)
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
