import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd'
import Header from '../components/header/cotainer';
import AppMenu from '../components/menu';
import Books from '../components/books';
import Upload from '../components/upload/index';

export default () => (
    <Router>
        <Layout className="app-layout">
            <Header />
            <Row className="main-row" type="flex" justify="center">
                <Col style={{paddingTop: 64}} lg={16} xl={16} md={20}  xs={22} sm={22}>
                    <Switch>
                        <Route exact component={Books} path={'/'} />
                        <Route exact component={Upload} path={'/upload/:tab'} />
                    </Switch>
                </Col>
            </Row>
            <AppMenu/>
        </Layout>
    </Router>
)