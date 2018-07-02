import React from 'react';

import PostPageContainer from '../containers/PostPageContainer';
import LogoutBtnContainer from '../containers/LogoutBtnContainer';
import withAuth from '../hocs/withAuth';
import PostPageProvider from '../contexts/PostPageContext';

function PostPage() {
  return (
    <PostPageProvider >
      <h1>fastBook</h1>
      <LogoutBtnContainer />
      <PostPageContainer />
    </PostPageProvider>
  );

}
export default withAuth(PostPage);
