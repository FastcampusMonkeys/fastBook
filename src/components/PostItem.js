import React from 'react';

export default class PostItem extends React.Component {
  render() {
    const { id, deletePosts, body, submitTime } = this.props;
    return (
      <li key={id}>
        <p>
          <b>{body}</b>
          <button
            onClick={e => {
              deletePosts(id);
            }}
          >
            delete
          </button>
        </p>
        {submitTime}
      </li>
    );
  }
}
