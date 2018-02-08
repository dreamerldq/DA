import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import _ from 'lodash';
import { createProfession } from '../services/profession';

const changeString = (studioInfo, arr) => {
  console.log('卡四肢西华县')
  let stringName = ''
  console.log('CCCC', studioInfo[arr].length)
  _.forEach(studioInfo[arr], (str) => {
    stringName += `${str}&`
  })
  stringName = stringName.substring(0, stringName.length - 1)
  return stringName
}
export default {

  namespace: 'professionCreate',

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
        const match = pathToRegexp('/ProfessionCreate').exec(pathname);
        if (match) {

        }
      })
    }
  },

  effects: {
    * createProfessionInfo({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      console.log('传递的参数', payload)
      const { data, err } = yield call(createProfession, { profession: payload })
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
