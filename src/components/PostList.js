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

    const autoSavePost = debounce(this.onUpdate, 2000);
    autoSavePost();
  };

  onUpdate = () => {
    this.props.updatePosts(this.state.id, this.state.textAreaValue);
  };
  idComunity = (id, body) => {
    this.setState({
      textAreaValue: body,
      id: id,
    });
  };

  render() {
    const { posts, deletePosts, privatePosts } = this.props;
    const buttonStyle = {
      zIndex: '9999',
      position: 'absolute',
      top: '130px',
      left: '300px'
    }
    return (
      <React.Fragment>
        <div class="memo-side">
          <h2 class="blind">메모 리스트</h2>
          <ul class="memo-side__list">
            {posts
              .map(post => (
                <PostItem
                  key={post.id}
                  {...post}
                  deletePosts={deletePosts}
                  detailValue={this.detailValue}
                  updatePosts={this.updatePosts}
                  privatePosts={privatePosts}
                  idComunity={this.idComunity}
                />
              ))
              .reverse()}
          </ul>
        </div>
        <div className="memo-contents">
          <form class="memo-contents__form">
            <fieldset class="memo-contents__fieldset">
              <legend class="blind">메모 입력 폼</legend>
              <label for="contentTextarea" class="blind">내용</label>
              <textarea
                className="memo-contents__fieldset-textarea"
                key={posts.id}
                id="contentTextarea"
                name="detailContent"
                cols="30"
                rows="10"
                value={this.state.textAreaValue}
                onChange={this.handleChangeView}
                placeholder="Write Here"
              />
            </fieldset>
          </form>
          <a id="drag"></a>

          <button
            style={buttonStyle}
            onClick={e => {
              deletePosts(this.state.id);
            }}
          >
            Delete
        </button>
          <button
            onClick={e => {
              privatePosts(this.state.id);
            }}
          >
            Lock
        </button>
        </div>
      </React.Fragment>
    );
  }
}
