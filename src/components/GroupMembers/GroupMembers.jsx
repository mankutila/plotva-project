import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar'
import api from '../../api';

import './GroupMembers.css';
import PropTypes from 'prop-types'

export class GroupMembers extends Component {
  componentDidMount() {
    const users = this.props.members.map(async (id) => { return await api.getUser(id); });
    Promise.all(users).then((completed) => {
      this.setState({
        users: completed
      })
    });
  }

  state = {
    users: []
  }

  render() {
    let plus = false;
    let count = 0;
    if (this.state.users > 6) {
      plus = true;
      count = this.state.users - 6;
    }
    return (
      <div className="group-members">
        { this.state.users.slice(0, 6).map((user, index) => {
            return <Avatar key={index} size="md" user={user} />
          })
        }
        { plus && (
            <div className="avatar avatar--md">
              <div className="avatar__img">{count}+</div>
            </div>
          )
        }
      </div>
    )
  }
}

GroupMembers.propTypes = {
  members: PropTypes.array
}
