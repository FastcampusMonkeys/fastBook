import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import SignupPage from './pages/SignupPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/posts" component={PostPage} />
            <Route path="/signup" component={SignupPage} />
            <Route
              exact
              path="/"
              render={() =>
                localStorage.getItem('token') ? (
                  <Redirect to="/posts" />
                ) : (
                    <Redirect to="/login" />
                  )
              }
            />}
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
