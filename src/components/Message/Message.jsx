import React, { Component } from 'react';

import './Message.css';
import { Avatar } from '../Avatar/Avatar';
import { connect } from 'react-redux';
import api from '../../api';
import { formatTime } from '../../helpers/chatHelpers';

export class MessageComponent extends Component {
  state = {
    otherUser: null
  }
  async componentDidMount() {
    const { user, userId } = this.props;
    if ((user && user._id) !== userId) {
      try {
        const otherUser = await api.getUser(userId);
        this.setState({
          otherUser: otherUser
        })
      } catch(err) {
        console.log(err)
      }

    }
  }

  render() {
    const { user, userId, created_at, message } = this.props;
    const time = new Date(created_at);
    const formattedTime = time ? formatTime(time) : '';
    const isMine = (user && user._id) === userId;
    return (
      <div className={`message ${isMine ? 'message--my' : ''}`}>
        <div className="message__left">
          <Avatar size="md" user={isMine ? user : this.state.otherUser} />
        </div>
        <div className="message__right">
          <div className="message__txt">
            {/*<div className="message__owner">{isMine ? user.name : this.state.otherUser.name}</div>*/}
            {message}
          </div>
          <div className="message__time">{formattedTime}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export const Message = connect(mapStateToProps)(MessageComponent);