import React from 'react';

export default class PostItem extends React.Component {
  detailContent = e => {
    this.props.detailValue(this.props.body);
  };
  render() {
    const { id, deletePosts, body, submitTime } = this.props;
    return (
      <div onClick={this.detailContent}>
        <li key={id}>
          <p>
            {body}
            <button
              onClick={e => {
                deletePosts(id);
              }}
            >
              삭제
            </button>
          </p>
          {submitTime}
        </li>
      </div>
    );
  }
}
