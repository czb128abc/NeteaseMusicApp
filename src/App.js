import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TabBar } from 'antd-mobile-rn';
import { NativeRouter, Route } from 'react-router-native';
import { MusicPlaylistPage } from './pages';

const TabBarItem = TabBar.Item;

const tabBarMap = {
  key_0: {
    title: '推荐音乐',
    content: '音乐',
    path: '/music-playlist',
    component: MusicPlaylistPage,
  },
  // key_1: {
  //   title: '我的音乐',
  //   content: '我的音乐',
  // },
};
type Props = {};
export default class AppView extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      tabBarSelectedKey: 'key_0',
    };
  }
  tabBarIsSelected(key) {
    return this.state.tabBarSelectedKey === key;
  }
  handleTabBarPress(tabBarSelectedKey) {
    this.setState({ tabBarSelectedKey });
  }
  render() {
    return (
      <NativeRouter>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          style={style.rootContainer}
        >
          {Object.keys(tabBarMap).map(item => {
            const obj = tabBarMap[item];
            const Com = obj.component;
            return (
              <TabBarItem
                title={obj.title}
                key={item}
                selected={this.tabBarIsSelected(item)}
                onPress={() => this.handleTabBarPress(item)}
              >
                {obj.path ? <Route path={item.path} component={Com} /> : <Text>{obj.content}</Text>}
              </TabBarItem>
            );
          })}
        </TabBar>
      </NativeRouter>
    );
  }
}

const style = StyleSheet.create({
  rootContainer: {
    marginTop: 25,
  },
});
