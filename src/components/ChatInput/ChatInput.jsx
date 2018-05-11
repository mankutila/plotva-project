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
    try {
      const mess = await api.sendMessage(this.props.room._id, this.message.value);
      this.props.dispatch({
        type: 'APPEND_MESSAGES',
        messages: [...this.props.messages, mess]
      });
      this.message.value = '';
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <form
        className="send-message"
        onSubmit={(e) => {
          e.preventDefault();
          this.sendMessage()
        }}
        ref="form"
      >
        <TextareaAutosize
          maxRows={4}
          className="send-message__txt"
          innerRef={ref => {this.message = ref}}
          placeholder="Ваше сообщение..."
          autoFocus
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