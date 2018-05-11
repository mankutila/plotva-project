import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from '../Layout/Layout';
import { ChatsPage } from '../ChatsPage/ChatsPage';
import { ContactsPage } from '../ContactsPage/ContactsPage';
import { ProfilePage } from '../ProfilePage/ProfilePage';
import { Chat } from '../Chat/Chat';
import { Login } from '../Login/Login';
import { CreateChat } from '../CreateChat/CreateChat';
import api from '../../api';

const ChatsView = () => {
  return <Layout body={<ChatsPage />} header="chats" />
}

const ContactsView = () => {
  return <Layout body={<ContactsPage />} header="contacts" />
}

const ChatView = () => {
  return <Layout body={<Chat />} header="chat" />
}

const SettingsView = () => {
  return <Layout body={<ProfilePage />} header="profile" />
}

const CreateChatView = () => {
  return <Layout body={<CreateChat />} header="create-chat" />
}

export class AppComponent extends Component {
  componentDidMount() {
    api.getCurrentUser()
      .then((user) => {
        this.props.dispatch({
          type: 'SET_USER',
          user
        })
      })
      .catch((err) => {console.log(err)});
  }

  render() {
    return (
      this.props.user
        ? (<Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/chats" component={ChatsView} />
            <Route exact path="/contacts" component={ContactsView} />
            <Route exact path="/chat/:id" component={ChatView} />
            <Route exact path="/settings" component={SettingsView} />
            <Route exact path="/create-chat" component={CreateChatView} />
          </Switch>)
        : <p/>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    messages: state.messages.roomMessages
  }
}

export const App = withRouter(connect(mapStateToProps)(AppComponent));