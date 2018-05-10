import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Header.css';
import { Icon } from '../Icon/Icon';

export class HeaderComp extends Component {
  openMenu = () => {
    this.props.dispatch({type: 'OPEN_MENU'})
  }
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
          {type === "chat"
            ? <span onClick={() => {this.props.history.goBack()}}>Назад</span>
            : (
              <div onClick={this.openMenu}>
                <Icon type="menu" />
              </div>
              )
          }
        </div>
        <div className="header__center">
          {title}
        </div>
        <div className="header__right">
          {type === "chats" && <Icon type="add" />}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewTitle: state.app.viewTitle,
    isMenuOpened: state.app.isMenuOpened
  }
}

export const Header = withRouter(connect(mapStateToProps)(HeaderComp));