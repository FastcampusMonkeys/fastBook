import React from 'react';

export default class PostItem extends React.Component {
  detailContent = e => {
    this.props.detailValue(this.props.body);
  };
  handleChangeView = e => {
    this.props.idComunity(this.props.id, this.props.body);
  };
  render() {
    const { id, privateMode, body, submitTime } = this.props;
    return (
      <div onClick={this.detailContent}>
        <li key={id}>
          <p class="memo-side__title" onClick={this.handleChangeView}>
            {privateMode ? <strong>잠겨있음</strong> : <strong>{body}</strong>}
          </p>
          <span class="memo-side__date">{submitTime}</span>
        </li>
      </div>
    );
  }
}
