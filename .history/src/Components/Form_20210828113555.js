import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getValueOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  handleAddNote = () => {
    const { title, content } = this.state;
    this.props.handleAddNote(title, content);
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
        <button className="btn btn-primary" type="button" onClick={() => this.handleAddNote()}>Thêm nội dung</button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)