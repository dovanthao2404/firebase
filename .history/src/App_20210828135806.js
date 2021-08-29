import React, { Component } from "react"
import { connect } from "react-redux";
import './App.css';
import Content from "./Components/Content"
import Form from "./Components/Form"



class App extends Component {

  renderForm = () => {
    <Form isEdit={this.props.changerIsEdit()} ></Form>
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="row mt-5">
            <div className="col-9">
              <Content></Content>
            </div>
            <div className="col-3">
              {this.renderForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changerIsEdit: () => {
      dispatch({ type: "CHANGE_IS_EDIT" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

