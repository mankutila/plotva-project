import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar'
import api from '../../api';

import './GroupMembers.css';

export class GroupMembers extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const users = this.props.members.map(async (id) => { return await api.getUser(id); });
    Promise.all(users).then((completed) => {
      this.setState({
        users: completed
      })
    });
  }

  render() {
    return (
      <div className="group-members">
        {
          this.state.users.map((user, index) => {
            return <Avatar key={index} size="md" user={user} />
          })
        }
        <div className="avatar avatar--md">
          <div className="avatar__img">5+</div>
        </div>
      </div>
    )
  }
}
