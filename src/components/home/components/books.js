import React, { Component } from 'react';
import {List, Skeleton} from 'antd';
import BookCard from './book';
import config from '../../../consts';

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
            <List
              grid={{gutter:12,
              lg:4,
              xxl:5,
              xl:5}}
              dataSource={data.data.data}
              renderItem={item => (
                <List.Item>
                  <BookCard genres={item.genres} coverSrc={`${config.server.s3.url}books-img/${item.coverName}`} title={item.name} description={item.description}/>
                </List.Item>
              )}/>
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