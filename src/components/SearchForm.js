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
      <form onSubmit={this.handleSubmit} className="header-menu__search">
        <label htmlFor="inpSearch" className="fas fa-search"><span className="blind">메모 검색</span></label>
        <input type="text" id="inpSearch" name="inpSearch" className="header-menu__search-input" placeholder="Search for text..." value={keyword} onChange={this.handleInputChange} />
      </form>
    );
  }
}
