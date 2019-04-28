import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import './index.scss';

export default class AppMenu extends Component {
    render() {
        return (
            <div>
                <Menu 
                    className="app-menu" 
                    mode="horizontal">
                    <Menu.Item key="user">
                        <Icon type="user" />
                        profile
                    </Menu.Item>
                    
                    <Menu.Item key="">
                        <Icon type="video-camera" />
                        movies
                    </Menu.Item>
                    
                    <Menu.Item key="">
                        <Icon type="book" />
                        books
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}