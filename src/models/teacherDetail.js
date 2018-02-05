import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import createUser from '../services/teacherDetail';

export default {

  namespace: 'teacherDetail',

  state: {
    id: null,
    user: null
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/teacherDetail/:id+').exec(pathname);
        if (match) {
          dispatch({ type: 'saveFetchId', payload: match[1] })
        }
      })
    }
  },

  effects: {
    * fetchProfileInfo({ payload }, { call, put, select }) {
      const { id } = yield select(state => state.teacherDetail);
      const { data, err } = yield call(createUser, id);
      if (!err) {
        console.log('注册用户成功', data)
        yield put({ type: 'saveRecord', payload: data })
      }
    }
  },


  reducers: {
    saveFetchId(state, { payload }) {
      return { ...state, id: payload }
    },
    saveRecord(state, { payload }) {
      return { ...state, user: payload }
    }
  }

};
