import * as servies from '../services/musicPlaylist';

export default {
  namespace: 'musicPlaylist',
  state: {
    // 推荐歌单
    topPayList: [],
    topPayListCondition: {},
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *queryTopPayList({ payload }, { call, put }) {
      
      const { data } = yield call(servies.queryTopPayList, payload);
      const { code, playlists, ...other } = data;
      if (code !== 200) {
        throw new Error(data.code);
      }
      console.log('...queryTopPayList , playlists', playlists);
      yield put({
        type: 'save',
        payload: {
          topPayList: playlists,
          topPayListCondition: other,
        }
      })
    },
  },
};
