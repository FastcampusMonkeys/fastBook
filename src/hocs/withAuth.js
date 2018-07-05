import React from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return localStorage.getItem('token') ? (
        <WrappedComponent {...this.props} />
      ) : (
          <Redirect to="/login" />
        );
    }
  };
}
