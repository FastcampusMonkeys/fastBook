import React, { Component } from 'react';

export default class PostForm extends Component {
  render() {
    return (
      <div>
        <button>write</button>
        <input type="text" defaultValue="title" />
        <textarea
          name="content"
          id=""
          cols="10"
          rows="5"
          defaultValue="content"
        />
      </div>
    );
  }
}
