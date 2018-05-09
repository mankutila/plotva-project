import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import api from '../../api';
import './ChatInput.css';

import { connect } from 'react-redux';

export class ChatInputComponent extends Component {
  state = {
    error: null
  }

  async sendMessage() {
    const mess = await api.sendMessage(this.props.room._id, this.message.value);
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
        <TextareaAutosize
          maxRows={4}
          className="send-message__txt"
          innerRef={ref => this.message = ref}
          placeholder="Ваше сообщение..."
        />
        <button className="send-message__btn">Отправить</button>
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