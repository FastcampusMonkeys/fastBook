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
