import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import api from '../../api';

import './Header.css';
import { Icon } from '../Icon/Icon';

export class HeaderComp extends Component {
  state = {
    error: null
  }

  createRoomWithUsers = async (users) => {
    try {
      const room = await api.createRoom({ name: `Group chat ${Math.random()}` });
      await Promise.all(users.map(user => this.joinUserToRoom(user, room._id)));
      this.props.history.push(`/chat/${room._id}`).go(1);
    } catch (err) {
      this.setState({ error: 'Произошла при создании комнаты.' });
    }
  };

  joinUserToRoom = async (userId, roomId) => {
    try {
      await api.userJoinRoom(userId, roomId);
    } catch (err) {
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  toggleMenu = () => {
    if (this.props.isMenuOpened) {
      this.props.dispatch({type: 'CLOSE_MENU'})
    } else {
      this.props.dispatch({type: 'OPEN_MENU'})
    }

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
    } else if (type === "create-chat") {
      title = "Создание чата"
    }
    return (
      <header className="header">
        <div className="header__left">
          {type === "chat"
            ? <span onClick={() => {this.props.history.goBack()}}>Назад</span>
            : (
              <div onClick={this.toggleMenu}>
                <Icon type="menu" />
              </div>
              )
          }
        </div>
        <div className="header__center">
          {title}
        </div>
        <div className="header__right">
          {type === "chats" && <Link to="/create-chat"><Icon type="add" /></Link>}
          {type === "create-chat" && this.props.selectedUsers.length > 1 &&
            <div onClick={() => {
              this.createRoomWithUsers(this.props.selectedUsers)
                .then(resp => {
                  console.log(resp)
                })
                .catch(err => {
                  console.log(err)
                });
            }
            }><Icon type="ok" /></div>
          }
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewTitle: state.app.viewTitle,
    isMenuOpened: state.app.isMenuOpened,
    selectedUsers: state.user.selectedUsers
  }
}

export const Header = withRouter(connect(mapStateToProps)(HeaderComp));