import React from 'react';

import SignupFormContainer from '../containers/SignupFormContainer';
import { Helmet } from "react-helmet";
export default function SignupPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>FASTBOOK : Signup</title>
      </Helmet>
      <SignupFormContainer />
    </React.Fragment>
  );
}
