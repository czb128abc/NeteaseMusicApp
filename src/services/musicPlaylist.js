import { get } from './../utils/request';

export function queryTopPayList(param:{limit:10, order:'hot'}) {
    return get('/top/playlist', param)
}

export function queryTopPayDetail(id) {
    return get('/playlist/detail', {id})
}