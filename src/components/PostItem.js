import React from 'react';

export default class PostItem extends React.Component {
  render() {
    const { id, deletePosts } = this.props;
    return (
      <li key={id}>
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
