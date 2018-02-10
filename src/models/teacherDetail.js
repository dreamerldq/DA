import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import getUser from '../services/teacherDetail';

export default {

  namespace: 'teacherDetail',

  state: {
    user: {},
    loading: true
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/TeacherDetail/:id+').exec(pathname);
        if (match) {
          dispatch({ type: 'fetchUser', payload: match[1] })
        } else {

        }
      })
    }
  },

  effects: {
    * fetchUser({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getUser, payload);
      if (!err) {
        const patent = data.patent ? data.patent.split('&') : []
        const research = data.research ? data.research.split('&') : []
        const teacherTrainning = data.teacherTrainning ? data.teacherTrainning.split('&') : []
        const award = data.award ? data.award.split('&') : []
        const studentAward = data.studentAward ? data.studentAward.split('&') : []
        const record = {
          ...data,
          patent,
          research,
          award,
          studentAward,
          teacherTrainning
        }
        yield put({ type: 'saveRecord', payload: record })
        yield put({ type: 'endSpin' })
      } else {

      }
    }
  },


  reducers: {
    saveRecord(state, { payload }) {
      return { ...state, user: payload }
    },
    startSpin(state, { payload }) {
      return { ...state, loading: true }
    },
    endSpin(state, { payload }) {
      return { ...state, loading: false }
    }
  }

};
