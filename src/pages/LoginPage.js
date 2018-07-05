import React from 'react';
import withAuth2 from '../hocs/withAuth2';
import LoginFormContainer from '../containers/LoginFormContainer';

function LoginPage() {
  return (
    <React.Fragment>
      <LoginFormContainer />
    </React.Fragment>
  );
}
export default withAuth2(LoginPage);
