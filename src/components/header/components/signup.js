import React, {Component} from 'react';
import { Form, Button, Input, Icon } from 'antd';
import './index.scss';

class Signup extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.onSignupReq(values);
          }
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <div>
              <Form onSubmit={this.handleSubmit} className="signup-form">
                <Form.Item
                  label="نام کاربری">
                    {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'لطفا نام کاربری خود را وارد کنید.' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام کاربری" />
                    )}
                </Form.Item>
                <Form.Item
                  label="آدرس ایمیل">
                    {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'لطفا ایمیل خود را وارد کنید.' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="ایمیل" />
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
                    className="signup-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    ثبت‌نام
                  </Button>
                </Form.Item>
              </Form>
            </div>
        )
    }
}

const SignupForm = Form.create({name: 'signupForm'})(Signup);
export default SignupForm;