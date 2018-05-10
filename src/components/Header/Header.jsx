import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';
import { Icon } from '../Icon/Icon';

export class HeaderComp extends Component {
  render() {
    const { type, viewTitle } = this.props;
    let title = '';
    if (type === "chat") {
      title = viewTitle;
    } else if (type === "contacts") {
      title = "Контакты"
    } else if (type === "chats") {
      title = "Чаты"
    } else if (type === "profile") {
      title = "Профиль"
    }
    return (
      <header className="header">
        <div className="header__left">
          {type === "chat" && <span>Назад</span>}
          <Icon type="menu" />
        </div>
        <div className="header__center">
          {title}
        </div>
        <div className="header__right">
          {type === "chat" && <Icon type="add" />}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewTitle: state.app.viewTitle
  }
}

export const Header = connect(mapStateToProps)(HeaderComp);