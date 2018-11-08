import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Grid, Modal, WingBlank, Accordion, List } from 'antd-mobile-rn';
import * as commonAction from './../../commonAction';
import { connect } from '../../dva';

const { Item } = List;
const { Brief } = Item;

@connect(state => {
  const root = state.musicPlayer;
  return {
    songList: root.songList,
  };
})
export default class MusicPlayer extends React.PureComponent {
  handleSongItemClick = song => {
    const { dispatch } = this.props;
    commonAction.playNewSong(dispatch, song);
  };

  render() {
    const { songList, dispatch } = this.props;
    const gridData = songList;
    return (
      <View style={style.musicPlayerContainer}>
        <View style={{height: 30}}>
          <Text>播放列表</Text>
          <View style={style.playerContainer}>
            <Text onPress={()=> commonAction.setPlayerIsPause(dispatch, false)}>播放</Text>
            <Text onPress={()=> commonAction.setPlayerIsPause(dispatch, true)}>暂停</Text>
          </View>
        </View>

        <ScrollView style={{ maxHeight: 500 }}>
          <List>
            {Array.isArray(songList) &&
              songList.map((item, index) => {
                const itemProps = {
                  key: index.toString(),
                  onClick: () => this.handleSongItemClick(item),
                };
                const briefText = item.ar.map(item => item.name).join(' ');
                const aliaText = item.alia.join(' ');
                return (
                  <Item {...itemProps} extra={<Icon size={16} name="ios-play-circle" />}>
                    <Text>
                      {item.name} <Text style={{ fontSize: 12, color: 'gray' }}>({aliaText})</Text>
                    </Text>
                    <Brief>{briefText}</Brief>
                  </Item>
                );
              })}
          </List>
        </ScrollView>
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
  },
  playerContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
