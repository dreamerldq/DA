import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import _ from 'lodash';
import { createProfession, editProfession } from '../services/profession';
import { getProfession } from '../services/studio'

export default {

  namespace: 'professionCreate',

  state: {
    loading: true,
    id: null,
    profession: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/ProfessionCreate/*').exec(pathname);
        if (match) {
          dispatch({ type: 'saveID', payload: match[1] })
          dispatch({ type: 'getProfessionDetail', payload: match[1] })
        }
      })
    }
  },

  effects: {
    * createProfessionInfo({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(createProfession, { profession: payload })
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ProfileManagement'
        }))
      } else {
      }
    },
    * editProfessionInfo({ payload: value }, { call, put, select }) {
      let { id: payload } = yield select(state => state.professionCreate)
      switch (payload) {
        case 'DigitalMediaTechnology':
          payload = '数字媒体技术'
          break;
        case 'Animation':
          payload = '动画'
          break;
        case 'VisualCommunicationDesign':
          payload = '视觉传达设计专业'
          break;
        case 'FilmPhotography':
          payload = '影视摄影与制作专业'
          break;
        case 'DigitalMediaArt':
          payload = '数字媒体艺术'
          break;
        default:
          break;
      }
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(editProfession, payload, value)
      if (!err) {
        yield put({ type: 'endSpin' })
        yield put(routerRedux.push({
          pathname: '/ProfileManagement'
        }))
      } else {
      }
    },
    * getProfessionDetail({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      switch (payload) {
        case 'DigitalMediaTechnology':
          payload = '数字媒体技术'
          break;
        case 'Animation':
          payload = '动画'
          break;
        case 'VisualCommunicationDesign':
          payload = '视觉传达设计专业'
          break;
        case 'FilmPhotography':
          payload = '影视摄影与制作专业'
          break;
        case 'DigitalMediaArt':
          payload = '数字媒体艺术'
          break;
        default:
          break;
      }
      const { data, err } = yield call(getProfession, payload)
      if (!err) {
        yield put({ type: 'saveDetail', payload: data })
        yield put({ type: 'endSpin' })
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
    saveDetail(state, { payload }) {
      return { ...state, profession: payload[0] }
    },
    saveID(state, { payload }) {
      return { ...state, id: payload }
    }
  }

};
