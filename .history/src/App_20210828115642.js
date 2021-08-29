import React, { Component } from "react"
import './App.css';
import Content from "./Components/Content"
import Form from "./Components/Form"
import analytics from "./firebaseConnect"
import { getDatabase, ref, push } from "firebase/database";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNote: {}
    }
  }


  writeNewPost = (title, content) => {

  }

  // componentDidMount = () => {
  //   this.getData()
  // }

  handleAddNote = (name, value) => {
    this.writeNewPost(name, value)
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
              <Form handleAddNote={this.handleAddNote} ></Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
