import React from 'react';
import LogoutBtnContainer from '../containers/LogoutBtnContainer';
import { PostPageConsumer } from '../contexts/PostPageContext';

export default class PostPageContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>postPage</h1>
        <LogoutBtnContainer />
        <PostPageConsumer>
          {({ posts }) => (
            <ul>
              {posts.map(post => (
                <li>
                  제목 : {post.title}
                  내용 : {post.body}
                </li>
              ))}
            </ul>
          )}
        </PostPageConsumer>
      </div>
    );
  }
}
