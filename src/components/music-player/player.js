import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Flex, Progress, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import Icon from './../icon';
import * as commonAction from './../../commonAction';
import { connect } from '../../dva';

@connect(state => {
  const root = state.musicPlayer;
  return {
    songList: root.songList,
  };
})
export default class Player extends React.PureComponent {
  render() {
    const { dispatch } = this.props;
    const size = 24;
    const bigSize = 24;
    return (
      <View style={{ flex: 1, height: 150, backgroundColor: 'yellow' }}>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Progress percent={50} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text onPress={() => commonAction.setPlayerIsPause(dispatch, true)}>
                <Icon size={size} name="ios-shuffle" />
              </Text>
              <Text onPress={() => commonAction.setPlayerIsPause(dispatch, true)}>
                <Icon size={size} name="ios-repeat" />
              </Text>
              <Text onPress={() => commonAction.playNextSomeSongByRule(dispatch, false)}>
                <Icon size={size} name="ios-skip-backward" />
              </Text>
              <Text onPress={() => commonAction.setPlayerIsPause(dispatch, false)}>
                <Icon size={bigSize} name="ios-play-circle" />
              </Text>
              <Text onPress={() => commonAction.setPlayerIsPause(dispatch, true)}>
                <Icon size={bigSize} name="ios-pause" />
              </Text>
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
