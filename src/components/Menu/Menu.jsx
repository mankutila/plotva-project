import React, { Component } from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';

import './Menu.css';

export class MenuComp extends Component {
  render() {
    const { user } = this.props;
    return (
      <Menu width={280}>
        <div className="profile">
            <div className="avatar avatar--lg">
              <div className="avatar__img">
                <img src={user.img} alt={user.name} />
              </div>
            </div>
            <div>{user.name}</div>
        </div>
        <Link to="/chats" className="menu-item">Чаты</Link>
        <Link to="/contacts" className="menu-item">Контакты</Link>
        <Link to="/settings" className="menu-item">Настройки</Link>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  }
}

export const MenuComponent = withRouter(connect(mapStateToProps)(MenuComp));