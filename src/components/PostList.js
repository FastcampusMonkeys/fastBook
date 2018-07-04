import React from 'react';
import PostItem from './PostItem';
import debounce from 'lodash.debounce';

export default class PostList extends React.Component {
  state = {
    textAreaValue: '',
    id: '',
  };

  detailValue = answerValue => {
    this.setState({ textAreaValue: answerValue });
  };
  handleChangeView = e => {
    this.setState({
      textAreaValue: e.target.value,
    });
    // const { id, textAreaValue } = this.state;
    // const { updatePosts } = this.props;
    // const realDream = updatePosts(id, textAreaValue);
    const myDream = debounce(this.realDream, 2000);
    myDream();
  };

  realDream = () => {
    this.props.updatePosts(this.state.id, this.state.textAreaValue);
  };
  test = (id, body) => {
    this.setState({
      textAreaValue: body,
      id: id,
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
                updatePosts={this.updatePosts}
                test={this.test}
              />
            ))
            .reverse()}
        </ul>
        <div>
          <textarea
            key={posts.id}
            name="detailContent"
            cols="30"
            rows="10"
            placeholder="여기에 내용이 뜹니다."
            value={this.state.textAreaValue}
            onChange={this.handleChangeView}
          />
        </div>
      </div>
    );
  }
}
