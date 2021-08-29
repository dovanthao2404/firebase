import React, { Component } from "react"
import { connect } from "react-redux";
import './App.css';
import Content from "./Components/Content"
import Form from "./Components/Form"



class App extends Component {

  renderForm = () => {
    if (this.props.isEdit) {
      return <Form></Form>
    }
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="row mt-5">
            <div className="col-9">
              <Content ></Content>
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


export default connect(mapStateToProps, mapDispatchToProps)(App)

