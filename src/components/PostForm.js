import React from 'react';

export default class PostForm extends React.Component {
  static defaultProps = {
    onCreate: () => {}, // 할일 추가 버튼 클릭시 호출되는 함수
  };
  state = {
    newPostBody: '',
  };
  submitContent = e => {
    this.setState({ newPostBody: e.target.value });
  };

  handleSubmit = e => {
    this.props.onCreate(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    });
  };
  render() {
    const { newPostBody } = this.state;
    return (
      <div>
        <form onSubmit={this.submitContent}>
          <textarea value={newPostBody} name="content" defaultValue="content" />
          <button conClick={this.handleSubmit}>write</button>
        </form>
      </div>
    );
  }
}
