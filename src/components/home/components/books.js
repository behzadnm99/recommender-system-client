import React, { Component } from 'react';
import {List, Card, Skeleton} from 'antd';

export default class Books extends Component {
    componentWillMount() {
      this.props.booksReq();
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //   const {books} = this.props;
    //   console.log(nextProps)
    //   if(nextProps.books.isSuccess == true && books.isSuccess == false) {
    //     return true
    //   } else {
    //     return true
    //   }
    // }
    
    render() {
      const {isLoading, isSuccess, hasError, data} = this.props.books;

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
            <List/>
          </div>
        ) 
      }
      else {
        return (
          <div>something wrong</div>
        )
      }
    }
}