import React from 'react';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  state = {
    textAreaValue: '여기에 내용이 뜹니다.',
  };
  detailValue = answerValue => {
    this.setState({
      textAreaValue: answerValue,
    });
  };
  render() {
    const { posts, deletePosts } = this.props;
    return (
      <div>
        <ul>
          {posts
            .map(post => (
              <PostItem
                key={post.id}
                {...post}
                deletePosts={deletePosts}
                detailValue={this.detailValue}
              />
            ))
            .reverse()}
        </ul>
        <div>
          <textarea
            name="detailContent"
            cols="30"
            rows="10"
            value={this.state.textAreaValue}
          />
        </div>
      </div>
    );
  }
}
