import React from 'react';

import PostPageContainer from '../containers/PostPageContainer';
import LogoutBtnContainer from '../containers/LogoutBtnContainer';
import withAuth from '../hocs/withAuth';
function PostPage() {
  return (
    <React.Fragment>
      <PostPageContainer />
      <LogoutBtnContainer />
    </React.Fragment>
  );
}
export default withAuth(PostPage);