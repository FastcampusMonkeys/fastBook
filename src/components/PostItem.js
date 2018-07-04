import React from 'react';

export default class PostItem extends React.Component {
  detailContent = e => {
    this.props.detailValue(this.props.body);
  };
  handleChangeView = e => {
    this.props.test(this.props.id, this.props.body);
  };
  render() {
    const { id, privateMode, deletePosts, body, submitTime, privatePosts } = this.props;
    return (
      <div onClick={this.detailContent}>
        <li key={id}>
          <p onClick={this.handleChangeView}>
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
              삭제
            </button>
            <button
              onClick={e => {
                privatePosts(id);
              }}
            >
              잠금
            </button>
          </p>
          {submitTime}
        </li>
      </div>
    );
  }
}
