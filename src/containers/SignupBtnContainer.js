import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/AuthContext';

export default class SignupBtnContainer extends Component {
  state = {
    success: false,
  };
  render() {
    if (this.state.success) {
      return <Redirect to="signup" />;
    } else {
      return (
        <AuthConsumer>
          {({ usersingup }) => (
            <button className="button-g from-contents__signup-button"
              onClick={e => {
                this.setState({ success: true });
              }}
            >
              Sign up
            </button>
          )}
        </AuthConsumer>
      );
    }
  }
}
