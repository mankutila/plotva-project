import React, { Component } from 'react';
import api from '../../api';

import './ChatItem.css';
import { GroupMembers } from '../GroupMembers/GroupMembers'

export class ChatItem extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      time: null,
      error: null
    }
  }

  async componentDidMount() {
    try {
      const response = await api.getRoomMessages(this.props._id);
      this.setState({
        message: response && response.items && response.items[response.items.length - 1] && response.items[response.items.length - 1].message,
        time: new Date(response.items[response.items.length - 1]['created_at'])
      })
    } catch(err) {
      this.setState({
        error: 'При загрузке сообщений произошла ошибка'
      })
    }

  }

  render() {
    const { name, users } = this.props;
    const { message, time } = this.state;

    const group = users.length > 2;
    const formattedTime = time ? `${time.getHours()}:${time.getMinutes()}` : '';

    return (
      <section className={`chat ${group ? 'chat--group' : ''}`}>

        {group && (
          <React.Fragment>
            <div className="chat__name">{name}</div>
            <div className="chat__left">
              <div className="avatar avatar--online avatar--sm">
                <div className="avatar__img">
                  <img src="http://via.placeholder.com/350x150" alt="name"/>
                </div>
              </div>
            </div>
            <div className="chat__right">
              <div className="chat__msg">{message}</div>
            </div>
            <div className="chat__time">{formattedTime}</div>
            <GroupMembers members={users} />
          </React.Fragment>
        )
        }

        {!group && (
          <React.Fragment>
            <div className="chat__left">
              <div className={`avatar `}>
                <div className="avatar__img">
                  <img src="http://via.placeholder.com/350x150" alt="name"/>
                </div>
              </div>
            </div>
            <div className="chat__right">
              <div className="chat__name">{name}</div>
              <div className="chat__msg">{message}</div>
              <div className="chat__time">{formattedTime}</div>
            </div>
          </React.Fragment>
        )}

      </section>

    )
  }



}
