import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { createUser } from '../services/registered';
import _ from 'lodash';

const changeString = (staffInfo, arr) => {
  let stringName = ''
  _.forEach(staffInfo[arr], (str) => {
    stringName += `${str}&`
  })
  stringName = stringName.substring(0, stringName.length - 1)
  return stringName
}
export default {

  namespace: 'registered',

  state: {
    user: {},
    staffInfo: {
      patent: [],
      research: [],
      award: [],
      studentAward: [],
      teacherTrainning: []
    },
    basicInfo: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/registered').exec(pathname);
        if (match) {
        }
      })
    }
  },

  effects: {
    * createProfile({ payload }, { call, put, select }) {
      yield put({ type: 'saveBasicInfo', payload })
      const { staffInfo } = yield select(state => state.registered)
      const patent = changeString(staffInfo, 'patent')
      const research = changeString(staffInfo, 'research')
      const award = changeString(staffInfo, 'award')
      const studentAward = changeString(staffInfo, 'studentAward')
      const teacherTrainning = changeString(staffInfo, 'teacherTrainning')
      const params = {
        ...payload,
        patent,
        research,
        award,
        studentAward,
        teacherTrainning
      }
      const { data, err } = yield call(createUser, { user: params });
      if (!err) {
        console.log('创建成功')
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, user: payload };
    },
    saveBasicInfo(state, { payload }) {
      return { ...state, basicInfo: payload }
    },
    addInfo(state, { payload }) {
      const { value, type } = payload
      switch (payload.type) {
        case 'patent':
          return { ...state, staffInfo: { ...state.staffInfo, patent: [...state.staffInfo.patent, payload.value] } }
        case 'research':
          return { ...state, staffInfo: { ...state.staffInfo, research: [...state.staffInfo.research, payload.value] } }
        case 'award':
          return { ...state, staffInfo: { ...state.staffInfo, award: [...state.staffInfo.award, payload.value] } }
        case 'studentAward':
          return { ...state, staffInfo: { ...state.staffInfo, studentAward: [...state.staffInfo.studentAward, payload.value] } }
        case 'teacherTrainning':
          return { ...state, staffInfo: { ...state.staffInfo, teacherTrainning: [...state.staffInfo.teacherTrainning, payload.value] } }
        default:
          break;
      }
    }
  }

};
