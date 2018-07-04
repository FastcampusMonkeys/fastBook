import React from 'react';

export default class PostItem extends React.Component {
  detailContent = e => {
    this.props.detailValue(this.props.body);
  };
  handleChangeView = e => {
    this.props.test(this.props.id, this.props.body);
  };
  render() {
    const { id, deletePosts, body, submitTime } = this.props;
    return (
      <div onClick={this.detailContent}>
        <li key={id}>
          <p onClick={this.handleChangeView}>
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
