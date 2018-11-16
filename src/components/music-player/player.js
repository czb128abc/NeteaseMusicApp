import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Flex, Progress, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import Icon from './../icon';
import * as commonAction from './../../commonAction';
import { calTimePercent, playModeEnum } from '../../utils/music/consts';
import { connect } from '../../dva';

@connect(state => {
  const root = state.musicPlayer;
  return {
    ...root,
  };
})
export default class Player extends React.PureComponent {
  getCurrentSong() {
    const {songList, currentPlayingKey} = this.props;
    return songList.find(item=> `${item.id}` === currentPlayingKey)
  }
  render() {
    const { dispatch, currentTime, durationTime, playerIsPause } = this.props;
    const size = 24;
    const bigSize = 24;
    const song = this.getCurrentSong();
    return (
      <View style={{ flex: 1, height: 150 }}>
        <WhiteSpace size="lg" />
        <WingBlank>
          {
            song && (
              <Text>{Array.isArray(song.ar) && song.ar.length>0 && `${song.ar[0].name} -- `}{song.name}</Text>
            )
          }
          <Progress
            percent={calTimePercent(currentTime, durationTime)}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text onPress={() => commonAction.setPlayMode(dispatch, playModeEnum.RANDOM_PLAY)}>
                <Icon size={size} name="ios-shuffle" />
              </Text>
              <Text onPress={() => commonAction.setPlayMode(dispatch, playModeEnum.LOOP_PLAY)}>
                <Icon size={size} name="ios-repeat" />
              </Text>
              <Text onPress={() => commonAction.playNextSomeSongByRule(dispatch, false)}>
                <Icon size={size} name="ios-skip-backward" />
              </Text>
              {!playerIsPause && (
                <Text onPress={() => commonAction.setPlayerIsPause(dispatch, true)}>
                  <Icon size={bigSize} name="ios-pause" />
                </Text>
              )}
              {playerIsPause && (
                <Text onPress={() => commonAction.setPlayerIsPause(dispatch, false)}>
                  <Icon size={bigSize} name="ios-play-circle" />
                </Text>
              )}

              <Text onPress={() => commonAction.playNextSomeSongByRule(dispatch, true)}>
                <Icon size={size} name="ios-skip-forward" />
              </Text>
            </View>
          </Flex.Item>
        </Flex>
      </View>
    );
  }
}
