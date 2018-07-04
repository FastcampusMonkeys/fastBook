import React from 'react';

export default class PostItem extends React.Component {
  handleChangeView = e => {
    this.props.idComunity(
      this.props.id,
      this.props.body,
      this.props.privateMode
    );
  };
  render() {
    const { id, privateMode, body, submitTime } = this.props;
    return (
      <div onClick={this.handleChangeView}>
        <li key={id}>
          <p>
            {privateMode ? <strong>잠겨있음</strong> : <strong>{body}</strong>}
          </p>
          {submitTime}
        </li>
      </div>
    );
  }
}
