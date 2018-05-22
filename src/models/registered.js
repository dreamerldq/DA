import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import { createUser, updateUser, getAloneUser } from '../services/registered';


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
    basicInfo: {},
    id: null
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/registered').exec(pathname);
        const matchId = pathToRegexp('/registered/:id').exec(pathname);
        if (match) {
          dispatch({ type: 'clearData' })
        }
        if (matchId) {
          dispatch({ type: 'saveId', payload: matchId[1] })
          dispatch({ type: 'getProfile', payload: matchId[1] })
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
        yield put(routerRedux.push({
          pathname: '/DigitalMediaTechnologyTeam'
        }))
      }
    },
    * getProfile({ payload }, { call, put, select }) {
      const { data, err } = yield call(getAloneUser, payload);
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
        const staffInfo = {
          patent,
          research,
          award,
          studentAward,
          teacherTrainning
        }
        yield put({ type: 'saveProfile', payload: record })
        yield put({ type: 'saveInfo', payload: staffInfo })
      }
    },
    * updateProfile({ payload }, { call, put, select }) {
      const { staffInfo } = yield select(state => state.registered)
      const { id } = yield select(state => state.registered)
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
      const { data, err } = yield call(updateUser, params, id);
      if (!err) {
        yield put(routerRedux.push({
          pathname: '/DigitalMediaTechnologyTeam'
        }))
      }
    }
  },

  reducers: {
    saveProfile(state, { payload }) {
      return { ...state, user: payload }
    },
    saveId(state, { payload }) {
      return { ...state, id: payload }
    },
    saveBasicInfo(state, { payload }) {
      return { ...state, basicInfo: payload }
    },
    clearData(state, { payload }) {
      return {
        ...state,
        staffInfo: {
          patent: [],
          research: [],
          award: [],
          studentAward: [],
          teacherTrainning: []
        },
        user: {}
      }
    },
    saveInfo(state, { payload }) {
      return { ...state, staffInfo: payload }
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
