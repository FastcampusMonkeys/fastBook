import React from 'react';

export default class PostItem extends React.Component {
  render() {
    const { id, privateMode, deletePosts, body, submitTime, privatePosts } = this.props;
    return (
      <li key={id}>
        {
          privateMode ?
            (
              <p>
                <strong>잠겨있음</strong>
              </p>
            ) : (
              <p>
                <strong>{body}</strong>
              </p>
            )
        }

        <button
          onClick={e => {
            deletePosts(id);
          }}
        >
          delete
        </button>
        <button
          onClick={e => {
            privatePosts(id);
          }}
        >
          잠금
        </button>
        {submitTime}
      </li >
    );
  }
}
