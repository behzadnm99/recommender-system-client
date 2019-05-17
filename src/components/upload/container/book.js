import {connect} from 'react-redux';
import BookForm from '../components/book';
import { addBookRequest } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    addBook: state.forms.addBook
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addBookReq: data => dispatch(addBookRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps,null, {forwardRef: true})(BookForm);