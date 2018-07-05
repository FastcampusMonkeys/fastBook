import React from 'react';

import PostPageContainer from '../containers/PostPageContainer';
import withAuth from '../hocs/withAuth';
import PostPageProvider from '../contexts/PostPageContext';

function PostPage() {
  return (
    <PostPageProvider >
      <PostPageContainer />
    </PostPageProvider>
  );

}
export default withAuth(PostPage);
