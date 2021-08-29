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
    const { title, key, content } = this.props.dataEdit;

    if (this.props.dataEdit) {
      this.setState({
        key,
        title,
        content
      });
    }
  }

  getValueOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  handleAddNote = () => {
    if (!this.props.isEdit) {
      const { title, content } = this.state;
      this.props.addData({ title, content })
    } else {

      let item = { title: this.state.title, content: this.state.content }
      this.props.updateData(item)
    }
  }


  render() {
    const { key, title, content } = this.props.dataEdit;
    return (
      <div className="container-fluid">
        <form >
          <div className="form-group">
            <label htmlFor=""></label>
            <input defaultValue={title} name="title" type="text" placeholder="Tên bài viết" onChange={(e) => this.getValueOnChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input defaultValue={content} name="content" type="text" placeholder="Nội dung" onChange={(e) => this.getValueOnChange(e)} />
          </div>
          <button className="btn btn-primary" type="reset" onClick={() => this.handleAddNote()}>Thêm lưu</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    dataEdit: state.dataEdit,
    isEdit: state.isEdit,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addData: (getItem) => {
      dispatch({ type: "ADD_DATA", getItem })
    },
    updateData: (getDataUpdate) => {
      dispatch({ type: "UPDATE_DATA", getDataUpdate })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)