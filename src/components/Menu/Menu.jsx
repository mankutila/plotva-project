import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

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
        <Link to="/chats" className="menu-item" href="/">Чаты</Link>
        <Link to="/contacts" className="menu-item" href="/">Контакты</Link>
        <a className="menu-item" href="/">Настройки</a>
      </Menu>
    );
  }
}

