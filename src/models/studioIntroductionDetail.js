import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import { getStudio } from '../services/studio';

export default {

  namespace: 'studioIntroductionDetail',

  state: {
    studio: {
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/StudioIntroduction/:id').exec(pathname);
        if (match) {
          dispatch({ type: 'getStudio', payload: match[1] })
        }
      })
    }
  },

  effects: {
    * getStudio({ payload }, { call, put }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getStudio, payload)
      if (!err) {
        console.log('qqqq', data)
        const name = data.name.split('&')
        const course = data.course.split('&')
        const research = data.research.split('&')
        console.log('BBBB', name)
        const studio = {
          ...data, name, course, research
        }
        console.log('AAAA', studio)
        yield put({ type: 'saveRecord', payload: studio })
        yield put({ type: 'endSpin' })
        console.log('这是工作室详情页', data)
      } else {
        console.log('请求失败')
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
    saveRecord(state, { payload }) {
      return { ...state, studio: payload }
    }
  }

};
