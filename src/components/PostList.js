import React from 'react';
import PostItem from './PostItem';


export default class PostList extends React.Component {
  render() {
    const { posts, deletePosts } = this.props;
    return (
      <ul>
        {posts.map(post => (
          <PostItem key={post.id} {...post} deletePosts={deletePosts} />
        ))}
      </ul>
    );
  }
}
