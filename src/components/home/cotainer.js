import {connect} from 'react-redux';
import Home from './index';
import { booksRequest, moviesRequest } from './actions';

const mapStateToProps = (state, ownProps) => ({
    books: state.home.books,
    movies: state.home.movies
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    booksReq: data => dispatch(booksRequest(data)),
    moviesReq: data => dispatch(moviesRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);