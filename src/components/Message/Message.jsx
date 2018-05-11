import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar/Avatar';
import api from '../../api';

import './Message.css';
import { formatTime } from '../../helpers/chatHelpers';

export class MessageComponent extends Component {
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

  state = {
    otherUser: null
  }

  render() {
    const { user, userId, message } = this.props;
    const createdAt = this.props.created_at;
    const time = new Date(createdAt);
    const formattedTime = time ? formatTime(time) : '';
    const isMine = (user && user._id) === userId;
    return (
      <div className={`message ${isMine ? 'message--my' : ''}`}>
        <div className="message__left">
          <Avatar size="md" user={isMine ? user : this.state.otherUser} />
        </div>
        <div className="message__right">
          <div className="message__txt">
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

MessageComponent.propTypes = {
  user: PropTypes.object,
  userId: PropTypes.string,
  message: PropTypes.string,
  created_at: PropTypes.number
}
