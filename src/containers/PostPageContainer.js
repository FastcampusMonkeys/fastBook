import React from 'react';
import PostList from '../components/PostList';
import { PostPageConsumer } from '../contexts/PostPageContext';

export default class PostPageContainer extends React.Component {
  state = {
    id: '',
    searchStr: '',
    keyword: ''
  };
  updateSearchStr = searchStr => {
    this.setState({
      searchStr,
    });
  };


  render() {
    return (
      <PostPageConsumer>
        {({
          posts,
          loading,
          createPosts,
          deletePosts,
          updatePosts,
          privatePosts,
          unPrivatePosts,
        }) => (
            loading ? (
              <React.Fragment>
                <div className="dimmed_layer">
                  <strong>Loading :)</strong>
                </div>
                <PostList
                  createPosts={createPosts}
                  posts={posts}
                  {...posts}
                />
              </React.Fragment>
            ) : (
                <PostList
                  posts={posts.filter(p =>
                    p.body.includes(this.state.searchStr)
                  )}
                  createPosts={createPosts}
                  deletePosts={deletePosts}
                  updatePosts={updatePosts}
                  privatePosts={privatePosts}
                  unPrivatePosts={unPrivatePosts}
                  {...posts}
                  updateSearchStr={this.updateSearchStr}
                />
              )

          )}
      </PostPageConsumer>
    );
  }
}
