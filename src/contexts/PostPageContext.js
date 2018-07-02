import React from 'react';

import postAPI from '../postAPI';

const { Provider, Consumer } = React.createContext();

export default class PostPageProvider extends React.Component {
  state = { posts: [], loading: false, private: false };
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
    if (newPostBody) {
      let localeDate = new Date().toLocaleDateString();
      let localeTime = new Date().toLocaleTimeString();
      const newpost = {
        body: newPostBody,
        submitTime: localeDate + '  ' + localeTime,
      };
      this.setState({ loading: true });
      await postAPI.post('/posts', newpost);
      await this.fetchPosts();
    }
  };
  deletePosts = async id => {
    // 할일 삭제 할때 사용
    this.setState({ loading: true });
    await postAPI.delete(`/posts/${id}`);
    await this.fetchPosts();
  };

  privatePosts = async id => {
    // 글 잠금
    const newPostKey = {
      privateMode: true
    }
    this.setState({
      loading: true
    });
    await postAPI.patch(`/posts/${id}`, newPostKey);
    await this.fetchPosts();
  };

  render() {
    const value = {
      posts: this.state.posts,
      loading: this.state.loading,
      fetchPosts: this.fetchPosts,
      createPosts: this.createPosts,
      deletePosts: this.deletePosts,
      privatePosts: this.privatePosts
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PostPageProvider, Consumer as PostPageConsumer };
