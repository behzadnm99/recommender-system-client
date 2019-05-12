import React, {Component} from 'react';
import { Layout, Menu, Icon, Button, Modal, Form } from 'antd';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import {Link} from 'react-router-dom'

import './index.scss';

const { Header } = Layout;
const {confirm, info} = Modal;

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { loginModalVisible: false, signupModalVisible: false }
        this.loginModalRef = React.createRef();
        this.signupModalRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.loginModalRef)
    }

    showLoginModal = () => {
        this.setState({
            loginModalVisible: !this.state.loginModalVisible
        })
    }

    closeLoginModal = () => {
        this.setState({
            loginModalVisible: !this.state.loginModalVisible
        })
    }

    showSignupModal = () => {
        this.setState({
            signupModalVisible: !this.signupModalVisible
        })
    }

    closeSignupModal = () => {
        this.setState({
            signupModalVisible: !this.state.signupModalVisible
        })
    }

    render() {
        return(
            <div>
                <Header className="app-header">
                    <div>
                        <Button icon="plus" type="link"><Link to={'/upload/book'}></Link></Button>
                        <Button icon="user" shape="round" onClick={this.showLoginModal}>ورود</Button>
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
                    onCancel={this.closeLoginModal}
                    okButtonProps={{style:{display: 'none'}}}
                    cancelButtonProps={{style:{display: 'none'}}}
                    footer={null}>
                    <LoginForm 
                        onLoginRequest={this.props.onLoginRequest}
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
                    onCancel={this.closeSignupModal}
                    okButtonProps={{style:{display: 'none'}}}
                    cancelButtonProps={{style:{display: 'none'}}}
                    footer={null}>
                    <SignupForm
                        onSignupRequest={this.props.onSignupRequest}/>
                </Modal>
            </div>
        )
    }
}