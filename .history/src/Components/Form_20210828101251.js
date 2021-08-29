import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="form-group">
          <label htmlFor=""></label>
          <input type="text" placeholder="Tên bài viết" />
        </div>
        <div className="form-group">
          <label htmlFor=""></label>
          <input type="text" placeholder="Nội dung" />
        </div>
        <button className="btn btn-primary" type="button" onClick={() => this.handleAddNote("Da them noi dung")}>Thêm nội dung</button>
      </div>
    );
  }
}

export default Form;