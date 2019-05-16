### 简介
学习react-native后, dva(redux)+react 搭建的手机音乐播放器, 播放源来自网易云音乐 api地址 参考 [https://binaryify.github.io/NeteaseCloudMusicApi/#/](https://binaryify.github.io/NeteaseCloudMusicApi/#/)

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
