import React from 'react';

import PostPageContainer from '../containers/PostPageContainer';
import LogoutBtnContainer from '../containers/LogoutBtnContainer';
import withAuth from '../hocs/withAuth';
import PostPageProvider from '../contexts/PostPageContext';
function PostPage() {
  return (
    <React.Fragment>
      <PostPageProvider>
        <PostPageContainer />
      </PostPageProvider>
      <LogoutBtnContainer />
    </React.Fragment>
  );
}
export default withAuth(PostPage);
