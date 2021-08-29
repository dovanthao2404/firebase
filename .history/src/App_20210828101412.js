import React, { Component } from "react"
import './App.css';
import Content from "./Components/Content"
import Form from "./Components/Form"
import analytics from "./firebaseConnect"
import { getDatabase, ref, set, onValue } from "firebase/database";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNote: {}
    }
  }

  componentDidMount = () => {
    const db = getDatabase();
    const starCountRef = ref(db);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({
        listNote: data
      })
    });
  }

  handleAddNote = (content) => {
    console.log(content)
  }


  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="row mt-5">
            <div className="col-9">
              <Content listNote={this.state.listNote}></Content>
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
