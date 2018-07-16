import React from 'react';

import PostPageContainer from '../containers/PostPageContainer';
import withAuth from '../hocs/withAuth';
import PostPageProvider from '../contexts/PostPageContext';
import { Helmet } from 'react-helmet';

function PostPage() {
  return (
    <PostPageProvider>
      <Helmet>
        <title>FASTBOOK : Memo</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <PostPageContainer />
    </PostPageProvider>
  );
}
export default withAuth(PostPage);
