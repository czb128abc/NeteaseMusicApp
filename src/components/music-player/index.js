import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Grid, Modal, WingBlank, Accordion, List } from 'antd-mobile-rn';
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
        <View style={{ height: 30, display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text>播放列表</Text>
        </View>
        <View style={{flex: 1, maxHeight: 500}}>
          <ScrollView style={{  }}>
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
                    <Item {...itemProps} extra={<Icon size={24} name="ios-play-circle" />}>
                      <Text>
                        {item.name}{' '}
                        <Text style={{ fontSize: 12, color: 'gray' }}>({aliaText})</Text>
                      </Text>
                      <Brief>{briefText}</Brief>
                    </Item>
                  );
                })}
            </List>
          </ScrollView>
        </View>
        <View style={{flex:1,backgroundColor: 'red', borderColor: 'blue' ,borderStyle: 'solid', borderWidth: 1}}>
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
  playerContainer: {},
});
