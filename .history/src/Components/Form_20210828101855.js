import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getValueOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let dataGet = {}
    dataGet[name] = value;
    this.setState({ data: dataGet })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="form-group">
          <label htmlFor=""></label>
          <input name="title" type="text" placeholder="Tên bài viết" onChange={(e) => this.getValueOnChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor=""></label>
          <input name="content" type="text" placeholder="Nội dung" onChange={(e) => this.getValueOnChange(e)} />
        </div>
        <button className="btn btn-primary" type="button" onClick={() => this.props.handleAddNote()}>Thêm nội dung</button>
      </div>
    );
  }
}

export default Form;