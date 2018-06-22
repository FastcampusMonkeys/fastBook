import React from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { AuthConsumer } from '../contexts/AuthContext';

export default class LoginFormContainer extends React.Component {
  state = {
    success: false,
    username: '',
    password: '',
  };

  updateUsername = username => this.setState({ username });
  updatePassword = password => this.setState({ password });
  render() {
    const { success, username, password } = this.state;
    if (success) return <Redirect to="/posts" />;
    return (
      <AuthConsumer>
        {({ login }) => (
          <LoginForm
            username={username}
            password={password}
            onUsernameChange={this.updateUsername}
            onPasswordChange={this.updatePassword}
            onSubmit={async () => {
              try {
                await login(username, password);
                this.setState({ success: true });
              } catch (e) {
                if (e.response && e.response.status === 400) {
                  alert('사용자 이름 혹은 비밀번호가 잘못되었습니다.');
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
