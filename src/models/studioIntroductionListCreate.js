/*eslint-disable*/
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import _ from 'lodash';
import { createStudio, getStudio, editStudio, deleteStudio } from '../services/studio';

const changeString = (studioInfo, arr) => {
  let stringName = ''
  _.forEach(studioInfo[arr], (str) => {
    stringName += `${str}&`
  })
  stringName = stringName.substring(0, stringName.length - 1)
  return stringName
}
export default {

  namespace: 'studioIntroductionListCreate',

  state: {
    newsList: [],
    loading: true,
    modalVisible: false,
    id: null,
    studioInfo: {
      name: [],
      course: [],
      research: []
    },
    studio: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/StudioIntroductionCreate').exec(pathname);
        const matchID = pathToRegexp('/StudioIntroductionCreate/:id').exec(pathname);
        if (match) {
          dispatch({ type: 'clearState' })
        }
        if (matchID) {
          dispatch({ type: 'saveID', payload: matchID[1] })
          dispatch({ type: 'getStudio', payload: matchID[1] })
        }
      })
    }
  },

  effects: {
    * createStudioInfo({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { studioInfo } = yield select(state => state.studioIntroductionListCreate)
      const name = changeString(studioInfo, 'name')
      const course = changeString(studioInfo, 'course')
      const research = changeString(studioInfo, 'research')
      const params = {
        name, course, research, ...payload
      }
      const { data, err } = yield call(createStudio, { studio: params })
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ProfileManagement'
        }))
      } else {
      }
    },
    * editStudioInfo({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { studioInfo, id } = yield select(state => state.studioIntroductionListCreate)
      const name = changeString(studioInfo, 'name')
      const course = changeString(studioInfo, 'course')
      const research = changeString(studioInfo, 'research')
      const params = {
        name, course, research, ...payload
      }
      const { data, err } = yield call(editStudio, id, params)
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ProfileManagement'
        }))
      } else {
      }
    },
    * deleteStudioInfo({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(deleteStudio, payload)
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ProfileManagement'
        }))
      } else {
      }
    },
    * getStudio({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getStudio, payload)
      if (!err) {
        const name = data.name.split('&')
        const course = data.course.split('&')
        const research = data.research.split('&')
        const studioInfo = {
          name,
          course,
          research
        }
        yield put({ type: 'saveArrInfo', payload: studioInfo })
        const studio = {
          ...data, name, course, research
        }
        yield put({ type: 'saveStudio', payload: studio })
      } else {
      }
    }
  },
  reducers: {
    startSpin(state, { payload }) {
      return { ...state, loading: true }
    },
    endSpin(state, { payload }) {
      return { ...state, loading: false }
    },
    saveStudio(state, { payload }) {
      return { ...state, studio: payload }
    },
    saveID(state, { payload }) {
      return { ...state, id: payload }
    },
    saveArrInfo(state, { payload }) {
      return { ...state, studioInfo: payload }
    },
    clearState(state, { payload }) {
      return { ...state, studioInfo: {}, studio: {} }
    },
    addInfo(state, { payload }) {
      switch (payload.type) {
        case 'name':
          return { ...state, studioInfo: { ...state.studioInfo, name: [...state.studioInfo.name, payload.value] } }
        case 'course':
          return { ...state, studioInfo: { ...state.studioInfo, course: [...state.studioInfo.course, payload.value] } }
        case 'research':
          return { ...state, studioInfo: { ...state.studioInfo, research: [...state.studioInfo.research, payload.value] } }
        default:
          break;
      }
    }
  }

};
