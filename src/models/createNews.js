import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import queryString from 'query-string'
import {
  createUser
} from '.././services/createNews';

export default {

  namespace: 'createNews',

  state: {
    article: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        const match = pathToRegexp('/createNews').exec(pathname);
        if (match) {
        }
      })
    }
  },

  effects: {
    * createNews({ payload }, { select, call, put }) {
      const { data, err } = yield call(createUser, { news: payload });
    }
  },

  reducers: {
  }

};
