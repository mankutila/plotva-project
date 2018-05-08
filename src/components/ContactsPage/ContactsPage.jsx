import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';
import api from '../../api';
import './ContactsPage.css';

export class ContactsPage extends Component {
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
      this.props.history.push(`/chat/${room._id}`);
      await this.joinUserToRoom(userId, room._id);
      console.log('CREATED ROOM', room)
    } catch (err) {
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  async joinUserToRoom(userId, roomId) {
    try {
      await api.userJoinRoom(userId, roomId);
    } catch (err) {
      this.setState({ error: 'Произошла ошибка при создании комнаты.' });
    }
  };

  render() {
    return this.state.users.map((user, index) => {
      return (
        <Link className="contact" key={index} to={`/chat/${user._id}`} onClick={() => {this.createRoomWithUser(user.name, user._id)}}>
          <Avatar size="sm" user={user} />
          {user.name ? user.name : 'Аноним'}
        </Link>
      )
    });
  }
}
