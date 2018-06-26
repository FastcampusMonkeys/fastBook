import React from 'react';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  render() {
    const { posts, deletePosts } = this.props;
    return (
      <ul>
        {posts.map(posts => (
          <PostItem key={posts.id} {...posts} deletePosts={deletePosts} />
        ))}
      </ul>
    );
  }
}
