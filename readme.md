## 功能清单

### 用户 (注册|登录|用户创建的歌单) 加入|移除|清空收藏夹 
### 推荐
###  排行榜
###  歌单
###  歌手
### 电台
### 播放器(播放列表)
### 模糊搜索


## 页面

### 用户页面
```
登录
注册
```

### 用户歌单收藏夹页面
### 推荐页面(首页) (优先级低)
```
TOP 5
歌单|电台|排行榜
```
### 音乐页面 music-playlist
歌单 , 单曲 (推荐) 
hot, catlist, top-song
### 电台页面

#### 排行榜页面
#### 歌手搜索页面

### 播放器
播放列表(crud)
播放器
歌词
添加到歌单


##技术选型
dva => 管理数据 ['公共数据','页面数据']
react-router-native => 管理路由

```javascript
/**
 * Created by 叶子 on 2017/9/22.
 */
const BASE_URL = 'http://localhost:3000';

// 推荐音乐
export const PERSONALIZED = BASE_URL + '/personalized';
// 独家放送
export const PERSONALIZED_PRIVATECONTENT = PERSONALIZED + '/privatecontent';
// 最新音乐
export const PERSONALIZED_NEWSONG = PERSONALIZED + '/newsong';
// 推荐mv
export const PERSONALIZED_MV = PERSONALIZED + '/mv';
// banner
export const BANNER = BASE_URL + '/banner';
// 歌单
export const PLAYLIST = BASE_URL + '/playlist';
// 歌单详情
export const PLAYLIST_DETAIL = PLAYLIST + '/detail?id=';
// 精品标签
export const PLAYLIST_HIGHQUALITY = BASE_URL + '/top/playlist/highquality';
// 歌曲播放地址
export const MUSIC_URL = BASE_URL + '/song/url?id=';
// 歌曲详情
export const SONG_DETAIL = BASE_URL + '/song/detail?ids=';
// 歌词
export const SONG_LYRIC = BASE_URL + '/lyric?id=';
// 用户歌单
export const USER_PLAYLIST = BASE_URL + '/user/playlist?uid=';
// MV详情+播放地址接口
export const MV_DETIAL = BASE_URL + '/mv?mvid=';
// MV评论
export const MV_COMMENT = BASE_URL + '/comment/mv?id=';
// 用户详情
export const USER_DETAIL = BASE_URL + '/user/detail?uid=';
// 用户动态
export const USER_EVENT = BASE_URL + '/user/event?uid=';
// 朋友圈动态
export const FRIENDS_EVENT = BASE_URL + '/event';
// 榜单
export const TOP_LIST = BASE_URL + '/top/list?idx=';
// 推荐电台
export const DJPROGRAM_PERSONALIZED = BASE_URL + '/personalized/djprogram';
// 电台节目
export const DJ_PROGRAM = BASE_URL + '/dj/program?rid=';

```
