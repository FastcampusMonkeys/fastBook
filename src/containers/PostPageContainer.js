import React from 'react';
import LogoutBtnContainer from '../containers/LogoutBtnContainer';
import { PostPageConsumer } from '../contexts/PostPageContext';
import PostForm from '../components/PostForm';

export default class PostPageContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>메모장</h1>
        <LogoutBtnContainer />
        <PostForm />
        <PostPageConsumer>
          {({ posts }) => <ul>{posts.map(post => <li>{post.body}</li>)}</ul>}
        </PostPageConsumer>
      </div>
    );
  }
}
