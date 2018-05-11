import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function LoginComponent(props) {
  if (props.user.isFirstLogin) {
    return <Redirect to="/settings" />
  }
  return <Redirect to="/chats" />
}

const stateToProps = (state) => ({
  user: state.user.user,
});

export const Login = withRouter(connect(stateToProps)(LoginComponent));

LoginComponent.propTypes = {
  user: PropTypes.object
}
