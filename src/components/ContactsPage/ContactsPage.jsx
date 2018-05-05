import React, { Component } from 'react';
import api from '../../api';

import './ContactsPage.css';
import { ChatItem } from '../ChatItem/ChatItem'
import { Avatar } from '../Avatar/Avatar'

export class ContactsPage extends Component {
  state = {
    users: [],
    error: null
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

  render() {
    return this.state.users.map((user, index) => {
      return (
        <div className="contact" key={index}>
          <Avatar size="sm" user={user} />
          {user.name ? user.name : 'Аноним'}
        </div>
      )
    });

    // const rooms = this.state.rooms.items;
    // return rooms ? rooms.map((room, index) => <ChatItem key={index} {...room} />) : '';
  }
}
