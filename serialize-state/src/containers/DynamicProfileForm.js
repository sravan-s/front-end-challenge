// Connects ProfileForm to redux

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import ProfileForm from '../components/ProfileForm.js';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const DynamicProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);

export default DynamicProfileForm;
