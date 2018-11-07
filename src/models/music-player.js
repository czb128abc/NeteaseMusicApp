export default {
  namespace: 'musicPlayer',
  state: {
    songList: [],
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    playerAddSongs(state, { payload }) {
      const songList = state.songList.map(item => item);
      songList.push(...payload);
      return {
        ...state,
        songList,
      };
    },
    playerRemoveSongs(state, { payload }) {
      const songList = state.songList.filter(item => {
        return payload.find(song => {
          retrn`${song.id}` === `${item.id}`;
        });
      });
      return {
        ...state,
        songList,
      };
    },
    playerClearSongs(state) {
      const songList = [];
      return {
        ...state,
        songList,
      };
    },
  },
  effects: {},
};
