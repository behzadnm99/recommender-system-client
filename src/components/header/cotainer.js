import {connect} from 'react-redux';
import AppHeader from './index';
import {loginRequest, signupRequest} from './actions/index';

const mapStateToProps = (state, ownProps) => ({
    login: state.forms.login,
    signup: state.forms.signup
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoginReq: data => dispatch(loginRequest(data)),
    onSignupReq: data => dispatch(signupRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps,null, {forwardRef: true})(AppHeader);