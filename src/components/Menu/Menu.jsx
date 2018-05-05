import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Menu.css';

export class MenuComponent extends Component {
  render () {
    return (
      <Menu width={280}>
        <div className="profile">
            <div className="avatar avatar--lg">
              <div className="avatar__img">
                <img src="http://via.placeholder.com/350x150" alt="name"/>
              </div>
            </div>
            <div>Мария Передрий</div>
        </div>
        <a id="home" className="menu-item" href="/">Чаты</a>
        <a id="about" className="menu-item" href="/">Контакты</a>
        <a id="contact" className="menu-item" href="/">Настройки</a>
      </Menu>
    );
  }
}

