/**
 * 播放器添加歌曲列表
 * @param {*} songs
 */
export function playerAddSongs(dispatch, songs) {
  return dispatch({
    type: 'musicPlayer/playerAddSongs',
    payload: songs,
  });
}

export function playerRemoveSongs(dispatch, songs) {
  return dispatch({
    type: 'musicPlayer/playerRemoveSongs',
    payload: songs,
  });
}

export function playerClearSongs(dispatch) {
  return dispatch({
    type: 'musicPlayer/playerClearSongs',
  });
}
