import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Grid, Modal, WingBlank, Flex, List } from 'antd-mobile-rn';
import MusicPlayer from './../../components/music-player';
import * as commonAction from './../../commonAction';
import { connect } from '../../dva';

@connect(state => {
  const root = state.musicPlaylist;
  return {
    ...root,
  };
})
export default class MusicPlaylistPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    console.log('componentDidMount');
    dispatch({
      type: 'musicPlaylist/queryTopPayList',
      payload: {},
    });
  }

  handleGridItemClick = el => {
    const { dispatch } = this.props;
    const { id } = el;
    this.setState({ visible: true });
    dispatch({
      type: 'musicPlaylist/queryTopPayDetail',
      payload: {
        id,
      },
    });
  };
  handleDetailModalSongListItemClick = async (item) => {
    const list = this.props.topPayDetail.tracks;
    const { dispatch} = this.props;
    console.log('....handleDetailModalSongListItemClick', item, list);
    await commonAction.playerClearSongs(dispatch, list);
    await commonAction.playerAddSongs(dispatch, list);
    await commonAction.playNewSong(dispatch, item);
  };
  rendGridItem = (el, index) => {
    return (
      <View style={style.gridItemContainer} key={index.toString()}>
        <View style={style.imgContainer}>
          {el.icon && <Image source={{ uri: el.icon }} style={style.img} />}
        </View>
        <View style={style.textContainer}>
          <Text numberOfLines={1}>{el.text}</Text>
        </View>
      </View>
    );
  };

  rendDetailModal() {
    const { visible } = this.state;
    const { topPayDetail } = this.props;
    return (
      <Modal
        visible={visible}
        onClose={() => this.setState({ visible: false })}
        animationType="slide"
        closable
      >
        <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
          <WingBlank size="sm">
            <Flex justify="start" onPress={() => this.setState({ visible: false })}>
              <Flex.Item style={{ flex: 0 }}>
                <Icon name="ios-arrow-back" size={16} />
              </Flex.Item>
              <Flex.Item style={{ paddingHorizontal: 8 }}>
                <Text style={{ fontSize: 16 }}>detail</Text>
              </Flex.Item>
            </Flex>
          </WingBlank>
          <MusicPlayer />
          {topPayDetail && (
            <ScrollView>
              <List>
                {Array.isArray(topPayDetail.tracks) &&
                  topPayDetail.tracks.map((item, index) => {
                    const itemProps = {
                      key: index.toString(),
                      onClick: () => this.handleDetailModalSongListItemClick(item),
                    };
                    if (item.al && item.al.picUrl) {
                      itemProps.thumb = item.al.picUrl;
                    }
                    return (
                      <List.Item {...itemProps} extra={<Icon name="ios-play-circle" />}>
                        <Text>{item.name}</Text>
                      </List.Item>
                    );
                  })}
              </List>
            </ScrollView>
          )}
        </View>
      </Modal>
    );
  }

  render() {
    const { topPayList } = this.props;
    const gridData = topPayList.map(item => ({
      icon: item.coverImgUrl,
      text: item.name,
      id: item.id,
    }));
    return (
      <View style={style.container}>
        <ScrollView>
          <Grid
            data={gridData}
            columnNum={2}
            renderItem={this.rendGridItem}
            onClick={this.handleGridItemClick}
          />
        </ScrollView>
        {this.rendDetailModal()}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    overflow: 'scroll',
  },
  gridItemContainer: {},
  imgContainer: {
    height: 150,
    backgroundColor: 'transparent',
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  textContainer: {
    padding: 0,
  },
});
