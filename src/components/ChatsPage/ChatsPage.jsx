import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

import './ChatsPage.css';
import { ChatItem } from '../ChatItem/ChatItem'

export class ChatsPage extends Component {
  state = {
    rooms: [],
    error: null
  }

  async componentDidMount() {
    try {
      const response = await api.getCurrentUserRooms(999);
      this.setState(prevState => {
        return {
          rooms: {...prevState.rooms, ...response}
        };
      });
    } catch(err) {
      this.setState({error: 'Произола ошибка при загрузке чатов'})
    }
  }

  render() {
    const rooms = this.state.rooms.items;
    return rooms ? rooms.map((room, index) => <Link key={index} to={`/chat/${room._id}`}><ChatItem  {...room} /></Link>) : '';
  }
}
