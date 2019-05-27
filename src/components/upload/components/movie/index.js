import React,{Component} from 'react';
import './index.scss'
import { Form, Icon, Input, Button, Slider, Spin, Modal } from 'antd';
import CropViewer from 'rc-cropping';
import pica from 'pica';
import lodash from 'lodash';
const { TextArea } = Input;

class Movie extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const formData = new FormData();
          lodash.mapKeys(values, (value, key) => {
            formData.append(key, value);
          })
          this.props.addMovieReq(formData);
        }
      });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {isLoading} = this.props.addMovie;

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
                        {getFieldDecorator('cover', {
                          rules: [{required: true, message: 'بدون انتخاب کارو امکان پیشنهاد دادن نیست.'}],
                        })(
                          <CropViewer
                          disabled={isLoading}
                          resizer={this.resizer}
                          size={[160, 210]}
                          thumbnailSizes={[[160,210]]}
                          getSpinContent={() => <Spin /> }
                          renderModal={() => <Modal />}
                          fileType="image/jpeg"
                          accept="image/gif,image/jpeg,image/png,image/bmp,image/x-png,image/pjpeg"
                        >انتخاب کاور</CropViewer>                        
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
