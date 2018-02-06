import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'


export default {

  namespace: 'teacherList',

  state: {
    key: 'DigitalMediaTechnologyTeam'
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const path = pathname.split('/')[1]
        dispatch({ type: 'saveKey', payload: path })
      })
    }
  },

  effects: {
    * teachersDetails({ payload }, { select, call, put }) {
    //   yield put({ type: 'saveArticleTitle', payload });
    //   const state = yield select(state => state.teachersDetails);
    //   yield call(updateArticle, state.article);
    }
  },

  reducers: {
    saveKey(state, { payload }) {
      return { ...state, key: payload };
    }
  }

};
