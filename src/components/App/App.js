import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from '../Layout/Layout';
import { ChatsPage } from '../ChatsPage/ChatsPage';
import { ContactsPage } from '../ContactsPage/ContactsPage';
import { ProfilePage } from '../ProfilePage/ProfilePage';
import { Chat } from '../Chat/Chat';
import { Login } from '../Login/Login';
import api from '../../api';

const ChatsView = () => {
  return <Layout body={<ChatsPage />} />
}

const ContactsView = () => {
  return <Layout body={<ContactsPage />} />
}

const ChatView = () => {
  return <Layout body={<Chat />} />
}

const SettingsView = () => {
  return <Layout body={<ProfilePage />} />
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
            {/*<Route exact path="/search" component={SearchPage} />
            <Route exact path="/init/create/:name" component={Init} />
            <Route exact path="/init/join/:roomId" component={Init} />
            <Route exact path="/create_chat" component={CreateChatPage} />*/}
          </Switch>)
        : <p/>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export const App = withRouter(connect(mapStateToProps)(AppComponent));