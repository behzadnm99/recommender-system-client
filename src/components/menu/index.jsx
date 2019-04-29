import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

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
                    
                    <Menu.Item key="movies">
                        <Icon type="video-camera" />
                        movies
                    </Menu.Item>
                    
                    <Menu.Item key="books">
                        <Link to={'/books'}>
                            <Icon type="book" />
                            books
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}