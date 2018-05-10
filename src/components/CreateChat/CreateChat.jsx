import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Contact } from '../Contact/Contact';

import api from '../../api';
import './CreateChat.css';

class CreateChatComp extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: null
    };
    this.createRoomWithUser = this.createRoomWithUser.bind(this);
    this.joinUserToRoom = this.joinUserToRoom.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'SET_SELECTED_USER',
      selectedUsers: []
    });
  }

  async fetch(param) {
    if (param === null) {
      return;
    }

    try {
      const resp = await api.getUsers(param);
      const next = resp.next;
      this.setState((prevState) => {
        return {
          users: prevState.users.concat(resp.items)
        }
      });
      await this.fetch(next);
    } catch (err) {
      console.error(err);
      this.setState({ error: 'Ошибка при загрузке контактов' });
    }
  }

  async createRoomWithUser(name, userId) {
    try {
      const room = await api.createRoom({ name });
      await this.joinUserToRoom(userId, room._id);
      this.props.history.push(`/chat/${room._id}`).go(1);
    } catch (err) {
      console.log(err);
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  async joinUserToRoom(userId, roomId) {
    console.log('try to join user with id ', userId, roomId)
    try {
      await api.userJoinRoom(userId, roomId);
    } catch (err) {
      console.log(err);
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  render() {
    const filteredUsers = this.state.users.filter((user) => user._id !== this.props.user._id);
    return filteredUsers.map((user, index) => <Contact user={user} key={index} index={index} />);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export const CreateChat = withRouter(connect(mapStateToProps)(CreateChatComp));