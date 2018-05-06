import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../api';
import './Chat.css';
import { Message } from '../Message/Message'

export class ChatComponent extends Component {
  state = {
    messages: [],
    error: null
  }

  componentDidMount() {
    this.getMsg();
  }

  async getMsg(first = true, param) {
    if (param === null) {
      return;
    }
    if (first) {
      const resp = await api.getRoomMessages(this.props.match.id);
      this.setState(prevState => ({
        messages: [...prevState.messages, ...resp.items]
      }));
      await this.getMsg(false, resp.next);
    } else {
      await this.getMoreMessages(param);
    }
  }

  async getMoreMessages(next) {
    if (next === null) {
      return;
    }
    const resp = await api.getMessages(next);
    this.setState(prevState => ({
      messages: [...prevState.messages, ...resp.items]
    }));
    await this.getMoreMessages(resp.next);
  }


  render() {
    const { messages } = this.state;

    return messages.map((message, index) => <Message key={index} {...message} />);
  }
}


export const Chat = withRouter(ChatComponent);