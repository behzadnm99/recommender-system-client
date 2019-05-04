import {connect} from 'react-redux';
import AppHeader from './index';
import {loginRequest, signupRequest} from './actions/index';

const mapStateToProps = (state, ownProps) => ({
    ...state.forms.login,
    signup: state.forms.signup
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoginRequest: data => dispatch(loginRequest(data)),
    onSignupRequest: data => dispatch(signupRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps,null, {forwardRef: true})(AppHeader);