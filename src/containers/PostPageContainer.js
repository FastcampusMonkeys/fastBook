import React from 'react';
import PostList from '../components/PostList';
import { PostPageConsumer } from '../contexts/PostPageContext';
import PostForm from '../components/PostForm';

export default class PostPageContainer extends React.Component {
  render() {
    return (
      <PostPageConsumer>
        {({ posts, loading, createPosts, deletePosts, body }) => (
          <div>
            <PostForm onCreate={createPosts} />
            {loading ? (
              <div>Loading..</div>
            ) : (
                <PostList posts={posts} body={body} deletePosts={deletePosts} />
              )}
          </div>
        )}
      </PostPageConsumer>
    );
  }
}
