import React from 'react';
// import { Redirect } from 'react-router-dom';
import LoginBtn from '../containers/LoginBtnContainer';

export default class SignupForm extends React.Component {
  static defaultProps = {
    username: '', // 아이디 입력 필드에 표시될 값
    password: '', // 암호 입력 필드에 표시될 값
    onUsernameChange: username => { }, // 아이디 입력 필드에 입력이 일어날 때 호출되는 함수
    onPasswordChange: password => { }, // 암호 입력 필드에 입력이 일어날 때 호출되는 함수
    onSubmit: () => { }, // 폼 전송이 일어날 때 호출되는 함수
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const elBody = document.querySelector('body')
    elBody.classList.add('login')
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
                <label htmlFor="singupRePwInput">CONFIRM PASSWORD</label>
                <input type="password" id="singupRePwInput" className="form-contents__fieldset-input" />
                <button className="button-g button-signup">Sign up for FASTBOOK</button>
                <LoginBtn />
              </fieldset>
            </form>
          </div>
        </section>
      </section>
    );
  }
}
