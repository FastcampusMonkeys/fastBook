import React from 'react';


export default class LoginForm extends React.Component {
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
    const {
      username,
      password,
      onUsernameChange,
      onPasswordChange,
    } = this.props;

    return (
      <section id="container" className="container" role="main">
        <div className="form-contents">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-contents__fieldset">
              <legend className="blind">로그인 입력폼</legend>
              <div className="field">
                <label >사용자 이름</label>
                <div className="control">
                  <input
                    className="form-contents__fieldset-input"
                    type="text"
                    id="idInput"
                    value={username}
                    onChange={e => onUsernameChange(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">비밀번호</label>
                <div className="control">
                  <input
                    className="form-contents__fieldset-input"
                    type="password"
                    id="pwInput"
                    value={password}
                    onChange={e => onPasswordChange(e.target.value)}
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button-g from-contents__login-button">전송</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}
