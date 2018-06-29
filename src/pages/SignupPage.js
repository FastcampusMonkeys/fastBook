import React from 'react';

import SignupFormContainer from '../containers/SignupFormContainer';

export default function SignupPage() {
  return (
    <React.Fragment>
      <SignupFormContainer />
      <a href="/login">로그인 페이지로 이동</a>
    </React.Fragment>
  );
}
