import React from 'react';
import { Header } from '../Header/Header';
import { Body } from '../Body/Body';

import './Layout.css';

export function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </ React.Fragment>
  )
}
