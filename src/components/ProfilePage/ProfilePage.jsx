import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProfileEdit } from '../ProfileEdit/ProfileEdit'
import './ProfilePage.css';

class ProfilePageComponent extends Component {
  componentDidMount() {
    if (this.props.user.isFirstLogin && !this.state.edit) {
      this.setState({ edit: true })
    }
  }

  state = {
    edit: false,
  };

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        {this.props.user.isFirstLogin ? (
          <h3>Привет! Напиши немного о себе:</h3>
        ) : (
          <div className="profile-info">
            {user.img &&
              <div className="profile-info__img"><img src={user.img} alt={user.name} /></div>
            }
            <div className="profile-info__txt">
              <div className="profile-info__name">{user.name}</div>
              <div className="profile-info__email">{user.email}</div>
              <div className="profile-info__phone">{user.phone}</div>
            </div>
            <button className="profile-info__edit" onClick={this.toggleEdit}>Редактировать</button>
          </div>
        )}

        {this.state.edit && <ProfileEdit toggleEdit={this.toggleEdit} />}
      </React.Fragment>
    );
  }
}

const stateToProps = state => ({
  user: state.user.user,
});

export const ProfilePage = connect(stateToProps)(ProfilePageComponent);

ProfilePageComponent.propTypes = {
  user: PropTypes.object
}
