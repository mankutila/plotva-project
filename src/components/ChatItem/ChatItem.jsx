import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';

import './ChatItem.css';
import { GroupMembers } from '../GroupMembers/GroupMembers';
import { Avatar } from '../Avatar/Avatar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChatName, formatTime } from '../../helpers/chatHelpers';

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
    getChatName(this.props.users, this.props.name, this.props.user)
      .then(chatName => {
        this.setState({chatName});
      })
  }

  render() {
    const { users } = this.props;
    const { message, time, chatName } = this.state;

    const group = users.length > 2;
    const formattedTime = time ? formatTime(time) : '';

    return (
      <section className={`chat ${group ? 'chat--group' : ''}`}>

        {group && (
          <React.Fragment>
            <div className="chat__name">{chatName}</div>
            <div className="chat__left">
              <Avatar size="sm" chatName={chatName} />
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
              <Avatar size="sm" chatName={chatName} />
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

ChatItemComp.propTypes = {
  _id: PropTypes.string,
  users: PropTypes.array,
  name: PropTypes.string,
  user: PropTypes.object
}
