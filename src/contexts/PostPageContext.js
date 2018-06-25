import React from 'react';

import postAPI from '../postAPI';

const { Provider, Consumer } = React.createContext();

export default class PostPageProvider extends React.Component {
  state = { posts: [] };
  async componentDidMount() {
    const res = await postAPI.get('/posts');
    this.setState({ posts: res.data });
  }
  render() {
    const value = { posts: this.state.posts };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PostPageProvider, Consumer as PostPageConsumer };
