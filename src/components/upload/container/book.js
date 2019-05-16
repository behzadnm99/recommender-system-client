import {connect} from 'react-redux';
import BookForm from '../components/book';
import { addBookRequest } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
    ...state.forms.addBook
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addBookReq: data => dispatch(addBookRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps,null, {forwardRef: true})(BookForm);