import React from 'react';
import PostList from '../components/PostList';
import { PostPageConsumer } from '../contexts/PostPageContext';
import PostForm from '../components/PostForm';
import SearchForm from '../components/SearchForm';
import HeaderForm from '../components/HeaderForm';
export default class PostPageContainer extends React.Component {
  state = {
    searchStr: '',
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
        }) => (
            <div>
              <SearchForm onSubmit={this.updateSearchStr} />
              {loading ? (
                <div>Loading..</div>
              ) : (
                  <div>
                    <PostList
                      posts={posts.filter(p =>
                        p.body.includes(this.state.searchStr)
                      )}
                      deletePosts={deletePosts}
                      updatePosts={updatePosts}
                      privatePosts={privatePosts}
                      {...posts}
                    />
                  </div>
                )}
              <PostForm onCreate={createPosts} />
              <HeaderForm />
            </div>
          )}
      </PostPageConsumer>
    );
  }
}
