import {connect} from 'react-redux';
import Movies from '../components/movies';
import { moviesRequest } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    Books: state.books.homeBooks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMoviesReq: data => dispatch(moviesRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);