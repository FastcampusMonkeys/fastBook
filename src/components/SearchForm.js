import React from 'react';

export default class SearchForm extends React.Component {
  state = {
    keyword: '',
  };

  handleInputChange = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  // handleButtonClick = e => {
  //   // keyword값과 postitem에 body 값이 같은지를 비교해야한다..
  //   //  하지만 postitem의 body 값 불러와지질 않음 불러오는 방법이 잘못된거같다.
  //   if (this.state.keyword === this.props.body) {
  //     console.log('a')
  //   } else {
  //     console.log(this.props.body)
  //     this.setState({
  //       keyword: '',
  //     });
  //   }
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.keyword);
  };

  render() {
    const { keyword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          검색
          <input
            type="text"
            value={keyword}
            placeholder="Search"
            onChange={this.handleInputChange}
          />
          <button>검색하기</button>
        </label>
      </form>
    );
  }
}
