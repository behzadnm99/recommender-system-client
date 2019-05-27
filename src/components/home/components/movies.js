import React, { Component } from 'react';
import {List, Card, Skeleton} from 'antd';
import MovieCard from './movie';
import config from '../../../consts';

export default class Movies extends Component {

    componentWillMount() {
      this.props.moviesReq();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log(nextProps);
    // }

    render() {
      const {isLoading, isSuccess, hasError, data} = this.props.movies;
      if(isLoading) {
        return(
          <div>
            <Skeleton active/>
          </div>
        )
      } 
      else if (hasError) {
        return(
          <div>error</div>
        )
      }
      else if(isSuccess){
        return(
          <div>
            <List
              grid={{gutter:12,
              lg:4,
              xxl:5,
              xl:5}}
              dataSource={data.data.data}
              renderItem={item => (
                <List.Item>
                  <MovieCard genres={item.genres} coverSrc={`${config.server.s3.url}movies-img/${item.coverName}`} title={item.name} description={item.description}/>
                </List.Item>
              )}/>
          </div>
        ) 
      }
      else {
        return(
          <div>something wrong</div>
        )
      }
    }
}