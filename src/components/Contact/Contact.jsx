import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Avatar } from '../Avatar/Avatar';

import api from '../../api';
import './Contact.css';

class ContactComp extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      error: null
    };
  }

  toggleCheck = () => {
    this.setState((prevState) => {
      return {
        checked: !prevState.checked
      }
    });
    if (this.state.checked) {
      this.unselectUser();
    } else {
      this.selectUser();
    }
  }

  selectUser = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_USER',
      selectedUsers: this.props.selectedUsers.concat(this.props.user._id)
    });
    this.setState({
      checked: true,
      index: this.props.selectedUsers.length - 1
    })
  }

  unselectUser = () => {
    let selectedUsers = this.props.selectedUsers;
    let user = selectedUsers.find(user => user === this.props.user._id);
    let deleteIndex = selectedUsers.indexOf(user);
    selectedUsers.splice(deleteIndex, 1);

    this.props.dispatch({
      type: 'SET_SELECTED_USER',
      selectedUsers: selectedUsers
    });
    this.setState({
      checked: false,
      index: null
    })
  }

  render() {
    const {user} = this.props;
    return (
        <section className={`contact ${this.state.checked ? "contact--checked" : ''}`} onClick={this.toggleCheck}>
          <Avatar size="sm" user={user} />
          {user.name ? user.name : 'Аноним'}
        </section>
      )

  }
}

const mapStateToProps = state => {
  return {
    selectedUsers: state.user.selectedUsers
  }
}

export const Contact = withRouter(connect(mapStateToProps)(ContactComp));