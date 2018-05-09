import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';
import api from '../../api';
import './ContactsPage.css';

class ContactsPageComp extends Component {
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

  async fetch(param) {
    if (param === null) {
      return;
    }

    try {
      const resp = await api.getUsers(param);
      const next = resp.next;
      this.setState(prevState => ({
        users: [prevState.users, ...resp.items],
      }));
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
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  async joinUserToRoom(userId, roomId) {
    console.log('try to join user with id ', userId, roomId)
    try {
      await api.userJoinRoom(userId, roomId);
    } catch (err) {
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  render() {
    return this.state.users.map((user, index) => {
      return (
        <section className="contact" key={index} onClick={() => {this.createRoomWithUser(user.name, user._id)}}>
          <Avatar size="sm" user={user} />
          {user.name ? user.name : 'Аноним'}
        </section>
      )
    });
  }
}

export const ContactsPage = withRouter(ContactsPageComp);