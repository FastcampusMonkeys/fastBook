import React from 'react';

import postAPI from '../postAPI';

const { Provider, Consumer } = React.createContext({
  login: (username, password) => {}, // 로그인 함수
  usersingup: (username, password) => {},
});

class AuthProvider extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.fetchMe();
    }
  }

  state = {
    loading: 0,
    id: null,
    username: null,
  };

  async fetchMe() {
    this.setState(prevState => ({
      loading: prevState.loading + 1,
    }));
    try {
      const res = await postAPI.get('/users');
      this.setState({
        id: res.data.id,
        username: res.data.username,
      });
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1,
      }));
    }
  }

  login = async (username, password) => {
    this.setState(prevState => ({
      loading: prevState.loading + 1,
    }));
    try {
      const res = await postAPI.post('/users/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      await this.fetchMe();
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1,
      }));
    }
  };

  usersingup = async (username, password) => {
    this.setState(prevState => ({
      loading: prevState.loading + 1,
    }));
    try {
      const res = await postAPI.post('/users', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      await this.fetchMe();
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1,
      }));
    }
  };

  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      id: null,
      username: null,
    });
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout,
      id: this.state.id,
      username: this.state.username,
      usersingup: this.usersingup,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { AuthProvider, Consumer as AuthConsumer };
