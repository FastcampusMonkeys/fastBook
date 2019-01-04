import React from 'react';

export default class PostItem extends React.Component {
  handleChangeView = e => {
    this.props.idComunity(
      this.props.id,
      this.props.body,
      this.props.privateMode
    );
  };

  toggle() {
    this.setState({ select: !this.state.addClass });
  }
  render() {
    const { id, privateMode, body, submitTime } = this.props;
    return (
      <li key={id} onClick={this.handleChangeView}>
        <a href="#none" className="memo-side__link">
          {privateMode ? (
            <strong className="memo-side__title">잠겨있음</strong>
          ) : (
            <strong className="memo-side__title">{body}</strong>
          )}
          <span className="memo-side__date">{submitTime}</span>
        </a>
      </li>
    );
  }
}
