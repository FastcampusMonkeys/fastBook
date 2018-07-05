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
    return (
      <div>
        <ul>
          {posts
            .map(post => (
              <PostItem
                key={post.id}
                {...post}
                deletePosts={deletePosts}
                updatePosts={this.updatePosts}
                privatePosts={privatePosts}
                idComunity={this.idComunity}
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
            onChange={this.handleChangeView}
            value={this.state.privateMode ? 'Lock' : this.state.textAreaValue}
          />
        </div>
        <button
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
    );
  }
}
