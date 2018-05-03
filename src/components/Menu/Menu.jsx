import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Menu.css';

export class MenuComponent extends Component {
  render () {
    return (
      <Menu width={ 280 }>
        
        <a id="home" className="menu-item" href="/">Чаты</a>
        <a id="about" className="menu-item" href="/">Контакты</a>
        <a id="contact" className="menu-item" href="/">Настройки</a>
      </Menu>
    );
  }
}

