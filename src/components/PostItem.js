import React from 'react';

export default class PostItem extends React.Component {
  render() {
    const { id, deletePosts, body, submitTime } = this.props;
    return (
      <div>
        <li key={id}>
          <p>{body}</p>
          <button
            onClick={e => {
              deletePosts(id);
            }}
          >
            삭제
        </button>
          {submitTime}
        </li>
      </div>

    );
  }
}
