import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import _ from 'lodash';
import { createStudio } from '../services/studio';

const changeString = (studioInfo, arr) => {
  let stringName = ''
  _.forEach(studioInfo[arr], (str) => {
    stringName += `${str}&`
  })
  stringName = stringName.substring(0, stringName.length - 1)
  return stringName
}
export default {

  namespace: 'profileIntroductionCreate',

  state: {
    newsList: [],
    loading: true,
    modalVisible: false,
    id: null,
    studioInfo: {
      name: [],
      course: [],
      research: []
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/NewsNotice').exec(pathname);
        if (match) {
          dispatch({ type: 'getNewsList' })
        }
      })
    }
  },

  effects: {
    * createStudioInfo({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { studioInfo } = yield select(state => state.studioIntroductionListCreate)

      console.log('传递的参数', params)
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
        console.log('这是返回的数据', data)
      } else {
        console.log('请求错误')
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
