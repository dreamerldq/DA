import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import _ from 'lodash'
import Data from '../QuanJingData'


export default {

  namespace: 'quanjing',

  state: {
    allRecord: Data,
    imgData: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const { pathname, query } = location;
        const match = pathToRegexp('/quanjing/:id').exec(pathname);
        if (match) {
          dispatch({ type: 'getImage', payload: match[1] })
        }
      })
    }
  },

  effects: {
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, user: payload };
    },
    getImage(state, { payload: id }) {
      const obj = _.find(state.allRecord, { path: `${id}` })
      return { ...state, imgData: obj }
    }
  }

};
