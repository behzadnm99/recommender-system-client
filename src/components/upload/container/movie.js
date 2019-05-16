import {connect} from 'react-redux';
import MovieUpload from '../components/movie/index';
import {addMovieRequest} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    addMovie: state.forms.addMovie
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMovieReq: data => dispatch(addMovieRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps,null, {forwardRef: true})(MovieUpload);