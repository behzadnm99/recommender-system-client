import React, {Component} from 'react';
import { Layout, Menu, Icon, Button, Modal, Dropdown } from 'antd';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import {Link} from 'react-router-dom'

import './index.scss';

const { Header } = Layout;
const {confirm, info} = Modal;

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { loginModalVisible: false, signupModalVisible: false,  isAuthenticated: localStorage.getItem('isAuthenticated')}
        this.loginModalRef = React.createRef();
        this.signupModalRef = React.createRef();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.login.isSuccess) {
            console.log(nextProps.login)
            localStorage.setItem('token', nextProps.login.data.data.user.token);
            localStorage.setItem('hasToken', true);
            localStorage.setItem('username', nextProps.login.data.data.user.username);
            window.location.reload();
        }
    }

    toggleLoginModal = () => {
        this.setState({
            loginModalVisible: !this.state.loginModalVisible
        })
    }

    toggleSignupModal = () => {
        this.setState({
            signupModalVisible: !this.state.signupModalVisible
        })
    }

    signout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.setItem('hasToken', false);
        localStorage.setItem('isAuthenticated', false);
        window.location.reload();
    }

    render() {
        const username = localStorage.getItem('username');

        let popoverContent = (
            <Menu>
                <Menu.Item disabled key="profile"><Icon type="user" />پروفایل</Menu.Item>
                <Menu.Item key="exit"  onClick={this.signout} ><Icon type="stop"/>خروج</Menu.Item>
            </Menu>
        )

        return(
            <div>
                {console.log(this.state.isAuthenticated)}
                <Header className="app-header">
                    <div>
                        <Button className="upload-page-btn"><Link to={'/upload/book'}>بارگذاری</Link></Button>
                        {this.state.isAuthenticated == "true" ? 
                            <Dropdown
                                overlay={popoverContent}>
                                <Button shape="round">
                                    <Icon type="user"/>{username}
                                </Button>
                            </Dropdown>
                        :
                        <Button icon="user" shape="round" onClick={this.toggleLoginModal}>ورود</Button>
                        }
                    </div>
                    <h3 className="header-text">
                        Recommender
                    </h3>
                </Header>
                <Modal
                    ref={this.loginModalRef}
                    width={380}
                    title='وورد به حساب کاربری'
                    centered
                    closable={false}
                    visible={this.state.loginModalVisible}
                    onCancel={this.toggleLoginModal}
                    okButtonProps={{style:{display: 'none'}}}
                    cancelButtonProps={{style:{display: 'none'}}}
                    footer={null}>
                    <LoginForm 
                        onLoginReq={this.props.onLoginReq}
                        loginModalRef={this.loginModalRef}
                        signupModalRef={this.signupModalRef}/>
                </Modal>
                <Modal
                    ref={this.signupModalRef}
                    width={380}
                    title='ساخت حساب کاربری'
                    centered
                    closable={false}
                    visible={this.state.signupModalVisible}
                    onCancel={this.toggleSignupModal}
                    okButtonProps={{style:{display: 'none'}}}
                    cancelButtonProps={{style:{display: 'none'}}}
                    footer={null}>
                    <SignupForm
                        onSignupReq={this.props.onSignupReq}/>
                </Modal>
            </div>
        )
    }
}