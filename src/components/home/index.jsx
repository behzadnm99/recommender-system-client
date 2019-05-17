import React, {Component} from 'react';
import MoviesContainer from './containers/movies';
import BooksContainer from './containers/books';

export default class Home extends Component {
    render() {
        return(
            <div>
                <BooksContainer/>
                <MoviesContainer/>
            </div>
        )
    }
}