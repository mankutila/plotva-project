import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Message } from '../Message/Message';
import { ChatInput } from '../ChatInput/ChatInput';
import { getChatName } from '../../helpers/chatHelpers';

import api from '../../api';
import './Chat.css';

export class ChatComponent extends Component {
  componentDidMount() {
    this.getMsg();
    this.enterRoom();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      if (this.refs.wrap) document.documentElement.scrollTop = this.refs.wrap.scrollHeight;
    }
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'RESET_MESSAGES'});
    this.props.dispatch({type: 'SET_VIEW_TITLE', viewTitle: ''});
  }

  state = {
    room: null,
    error: null
  }

  async getMsg(first = true, param) {
    if (param === null) {
      return;
    }
    if (first) {
      try {
        const resp = await api.getRoomMessages(this.props.match.params.id);
        this.props.dispatch({
          type: 'SET_MESSAGES',
          messages: [...this.props.messages, ...resp.items]
        })
        await this.getMsg(false, resp.next);
      } catch (err) {
        console.log(err)
      }

    } else {
      try {
        await this.getMoreMessages(param);
      } catch (err) {
        console.log(err);
      }

    }
  }

  async getMoreMessages(next) {
    if (next === null) {
      return;
    }
    try {
      const resp = await api.getMessages(next);

      this.props.dispatch({
        type: 'SET_MESSAGES',
        messages: [...this.props.messages, ...resp.items]
      })
      await this.getMoreMessages(resp.next);
    } catch (err) {
      console.log(err)
    }

  }

  async enterRoom() {
    try {
      const resp = await api.getRoom(this.props.match.params.id);
      this.setState({room: resp});
      api.currentUserJoinRoom(this.state.room._id);
      getChatName(resp.users, resp.name, this.props.user)
        .then(chatName => {
          this.props.dispatch({
            type: 'SET_VIEW_TITLE',
            viewTitle: chatName
          })
        })
        .catch(err => {
          console.log(err);
        })
    } catch(err) {
      console.log(err)
    }
    console.log('I joined room')
  }


  render() {
    const { messages } = this.props;

    return (
      <div ref='wrap' className="messages-list">
        {messages.length === 0
          ?
          <p>Напишите что-нибудь</p>
          : messages.map((message, index) => <Message key={index} {...message} />)
        }
        <ChatInput room={this.state.room} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    messages: state.messages.roomMessages,
    viewTitle: state.app.viewTitle
  }
}

export const Chat = withRouter(connect(mapStateToProps)(ChatComponent));

ChatComponent.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func
}
