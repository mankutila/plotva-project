import React, { Component } from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';

import './Menu.css';

export class MenuComp extends Component {
  render() {
    const { name, img } = this.props;
    return (
      <Menu width={280}>
        <div className="profile">
            <div className="avatar avatar--lg">
              <div className="avatar__img">
                <img src={img} alt={name} />
              </div>
            </div>
            <div>{name}</div>
        </div>
        <Link to="/chats" className="menu-item" href="/">Чаты</Link>
        <Link to="/contacts" className="menu-item" href="/">Контакты</Link>
        <a className="menu-item" href="/">Настройки</a>
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