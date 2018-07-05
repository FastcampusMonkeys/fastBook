import React from 'react';
// export default 는 값을 export하는거고 export 는 여러가지가 가능하다
export default class PostForm extends React.Component {
  static defaultProps = {
    onCreate: () => {}, // 할일 추가 버튼 클릭시 호출되는 함수
  };
  state = {
    newPostBody: 'write content',
  };

  handleButtonClick = e => {
    // 함수 내려받기
    this.props.onCreate(this.state.newPostBody);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Add</button>
      </div>
    );
  }
}
