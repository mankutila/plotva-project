import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../api';
import './Chat.css';
import { Message } from '../Message/Message';
import { ChatInput } from '../ChatInput/ChatInput';
import {connect} from 'react-redux';

export class ChatComponent extends Component {
  state = {
    room: null,
    error: null
  }

  componentDidMount() {
    this.getMsg();
    this.getRoom();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      if (this.refs.wrap) document.documentElement.scrollTop = this.refs.wrap.scrollHeight;
    }
  }

  async componentWillUnmount() {
    await api.currentUserLeaveRoom(this.state.room._id);
    this.props.dispatch({type: 'RESET_MESSAGES'});
  }

  async getMsg(first = true, param) {
    if (param === null) {
      return;
    }
    if (first) {
      const resp = await api.getRoomMessages(this.props.match.id);

      this.props.dispatch({
        type: 'SET_MESSAGES',
        messages: [...this.props.messages, ...resp.items]
      })
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

    this.props.dispatch({
      type: 'SET_MESSAGES',
      messages: [...this.props.messages, ...resp.items]
    })
    await this.getMoreMessages(resp.next);
  }

  async getRoom() {
    const resp = await api.getRoom(this.props.match.id);
    this.setState({room: resp});
    api.currentUserJoinRoom(this.state.room._id);
  }


  render() {
    const { messages } = this.props;

    return (
      <div ref='wrap' className="messages-list">
        {messages.map((message, index) => <Message key={index} {...message} />)}
        <ChatInput room={this.state.room} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages.roomMessages
  }
}

export const Chat = withRouter(connect(mapStateToProps)(ChatComponent));