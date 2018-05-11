import React, { Component } from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';

import './Menu.css';

export class MenuComp extends Component {
  closeMenu = () => {
    this.props.dispatch({type:'CLOSE_MENU'});
  }
  render() {
    const { user, isMenuOpened } = this.props;
    return (
      <Menu
        width={280}
        customBurgerIcon={false}
        isOpen={isMenuOpened}
        onStateChange={(state) => {
          if (!state.isOpen) {
            this.closeMenu();
          }
        }}>
        <div className="profile">
            <Avatar size="lg" user={user}/>

            <div>{user.name}</div>
        </div>
        <Link to="/chats" onClick={this.closeMenu} className="menu-item">Чаты</Link>
        <Link to="/contacts" onClick={this.closeMenu} className="menu-item">Контакты</Link>
        <Link to="/settings" onClick={this.closeMenu} className="menu-item">Настройки</Link>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isMenuOpened: state.app.isMenuOpened
  }
}

export const MenuComponent = withRouter(connect(mapStateToProps)(MenuComp));