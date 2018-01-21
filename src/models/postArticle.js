import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import {
  updateArticle
} from '.././services/postArticle';

export default {

  namespace: 'postArticle',

  state: {
    article: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        const match = pathToRegexp('/postArticle').exec(pathname);
        if (match) {
        }
      })
    }
  },

  effects: {
    * postArticle({ payload }, { select, call, put }) {
      yield put({ type: 'saveArticleTitle', payload });
      const state = yield select(state => state.postArticle);
      yield call(updateArticle, state.article);
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveArticleContent(state, { payload }) {
      return { ...state, article: { ...state.article, content: payload } }
    },
    saveArticleTitle(state, { payload }) {
      return { ...state, article: { ...state.article, title: payload } }
    }
  }

};
