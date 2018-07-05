import React from 'react';
import PostItem from './PostItem';
import debounce from 'lodash.debounce';

let password;
export default class PostList extends React.Component {
  state = {
    textAreaValue: '',
    id: '',
    privateMode: '',
    password: '',
  };

  locking = () => {
    password = prompt('password 입력하시오');
    // this.setState({ password: lockPassWord });
    this.props.privatePosts(this.state.id);
  };

  unLocking = e => {
    const unLockPassWord = prompt('password 입력하시오');
    if (unLockPassWord === password) {
      this.props.unPrivatePosts(this.state.id);
      this.setState({ privateMode: false });
    } else {
      alert('비밀번호가 다릅니다');
    }
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
  idComunity = (id, body, privateMode) => {
    this.setState({
      textAreaValue: body,
      id: id,
      privateMode: privateMode,
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
        <div className="memo-side">
          <h2 className="blind">메모 리스트</h2>
          <ul className="memo-side__list">
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
          <form className="memo-contents__form">
            <fieldset className="memo-contents__fieldset">
              <legend className="blind">메모 입력 폼</legend>
              <label htmlFor="contentTextarea" className="blind">내용</label>
              <textarea
                className="memo-contents__fieldset-textarea"
                key={posts.id}
                id="contentTextarea"
                name="detailContent"
                cols="30"
                rows="10"
                value={this.state.privateMode ? 'Lock' : this.state.textAreaValue}
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
          {this.state.privateMode ? (
            <button onClick={this.unLocking}>UnLock</button>
          ) : (
              <button onClick={this.locking}>Lock</button>
            )}
        </div>
      </React.Fragment>
    );
  }
}
