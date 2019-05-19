import React, {Component} from 'react';
import MoviesComponent from './components/movies';
import BooksComponent from './components/books';

export default class Home extends Component {

    render() {
        return (
            <div>
                <BooksComponent booksReq={this.props.booksReq} books={this.props.books}/>
                <MoviesComponent moviesReq={this.props.moviesReq} movies={this.props.movies}/>
            </div>
        )
    }
}   