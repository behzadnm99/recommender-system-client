import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import './index.scss';

const { Header } = Layout;

export default class AppHeader extends Component {
    render() {
        return(
            <div>
                <Header className="app-header">
                    <h3 className="header-text">
                        Recommender
                    </h3>
                </Header>
            </div>
        )
    }
}