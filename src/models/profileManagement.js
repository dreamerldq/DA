import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import _ from 'lodash'
import { getStudioList, getProfessionList, getProfession } from '../services/studio';
import { getAll } from '../services/ventureProject'
import { getNews } from '../services/news'


export default {

  namespace: 'profileManagement',

  state: {
    key: 'studio',
    studio: [],
    profession: [],
    content: {},
    ventureProject: [],
    introduction: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const id = queryString.parse(search)
        dispatch({ type: 'saveFetchId', payload: id })
        const match = pathToRegexp('/ProfileManagement').exec(pathname);
        dispatch({ type: 'animationTeam/getProfile', payload: 'AnimationTeam' })
        dispatch({ type: 'digitalMediaTechnologyTeam/getProfile', payload: 'DigitalMediaTechnologyTeam' })
        dispatch({ type: 'digitalMediaArtTeam/getProfile', payload: 'DigitalMediaArtTeam' })
        dispatch({ type: 'filmPhotographyTeam/getProfile', payload: 'FilmPhotographyTeam' })
        dispatch({ type: 'visualCommunicationDesignTeam/getProfile', payload: 'VisualCommunicationDesignTeam' })
        const matchProfession = pathToRegexp('/ProfessionIntroduction/:introduction').exec(pathname);
        if (matchProfession) {
          dispatch({ type: 'getProfesstion', payload: matchProfession[1] })
        }
        if (match) {
          dispatch({ type: 'getList' })
        }
      })
    }
  },

  effects: {
    * changeTab({ payload }, { call, put, select }) {
      yield put({ type: 'saveTab', payload })
      yield put({ type: 'getList' })
    },
    * getProfesstion({ payload }, { call, put, select }) {
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
        const content = data[0] || {}
        yield put({ type: 'saveProfessionDetail', payload: content })
        yield put({ type: 'endSpin' })
      } else {
      }
    },
    * getList({ payload }, { call, put, select }) {
      const { key } = yield select(state => state.profileManagement)
      switch (key) {
        case 'studio':
          yield put({ type: 'getStudioList' })
          break;
        case 'profession':
          yield put({ type: 'getProfessionList' })
          break;
        case 'ventureProject':
          yield put({ type: 'getVentureProjectList' })
          break;
        case 'introduction':
          yield put({ type: 'getProfileIntroductionList' })
          break;
        default:
          break;
      }
    },
    * getStudioList({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getStudioList)
      if (!err) {
        yield put({ type: 'saveStudioRecord', payload: data })
        yield put({ type: 'endSpin' })
      } else {
      }
    },
    * getProfileIntroductionList({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getNews)
      if (!err) {
        const introductions = data.filter((item) => {
          return item.articleType === 'profileIntroduction'
        })
        yield put({ type: 'saveIntroductionRecord', payload: introductions })
        yield put({ type: 'endSpin' })
      } else {
      }
    },
    * getVentureProjectList({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getAll)
      if (!err) {
        yield put({ type: 'saveVentureProjectRecord', payload: data })
        yield put({ type: 'endSpin' })
      } else {
      }
    },
    * getProfessionList({ payload }, { call, put, select }) {
      yield put({ type: 'startSpin' })
      const { data, err } = yield call(getProfessionList)
      if (!err) {
        const dataScource = _.map(data, (item) => {
          switch (item.professionName) {
            case '数字媒体技术':
              return { ...item, professionEnglishName: 'DigitalMediaTechnology' }
            case '动画':
              return { ...item, professionEnglishName: 'Animation' }
            case '视觉传达设计专业':
              return { ...item, professionEnglishName: 'VisualCommunicationDesign' }
            case '影视摄影与制作专业':
              return { ...item, professionEnglishName: 'FilmPhotography' }
            case '数字媒体艺术':
              return { ...item, professionEnglishName: 'DigitalMediaArt' }

            default:
              break;
          }
          return null
        })
        yield put({ type: 'saveProfessionRecord', payload: dataScource })
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
    saveStudioRecord(state, { payload }) {
      return { ...state, studio: payload }
    },
    saveProfessionRecord(state, { payload }) {
      return { ...state, profession: payload }
    },
    saveVentureProjectRecord(state, { payload }) {
      return { ...state, ventureProject: payload }
    },
    saveTab(state, { payload }) {
      return { ...state, key: payload }
    },
    saveProfessionDetail(state, { payload }) {
      return { ...state, content: payload }
    },
    saveIntroductionRecord(state, { payload }) {
      return { ...state, introduction: payload }
    }
  }

};
