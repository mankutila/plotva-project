import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Body } from '../Body/Body';
import { MenuComponent } from '../Menu/Menu';

export function Layout(props) {
  return (
    <React.Fragment>
      <MenuComponent />
      <Header type={props.header} />
      <Body content={props.body} />
    </ React.Fragment>
  )
}

Layout.propTypes = {
  header: PropTypes.string,
  body: PropTypes.element
}
