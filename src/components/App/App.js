import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from '../Layout/Layout';
import { ChatsPage } from '../ChatsPage/ChatsPage';
import { ContactsPage } from '../ContactsPage/ContactsPage';
import { Chat } from '../Chat/Chat';
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

export class AppComponent extends Component {
  async componentDidMount() {
    const user = await api.getCurrentUser();
    if (user) {
      this.props.dispatch({
        type: 'SET_USER',
        user: user
      })
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/chats" component={ChatsView} />
        <Route exact path="/contacts" component={ContactsView} />
        <Route exact path="/chat/:id" component={ChatView} />
        {/*<Route exact path="/search" component={SearchPage} />
        <Route exact path="/init/create/:name" component={Init} />
        <Route exact path="/init/join/:roomId" component={Init} />
        <Route exact path="/profile" component={ProfileView} />
        <Route exact path="/create_chat" component={CreateChatPage} />*/}
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export const App = connect(mapStateToProps)(AppComponent);