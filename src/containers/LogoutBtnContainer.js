import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/AuthContext';

export default class LogoutBtnContainer extends Component {
  state = {
    success: false,
  };
  render() {
    if (this.state.success) {
      return <Redirect to="login" />;
    } else {
      return (
        <AuthConsumer>
          {({ logout }) => (
            <button type="button"
              onClick={e => {
                logout();
                this.setState({ success: true });
              }}
            >
              <i className="fas fa-power-off" title="로그 아웃">
                <span className="blind">로그아웃</span>
              </i>
            </button>
          )}
        </AuthConsumer>
      );
    }
  }
}
