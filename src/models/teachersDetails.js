import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
// import {
//   updateArticle
// } from '.././services/teachersDetails';

export default {

  namespace: 'teachersDetails',

  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        const match = pathToRegexp('/teachersDetails').exec(pathname);
        if (match) {
        }
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
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }

};
