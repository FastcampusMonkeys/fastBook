import React from 'react';

import PostPageContainer from '../containers/PostPageContainer';
import { PostPageProvider } from '../contexts/PostPageContext';

export default () => {
  return (
    <PostPageProvider>
      <PostPageContainer />
    </PostPageProvider>
  );
};
