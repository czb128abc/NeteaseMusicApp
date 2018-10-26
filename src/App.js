import React from 'react';
import {Text} from 'react-native';
import { TabBar } from 'antd-mobile-rn';

const TabBarItem = TabBar.Item;

const tabBarMap = {
    'key_0': {
        title: "发现音乐",
        content: '音乐sdfsd'
    },
    'key_1': {
        title: "音乐",
        content: '我的音乐sdfsd'
    }
}

export default class AppView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabBarSelectedKey: 'key_1',
        }
    }
    tabBarIsSelected(key) {
        return this.state.tabBarSelectedKey === key;
    }
    handleTabBarPress(tabBarSelectedKey) {
        this.setState({tabBarSelectedKey})
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
               {
                    Object.keys(tabBarMap).map(item => {
                        return (
                            <TabBarItem
                                title={tabBarMap[item].title}
                                key={item}
                                selected={this.tabBarIsSelected(item)}
                                onPress={()=> this.handleTabBarPress(item)}
                            >
                                <Text>{tabBarMap[item].content}</Text>
                            </TabBarItem>
                        )
                    })
                }
            </TabBar>
        )
    }
}