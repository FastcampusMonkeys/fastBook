import React from 'react';
// import { Redirect } from 'react-router-dom';
import SignupCancelBtn from '../containers/SignupCancelBtnContainer';

export default class SignupForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  componentDidMount() {
    const elBody = document.body;
    elBody.classList.add('login')
  }

  componentWillUnmount() {
    const elBody = document.body;
    elBody.classList.remove('login')
  }
  render() {
    const {
      username,
      password,
      onUsernameChange,
      onPasswordChange,
    } = this.props;

    return (
      <section id="wrap" className="signup-section">
        <header className="header">
          <div className="blind">
            <h1>
              <span>FASTBOOK</span>
            </h1>
            <strong>
              SAVE YOUR NOTES QUICKLY
            </strong>
          </div>
          <strong className="title-header"><i className="fas fa-id-card-alt"></i>Sign up</strong>
        </header>
        <section id="container" className="container" role="main">
          <div className="form-contents">
            <form className="from-contents__form" onSubmit={this.handleSubmit}>
              <fieldset className="form-contents__fieldset">
                <legend className="blind">회원가입 입력폼</legend>
                <label htmlFor="singupIdInput" className="label">ID</label>
                <input
                  id="singupIdInput" className="form-contents__fieldset-input"
                  type="text"
                  value={username}
                  onChange={e => onUsernameChange(e.target.value)}
                />
                <label htmlFor="singupPwInput" className="label">PASSWORD</label>
                <input
                  id="singupPwInput" className="form-contents__fieldset-input"
                  type="password"
                  value={password}
                  onChange={e => onPasswordChange(e.target.value)}
                />
                {/* <label htmlFor="singupRePwInput">CONFIRM PASSWORD</label>
                <input type="password" id="singupRePwInput" className="form-contents__fieldset-input"

                /> */}
                <button className="button-g button-signup">Sign up for FASTBOOK</button>
                <SignupCancelBtn />
              </fieldset>
            </form>
          </div>
        </section>
      </section>
    );
  }
}
