import React, { Component } from 'react'
import { Card } from 'antd';
import './index.scss';

const { Meta } = Card;

export default class BookCard extends Component {
    
    render() {
        const {title, coverSrc, description} = this.props
        return (
            <div>
                <Card
                    cover={<img alt="example" src={coverSrc} />}
                    hoverable>
                    <Meta title={title} description={description}/>
                </Card>
            </div>
        );
    }
}