import React,{Component} from 'react';
import './index.scss'
import { Form, Icon, Input, Button, Slider, Upload } from 'antd';

const { TextArea } = Input;

class Book extends Component {

    componentDidMount() {

    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return(
            <div>
                <h2 className="upload-book-header">اگر کتابی خوندی که دوست اونو به بقیه معرفی کنی اینجا جاشه.</h2>
                <div className="upload-book-divider">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Item
                      >
                        {getFieldDecorator('name', {
                          rules: [{ required: true, message: 'وارد کردن نام کتاب ضروری است.' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="عنوان" />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('description', {
                          rules: [{ required: true, message: 'وارد کردن توضیحات ضروری است.' }],
                        })(
                          <TextArea rows={4} prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="هر توضیحی که به انتقال تجربتون کمک می‌کنه بنویسین." />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('writer', {
                          rules: [{ required: true, message: 'وارد کردن نام نویسنده ضروری است.' }],
                        })(
                          <Input prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام نویسنده" />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                                                <h4>نمره شما (از ۱۰۰)</h4>
                        {getFieldDecorator('stars', {
                          rules: [{ required: true, message: '' }],
                        })(
                          <Slider pref defaultValue={30}/>
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('translator', {
                          rules: [{ required: false, message: 'نام متجرم' }],
                        })(
                          <Input prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام مترجم" />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('password', {
                          rules: [{ required: false, message: '' }],
                        })(
                          <Input prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="ژانر کتاب" />
                        )}
                      </Form.Item>
                      <Form.Item
                        label="Dragger"
                      >
                        <div className="dropbox">
                          {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                          })(
                            <Upload.Dragger name="files" action="/upload.do">
                              <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                              </p>
                              <p className="ant-upload-text">Click or drag file to this area to upload</p>
                              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                          )}
                        </div>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                        >
                          ثبت پیشنهاد
                        </Button>
                      </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const BookForm = Form.create({name: 'book-recommend-form'})(Book);
export default BookForm;
