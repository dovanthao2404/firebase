import { startAfter } from 'firebase/database';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount = () => {
    const { noteTitle, id, noteContent } = this.props.note;
    if (this.props.dataEdit) {
      this.setState(
        noteTitle,
        id,
        noteContent
      );
    }
  }

  getValueOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  handleAddNote = () => {
    const { title, content } = this.state;
    this.props.addData({ title, content })
  }

  render() {
    console.log(this.props.dataEdit)
    const { key, noteTitle, noteContent } = this.props.dataEdit;
    return (
      <div className="container-fluid">
        <form >
          <div className="form-group">
            <label htmlFor=""></label>
            <input defaultValue={noteTitle} name="title" type="text" placeholder="Tên bài viết" onChange={(e) => this.getValueOnChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input defaultValue={noteContent} name="content" type="text" placeholder="Nội dung" onChange={(e) => this.getValueOnChange(e)} />
          </div>
          <button className="btn btn-primary" type="reset" onClick={() => this.handleAddNote()}>Thêm nội dung</button>
          <button className="btn btn-warning" type="reset">Luu</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataEdit: state.dataEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addData: (getItem) => {
      dispatch({ type: "ADD_DATA", getItem })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)