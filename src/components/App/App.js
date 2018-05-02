import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Layout} />
        {/*<Route exact path="/chats" component={ChatView} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/chat/:id" component={DialogPageContainer} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/init/create/:name" component={Init} />
        <Route exact path="/init/join/:roomId" component={Init} />
        <Route exact path="/profile" component={ProfileView} />
        <Route exact path="/create_chat" component={CreateChatPage} />*/}
      </Switch>
    );
  }
}