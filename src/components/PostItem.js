import React from 'react';

export default class PostItem extends React.Component {
  render() {
    const { id, post, deletePosts } = this.props;
    return (
      <li key={id}>
        {post.body}
        <button
          onClick={e => {
            deletePosts(id);
          }}
        >
          삭제
        </button>
      </li>
    );
  }
}
