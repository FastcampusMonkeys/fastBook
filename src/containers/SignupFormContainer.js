import React from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from '../components/SignupForm';
import { AuthConsumer } from '../contexts/AuthContext';

export default class SignUPFormContainer extends React.Component {
  state = {
    success: false,
    username: '',
    password: '',
  };

  updateUsername = username => this.setState({ username });
  updatePassword = password => this.setState({ password });
  render() {
    const { success, username, password } = this.state;
    if (success) return <Redirect to="/login" />;
    return (
      <AuthConsumer>
        {({ usersingup }) => (
          <SignupForm
            username={username}
            password={password}
            onUsernameChange={this.updateUsername}
            onPasswordChange={this.updatePassword}
            onSubmit={async () => {
              try {
                await usersingup(username, password);
                this.setState({ success: true });
              } catch (e) {
                if (e.response && e.response.status === 400) {
                  alert('회원가입을 다시 해주세요');
                  this.setState({
                    username: '',
                    password: '',
                  });
                } else {
                  alert(
                    '네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.'
                  );
                }
              }
            }}
          />
        )}
      </AuthConsumer>
    );
  }
}
