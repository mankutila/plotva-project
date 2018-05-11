import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

import { ChatItem } from '../ChatItem/ChatItem'

export class ChatsPage extends Component {
  async componentDidMount() {
    this.getRooms();
  }

  state = {
    rooms: [],
    error: null
  }

  async getRooms() {
    try {
      const response = await api.getCurrentUserRooms(999);
      this.setState(prevState => {
        return {
          rooms: {...prevState.rooms, ...response}
        };
      });
    } catch(err) {
      this.setState({error: 'Произошла ошибка при загрузке чатов'})
    }
  }

  render() {
    const rooms = this.state.rooms.items;
    let result = <p>Пока чатов нет</p>;
    if (rooms && rooms.length > 0) {
      result = rooms.map((room, index) => <Link key={index} to={`/chat/${room._id}`}><ChatItem {...room} /></Link>);
    }
    return result;
  }
}
