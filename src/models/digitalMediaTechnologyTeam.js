import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { createUser, getUser } from '../services/registered';

export default {

  namespace: 'digitalMediaTechnologyTeam',

  state: {
    user: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/DigitalMediaTechnologyTeam').exec(pathname);
        if (match) {
          const path = pathname.split('/')[1]
          dispatch({ type: 'getProfile', payload: path })
        }
      })
    }
  },

  effects: {
    * getProfile({ payload }, { call, put }) {
      console.log('开始执行请求')
      const { data, err } = yield call(getUser, payload);
      if (!err) {
        yield put({ type: 'save', payload: data })
      } else {
        console.log(err)
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, user: payload };
    }
  }

};
