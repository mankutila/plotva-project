import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Contact } from '../Contact/Contact';

import api from '../../api';

class CreateChatComp extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'SET_SELECTED_USER',
      selectedUsers: []
    });
  }

  async fetch(param) {
    if (param === null) {
      return;
    }

    try {
      const resp = await api.getUsers(param);
      const next = resp.next;
      this.setState((prevState) => {
        return {
          users: prevState.users.concat(resp.items)
        }
      });
      await this.fetch(next);
    } catch (err) {
      console.error(err);
      this.setState({ error: 'Ошибка при загрузке контактов' });
    }
  }

  render() {
    const filteredUsers = this.state.users.filter((user) => user._id !== this.props.user._id);
    return (<React.Fragment>
        <p>Выберите не менее двух контактов</p>
        {filteredUsers.map((user, index) => <Contact user={user} key={index} index={index} />)}
      </React.Fragment>)

  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export const CreateChat = withRouter(connect(mapStateToProps)(CreateChatComp));