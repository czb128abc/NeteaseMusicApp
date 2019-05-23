import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Toast, List } from '@ant-design/react-native';
import Icon from '../icon';
import * as commonAction from './../../commonAction';
import { connect } from '../../dva';
import Player from './player';

const { Item } = List;
const { Brief } = Item;

@connect(state => {
  const root = state.musicPlayer;
  return {
    songList: root.songList,
    currentPlayingKey: root.currentPlayingKey,
  };
})
export default class MusicPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMinView: true,
    };
  }

  handleSongItemClick = song => {
    const { dispatch } = this.props;
    commonAction.playNewSong(dispatch, song);
  };
  triggerMinView = isMinView => {
    console.log('triggerMinView', isMinView);
    this.setState({ isMinView: isMinView });
  };
  rendMiniView() {
    return (
      <View style={style.minViewContainer}>
        <Text onPress={() => this.triggerMinView(false)}>
          <Icon style={{ color: 'red' }} size={24} name="ios-play-circle" />
        </Text>
      </View>
    );
  }
  render() {
    const { songList = [], dispatch, currentPlayingKey } = this.props;
    const { isMinView } = this.state;
    if (isMinView) {
      return this.rendMiniView();
    }
    return (
      <View style={style.musicPlayerContainer}>
        <View
          style={{
            height: 30,
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Text>播放列表</Text>
          <Text onPress={() => this.triggerMinView(true)}>
            <Icon size={36} name="ios-remove" />
          </Text>
        </View>

        <View style={{ flex: 1, maxHeight: 400 }}>
          <ScrollView style={{}}>
            <List>
              {songList.map((item, index) => {
                const itemProps = {
                  key: index.toString(),
                  onClick: () => this.handleSongItemClick(item),
                };
                const briefText = item.ar.map(item => item.name).join(' ');
                const aliaText = item.alia.join(' ');
                return (
                  <Item
                    {...itemProps}
                    extra={
                      <Icon
                        style={{ color: currentPlayingKey === `${item.id}` ? 'red' : 'gray' }}
                        size={24}
                        name="ios-play-circle"
                      />
                    }
                  >
                    <Text>
                      {item.name}{' '}
                      <Text style={{ fontSize: 12, color: 'gray' }}>
                        {`${aliaText && '('}`} {aliaText} {`${aliaText && ')'}`}
                      </Text>
                    </Text>
                    <Brief>{briefText}</Brief>
                  </Item>
                );
              })}
            </List>
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Player dispatch={dispatch} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  musicPlayerContainer: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 0,
    right: 0,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  minViewContainer: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 25,
    right: 0,
  },
});
