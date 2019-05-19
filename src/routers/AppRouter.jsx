import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd'
import Header from '../components/header/cotainer';
import AppMenu from '../components/menu';
import Books from '../components/books';
import Upload from '../components/upload';
import Home from '../components/home/cotainer';
import axios from 'axios';
import { USER_CURRENT } from '../routes';

export default class AppRouter extends Component {
    
    componentDidMount() {
        if(localStorage.getItem('token') !== null) {
            axios.get(USER_CURRENT, {headers: {authorization: 'Token ' + localStorage.getItem('token')}}).then(response =>{
                if (response.status == 200) {
                    
                }
            }).catch(err => {

            })
        }
    }
    
    render() {
        return(
            <Router>
                <Layout className="app-layout">
                    <Header />
                    <Row className="main-row" type="flex" justify="center">
                        <Col className="main-column" style={{paddingTop: 96,  }} lg={16} xl={16} md={20}  xs={22} sm={22}>
            
                            <Switch>
                                <Route exact component={Home} path={'/'} />
                                <Route exact component={Upload} path={'/upload/:tab'} />
                            </Switch>
                        </Col>
                    </Row>
                    <AppMenu/>
                </Layout>
            </Router>
        )
    }
}