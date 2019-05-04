import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'
import Header from '../components/header/cotainer';
import AppMenu from '../components/menu';
import Books from '../components/books';

export default () => (
    <Router>
        <Layout className="app-layout">
            <Header />
            <Switch>
                <Route exact component={Books} path={'/'} />
                <Route exact component={Books} path={'/'} />
                <Route exact component={Books} path={'/'} />
                <Route exact component={Books} path={'/'} />
            </Switch>
            <AppMenu/>
        </Layout>
    </Router>
)