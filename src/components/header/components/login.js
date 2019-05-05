import React, {Component} from 'react';
import { Form, Button, Input, Icon } from 'antd';
import './index.scss';


class Login extends Component {
    
    constructor(props) {
      super(props);
      console.log(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.onLoginRequest(values);
          }
        });
    }

    handleSignupClick = () => {
      // console.log(this.props.signupModalRef)
      this.props.loginModalRef.current.props.onCancel();
      this.props.signupModalRef.current.props.onCancel();
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <div>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                  label="نام کاربری">
                    {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'لطفا نام کاربری خود را وارد کنید.' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام کاربری" />
                    )}
                </Form.Item>
                <Form.Item
                  label="رمز عبور">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'لطفا رمز عبور خود را وارد کنید.' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="رمز عبور" />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    className="login-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    ورود
                  </Button>
                </Form.Item>
              </Form>
              <Button
                onClick={this.handleSignupClick}
                className="signup-btn">
                حساب کاربری ندارید؟
              </Button>
            </div>
        )
    }
}

const LoginForm = Form.create({name: 'loginForm'})(Login);
export default LoginForm 