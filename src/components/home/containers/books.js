import {connect} from 'react-redux';
import Books from '../components/books';
import { booksRequest } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    Books: state.books.homeBooks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBooksReq: data => dispatch(booksRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);