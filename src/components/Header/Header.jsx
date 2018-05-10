import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import api from '../../api';

import './Header.css';
import { Icon } from '../Icon/Icon';

export class HeaderComp extends Component {
  /*newChat = async () => {
    const {user, selectedUsers} = this.props
    try {
      const rooms = await api.getRooms({ name: this.props.chatName });
      if (!rooms.count) {
        selectedUsers.push(user)
        await this.createRoomWithUsers(this.props.chatName, selectedUsers);

        const users = [].concat(this.props.users);
        users.forEach(user => {user.checked = false});
        /!*this.props.dispatch(setUsers(users));
        this.props.dispatch(setSelectedUsers([]));*!/
      }
    } catch (err) {
      this.setState({ error: 'Произошла ошибка.' });
    }
  };*/

  createRoomWithUsers = async (users) => {
    try {
      const room = await api.createRoom({ name: 'Group chattt' });
      await Promise.all(users.map(user => this.joinUserToRoom(user, room._id)));
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
          <div onClick={() => {
            if (this.props.selectedUsers.length > 0) {
              this.createRoomWithUsers(this.props.selectedUsers)
                .then(resp => {
                  console.log(resp)
                })
                .catch(err => {
                  console.log(err)
                });
            }
          }
          }>
            {type === "create-chat" && <Icon type="ok" />}
          </div>

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