import React, { Component } from 'react';

import './Header.css';
import { Icon } from '../Icon/Icon'

export class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__left">
          <Icon type="menu" />
        </div>
        <div className="header__center">
          Чаты
        </div>
        <div className="header__right">
          <Icon type="add" />
        </div>
      </header>
    );
  }
}
