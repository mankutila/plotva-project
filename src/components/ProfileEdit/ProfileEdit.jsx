import React, { Component } from 'react';

import { InputGroup } from '../InputGroup/InputGroup';
import { Button } from '../Button/Button';

import { connect } from 'react-redux';

import './ProfileEdit.css';

import api from '../../api';

export class ProfileEditComponent extends Component {
  state = {
    ...this.props.user,
  };

  readFile(file) {
    return new Promise(function(resolve, reject) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        resolve(evt.target.result);
      };
      reader.onerror = function(err) {
        reject(err);
      };
      reader.readAsDataURL(file);
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const file = document.querySelector('input[type=file]').files[0];
    const user = { ...this.state, isFirstLogin: false };
    if (file) {
      user.img = await this.readFile(file);
    }

    api
      .saveUser(user)
      .then(() => {
        this.props.dispatch({
          type: 'SET_USER',
          user
        });
        this.props.toggleEdit();
      })
      .catch(e => {
        console.log(e);
      });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { user } = this.props;
    return (
      <form className="profile-edit" onSubmit={this.onSubmit}>
        <InputGroup
          type="text"
          name="name"
          onInputChange={this.onInputChange}
          value={user.name}
          label="Имя"
        />
        <InputGroup
          type="email"
          name="email"
          onInputChange={this.onInputChange}
          value={user.email}
          label="E-mail"
        />
        <InputGroup
          type="tel"
          name="phone"
          onInputChange={this.onInputChange}
          value={user.phone}
          label="Номер телефона"
        />
        <InputGroup type="file" name="avatar" label="Прикрепить фото" />

        <Button txt="Сохранить" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

export const ProfileEdit = connect(mapStateToProps)(ProfileEditComponent);
