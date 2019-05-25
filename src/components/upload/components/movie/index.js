import React,{Component} from 'react';
import './index.scss'
import { Form, Icon, Input, Button, Slider, Upload } from 'antd';
import lodash from 'lodash';
const { TextArea } = Input;

class Movie extends Component {

    state = {
      fileList: [],
      uploading: false,
    }

    normFile = (e) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const formData = new FormData();
          lodash.mapKeys(values, (value, key) => {
            formData.append(key, value);
          })
          formData.append('cover', this.state.fileList[0]);
          this.props.addMovieReq(formData);
        }
      });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {fileList} = this.state;
        const props = {
          onRemove: (file) => {
            this.setState((state) => {
              const index = state.fileList.indexOf(file);
              const newFileList = state.fileList.slice();
              newFileList.splice(index, 1);
              return {
                fileList: newFileList,
              };
            });
          },
          beforeUpload: (file) => {
            this.setState(state => ({
              fileList: [...state.fileList, file],
            }));
            return false;
          },
          fileList,
        };

        return(
            <div className="upload-movie-container">
                <h2 className="upload-movie-header">اگر فیلمی دیدی که دوست اونو به بقیه معرفی کنی اینجا جاشه.</h2>
                <div className="upload-movie-divider">
                    {/* <div className="upload-movie-cover">asd</div> */}
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
                          <TextArea rows={4} prefix={<Icon type="movie" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="هر توضیحی که به انتقال تجربتون کمک می‌کنه بنویسین." />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('writer', {
                          rules: [{ required: true, message: 'وارد کردن نام نویسنده ضروری است.' }],
                        })(
                          <Input prefix={<Icon type="movie" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام نویسنده" />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                                                <h4>نمره شما (از ۱۰۰)</h4>
                        {getFieldDecorator('stars', {
                          rules: [{ required: true, message: '' }],
                          initialValue: 30,
                        })(
                          <Slider pref/>
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('translator', {
                          rules: [{ required: false, message: 'نام متجرم' }],
                        })(
                          <Input prefix={<Icon type="movie" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام مترجم" />
                        )}
                      </Form.Item>
                      <Form.Item
                      >
                        {getFieldDecorator('password', {
                          rules: [{ required: false, message: '' }],
                        })(
                          <Input prefix={<Icon type="movie" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="ژانر فیلم" />
                        )}
                      </Form.Item>

                      <Form.Item>
                        {getFieldDecorator('upload', {
                          getValueFromEvent: this.normFile,
                        })(
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> بارگذاری تصویر
                            </Button>
                          </Upload>,
                        )}
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

const MovieForm = Form.create({name: 'movie-recommend-form'})(Movie);
export default MovieForm;
