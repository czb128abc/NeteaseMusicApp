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

/**
 * 播放歌曲
 * @param {*} dispatch 
 * @param {*} song 
 */
export async function playNewSong(dispatch, song) {
  setPlayerIsPause(dispatch, true);
  const result = await dispatch({
    type: 'musicPlayer/playNewSong',
    payload: song,
  });
  setPlayerIsPause(dispatch, false);
  return result;
}


export function setDurationTime(dispatch, durationTime) {
  return dispatch({
    type: 'musicPlayer/save',
    payload: {durationTime},
  });
}

export function setCurrentTime(dispatch, currentTime) {
  return dispatch({
    type: 'musicPlayer/save',
    payload: {currentTime},
  });
}
export function setPlayerIsPause(dispatch, playerIsPause) {
  return dispatch({
    type: 'musicPlayer/save',
    payload: {playerIsPause},
  });
}

// 根据规则播放下一首歌曲,
export function playNextSomeSongByRule(dispatch) {
  const song = '';
  return dispatch({
    type: 'musicPlayer/playNewSong',
    payload: song,
  });
}