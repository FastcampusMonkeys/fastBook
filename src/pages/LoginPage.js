import React from 'react';
import withAuth2 from '../hocs/withAuth2';
import LoginFormContainer from '../containers/LoginFormContainer';
import { Helmet } from 'react-helmet';
function LoginPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>FASTBOOK : Login</title>
      </Helmet>
      <LoginFormContainer />
    </React.Fragment>
  );
}
export default withAuth2(LoginPage);
