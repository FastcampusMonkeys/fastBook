import React, { Component } from 'react';

export default class PostForm extends Component {
  submitContent = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitContent}>
          <textarea name="content" defaultValue="content" />
          <button>write</button>
        </form>
      </div>
    );
  }
}
