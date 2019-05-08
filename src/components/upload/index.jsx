import React, {Component} from 'react';
import { Row, Col, Tabs } from 'antd';
import BookContainer from './container/book';
import MovieContainer from './container/movie';
import './index.scss';

const TabPane = Tabs.TabPane;

const TabHeader = () => {
    return (
        <div className="tab-header">
            معرفی پیشنهاد جدید
        </div>
        )
}

class Upload extends Component {
    render() {
        return(
            <div>
                <Tabs
                    tabBarExtraContent={<TabHeader/>}
                    className="upload-tabs"
                    tabPosition="right"
                    defaultActiveKey="book">
                    <TabPane
                        className="upload-book"
                        tab="کتاب"
                        key="book">
                        <BookContainer/>
                    </TabPane>

                    <TabPane
                        className="upload-movie"
                        tab="فیلم"
                        key="movie">
                        <MovieContainer/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Upload;