import React from 'react';


import PostItem from './PostItem';
import PostList from './PostList';
// export default 는 값을 export하는거고 export 는 여러가지가 가능하다
export default class SearchForm extends React.Component {
  static defaultProps = {
    onCreate: () => { }, // 할일 추가 버튼 클릭시 호출되는 함수
  };
  state = {
    keyword: '',
  };

  handleInputChange = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleButtonClick = e => {
    // 함수 내려받기
    this.props.onCreate(this.state.keyword);
    // keyword값과 postitem에 body 값이 같은지를 비교해야한다..
    //  하지만 postitem의 body 값 불러와지질 않음 불러오는 방법이 잘못된거같다.
    if (this.state.keyword === <PostItem body={this.props.body} />) {
      console.log('a')
    } else {
      console.log(<PostList body={this.props.body} />)
      console.log(<PostItem body={this.props.body} />)
      this.setState({
        keyword: '',
      });
    }

  };



  render() {
    const { keyword } = this.state;
    return (
      <div>
        <label>
          검색
          <input
            type="text"
            value={keyword}
            placeholder="Search"
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>검색하기</button>
        </label>
      </div>
    );


  }

}