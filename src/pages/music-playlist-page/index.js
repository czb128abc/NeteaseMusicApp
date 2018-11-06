import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Grid } from 'antd-mobile-rn';
import { connect } from '../../dva';

@connect(state => {
  const root = state.musicPlaylist;
  return {
    ...root,
  };
})
export default class MusicPlaylistPage extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log('componentDidMount');
    dispatch({
      type: 'musicPlaylist/queryTopPayList',
      payload: {},
    });
  }
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
  render() {
    const { topPayList } = this.props;
    const gridData = topPayList.map(item => ({ icon: item.coverImgUrl, text: item.name }));
    return (
      <View style={style.container}>
        <ScrollView>
          <Grid data={gridData} columnNum={2} renderItem={this.rendGridItem} />
        </ScrollView>
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
