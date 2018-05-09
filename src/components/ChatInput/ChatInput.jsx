import React, { Component } from 'react';
import api from '../../api';
import './ChatInput.css';

import { connect } from 'react-redux';

export class ChatInputComponent extends Component {
  state = {
    error: null
  }

  async sendMessage() {
    const mess = await api.sendMessage(this.props.room._id, this.refs.message.value);
    this.props.dispatch({
      type: 'APPEND_MESSAGES',
      messages: [...this.props.messages, mess]
    })
  }

  render() {
    return (
      <form
        className="send-message"
        onSubmit={(e) => {
          e.preventDefault();
          this.sendMessage()
        }
      }>
        <input type="text" ref="message" placeholder="Ваше сообщение..." />
        <button>Отправить</button>
      </form>

    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    messages: state.messages.roomMessages
  }
}

export const ChatInput = connect(mapStateToProps)(ChatInputComponent);