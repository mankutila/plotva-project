import React from 'react';
import { Header } from '../Header/Header';
import { Body } from '../Body/Body';
import { MenuComponent } from '../Menu/Menu';

import './Layout.css';

export function Layout(props) {
  return (
    <React.Fragment>
      <MenuComponent />
      <Header />
      <Body />
    </ React.Fragment>
  )
}
