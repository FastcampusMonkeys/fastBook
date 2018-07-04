import React from 'react';

import postAPI from '../postAPI';

const { Provider, Consumer } = React.createContext();

export default class PostPageProvider extends React.Component {
  state = {
    posts: [],
    loading: false,
    id: this.props.id,
    body: '',
  };
  async componentDidMount() {
    await this.fetchPosts();
  }
  fetchPosts = async () => {
    this.setState({ loading: true });
    const res = await postAPI.get('/posts');
    this.setState({
      posts: res.data,
      loading: false,
    });
  };
  createPosts = async newPostBody => {
    let localDate = new Date().toLocaleDateString();
    let localTime = new Date().toLocaleTimeString();
    const newpost = {
      body: newPostBody,
      submitTime: localDate + ' ' + localTime,
    };
    this.setState({ loading: true });
    await postAPI.post('/posts', newpost);
    await this.fetchPosts();
  };

  deletePosts = async id => {
    // 할일 삭제 할때 사용
    this.setState({ loading: true });
    await postAPI.delete(`/posts/${id}`);
    await this.fetchPosts();
  };

  updatePosts = async (id, body) => {
    let localDate = new Date().toLocaleDateString();
    let localTime = new Date().toLocaleTimeString();
    const updatePost = {
      body,
      submitTime: localDate + ' ' + localTime,
    };
    await postAPI.patch(`/posts/${id}`, updatePost);
    await this.fetchPosts();
  };

  render() {
    const value = {
      posts: this.state.posts,
      loading: this.state.loading,
      fetchPosts: this.fetchPosts,
      createPosts: this.createPosts,
      deletePosts: this.deletePosts,
      searchPosts: this.searchPosts,
      updatePosts: this.updatePosts,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PostPageProvider, Consumer as PostPageConsumer };
