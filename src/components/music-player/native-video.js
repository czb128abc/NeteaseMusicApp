import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';
import * as commonAction from './../../commonAction';
import { connect } from '../../dva';

@connect(state => {
  const root = state.musicPlayer;
  return {
    ...root,
  };
})
export default class NativeVideo extends React.PureComponent {
  loadStart = () => {
    console.log('loadStart');
  };
  setDuration = ({ duration }) => {
    commonAction.setDurationTime(this.props.dispatch, duration);
  };
  setTime = ({ currentTime }) => {
    commonAction.setCurrentTime(this.props.dispatch, currentTime);
  };
  onEnd = () => {
    console.log('onEnd');
  };
  videoError(e) {
    console.log('videoError', e);
  }
  render() {
    const { currentPlayingSong, playerIsPause } = this.props;
    if (!currentPlayingSong) {
      return null;
    }
    return (
      <Video
        source={{
          uri: currentPlayingSong.url,
        }} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        rate={playerIsPause ? 0 : 1} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
        volume={1.0}
        // 声音的放声音的放大倍数大倍数，0 为静音  ，1 为正常音量 ，更大的数字表示放大的倍数
        muted={false} // true代表静音，默认为false.
        paused={false} // true代表暂停，默认为false
        resizeMode="contain" // 视频的自适应伸缩铺放行为，contain、stretch、cover
        repeat={false} // 是否重复播放
        playInBackground={true} // 当app转到后台运行的时候，播放是否暂停
        playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
        onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
        onLoad={this.setDuration} // 当视频加载完毕时的回调函数
        onProgress={this.setTime} //  进度控制，每250ms调用一次，以获取视频播放的进度
        onEnd={this.onEnd} // 当视频播放完毕后的回调函数
        onError={this.videoError} // 当视频不能加载，或出错后的回调函数
        style={styles.backgroundVideo}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
