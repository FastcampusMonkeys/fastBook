import React from 'react';

export default class PostItem extends React.Component {
  detailContent = e => {
    this.props.detailValue(this.props.body);
  };
  handleChangeView = e => {
    this.props.idComunity(this.props.id, this.props.body);
  };
  render() {
    const { id, privateMode, body, submitTime, privatePosts } = this.props;
    return (
      <div onClick={this.detailContent}>
        <li key={id}>
          <p onClick={this.handleChangeView}>
            {privateMode ? <strong>잠겨있음</strong> : <strong>{body}</strong>}
          </p>
          {submitTime}
        </li>
      </div>
    );
  }
}
