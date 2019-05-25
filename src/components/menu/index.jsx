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
                    <Menu.Item key="movies">
                        <Icon type="video-camera" />
                        فیلم‌ها
                    </Menu.Item>
                    
                    <Menu.Item key="books">
                        <Link to={'/books'}>
                            <Icon type="book" />
                            کتاب‌ها
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}