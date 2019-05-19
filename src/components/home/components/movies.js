import React, { Component } from 'react';
import {List, Card, Skeleton} from 'antd';
import BookCard from './book';

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
      else if (isSuccess){
        return(<div>
          <List/>
        </div>)
      }
      else {
        return(
          <div>something wrong</div>
        )
      }
    }
}