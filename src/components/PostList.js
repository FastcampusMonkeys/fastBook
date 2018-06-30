import React from 'react';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  render() {
    const { posts, deletePosts, body } = this.props;
    return (
      <ul>
        {posts.map(post => (
          <PostItem key={post.id} body={post.body}{...post} deletePosts={deletePosts} />
        ))}
      </ul>
    );
  }
}
