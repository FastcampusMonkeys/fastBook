import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import SignupBtnContainer from '../containers/SignupBtnContainer';

export default function LoginPage() {
  return (
    <React.Fragment>
      <LoginFormContainer />
      <SignupBtnContainer />
    </React.Fragment>
  );
}
