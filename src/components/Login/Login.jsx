import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function LoginComponent(props) {
  if (props.user.isFirstLogin) {
    return <Redirect to="/profile" />
  }
  return <Redirect to="/chats" />
}

const stateToProps = (state) => ({
  user: state.user.user,
});

export const Login = withRouter(connect(stateToProps)(LoginComponent));
