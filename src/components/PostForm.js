import React from 'react';
import debounce from 'lodash.debounce';

// export default 는 값을 export하는거고 export 는 여러가지가 가능하다
export default class PostForm extends React.Component {
  static defaultProps = {
    onCreate: () => {}, // 할일 추가 버튼 클릭시 호출되는 함수
  };
  state = {
    newPostBody: '',
  };

  handleInputChange = e => {
    this.setState({
      newPostBody: e.target.value,
    });
    // debounce(this.props.onUpdate(), 2000);
  };

  handleButtonClick = e => {
    // 함수 내려받기
    this.props.onCreate(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    });
  };

  render() {
    const { newPostBody } = this.state;
    return (
      <div>
        <label>
          <textarea
            type="text"
            onChange={this.handleInputChange}
            className="detailContent"

            value={this.state.newPostBody}
            placeholder="Add Content"

          />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
      </div>
    );
  }
}
