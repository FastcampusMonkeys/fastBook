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
    posts: [],
  };

  locking = () => {
    password = prompt('당신의 password 입력하시오');
    // this.setState({ password: lockPassWord });
    this.props.privatePosts(this.state.id);
  };

  unLocking = e => {
    const unLockPassWord = prompt('당신의 password 입력하시오', password);
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
      id,
      privateMode,
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
            placeholder="글 작성하시려면 원하시는 리스트를 클릭하세요"
          />
        </div>
        {this.state.privateMode ? (
          <button onClick={this.unLocking}>UnLock</button>
        ) : (

          <div>
            <button
              onClick={e => {
                deletePosts(this.state.id);
              }}
            >
              Delete
            </button>
            <button onClick={this.locking}>Lock</button>
          </div>
        )}
      </div>
    );
  }
}
