import {connect} from 'react-redux';
import BookForm from '../components/book';
// import {loginRequest, signupRequest} from './actions/index';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps,null, {forwardRef: true})(BookForm);