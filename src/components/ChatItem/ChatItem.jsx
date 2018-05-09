import React, { Component } from 'react';
import api from '../../api';

import './ChatItem.css';
import { GroupMembers } from '../GroupMembers/GroupMembers'
import { Avatar } from '../Avatar/Avatar'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export class ChatItemComp extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      chatName: '',
      time: null,
      error: null
    }
  }

  componentDidMount() {
    api.getRoomMessages(this.props._id)
      .then((response) => {
        this.setState({
          message: response && response.items && response.items[response.items.length - 1] && response.items[response.items.length - 1].message,
          time: response && response.items && response.items[response.items.length - 1] && new Date(response.items[response.items.length - 1]['created_at'])
        })
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: 'При загрузке сообщений произошла ошибка'
        })
      });
    this.getChatName();
  }

  async getChatName() {
    if (this.props.users.length > 2) {
      this.setState({chatName: 'Group chat'});
    } else {
      const visibleId = this.props.name.split(', ').filter((name) => name !== this.props.user._id)[0];
      const partner = await api.getUser(visibleId);
      this.setState({chatName: partner.name});
    }
  }

  render() {
    const { users } = this.props;
    const { message, time, chatName } = this.state;

    const group = users.length > 2;
    const formattedTime = time ? `${time.getHours()}:${time.getMinutes()}` : '';

    return (
      <section className={`chat ${group ? 'chat--group' : ''}`}>

        {group && (
          <React.Fragment>
            <div className="chat__name">{chatName}</div>
            <div className="chat__left">
              <Avatar size="sm" />
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
              <Avatar size="sm" />
            </div>
            <div className="chat__right">
              <div className="chat__name">{chatName}</div>
              <div className="chat__msg">{message}</div>
              <div className="chat__time">{formattedTime}</div>
            </div>
          </React.Fragment>
        )}

      </section>

    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export const ChatItem = withRouter(connect(mapStateToProps)(ChatItemComp));