import React, { Component } from "react"
import './App.css';
import Content from "./Components/Content"
import Form from "./Components/Form"
import analytics from "./firebaseConnect"
import { getDatabase, ref, set, onValue, push, child, update } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNote: {}
    }
  }

  getData = () => {

    const db = getDatabase();
    const starCountRef = ref(db);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({
        listNote: data
      })
    });
  }

  writeNewPost = (uid, title, content) => {
    const db = getDatabase();
    push(ref(db), {
      title, content
    })
      .then(() => {
        // this.getData();
      })
      .catch((error) => {
        // The write failed...
      });
  }

  componentDidMount = () => {
    this.getData()
  }

  handleAddNote = (name, value) => {
    const uid = uuidv4();
    console.log(uid)
    this.writeNewPost(uid, name, value)
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
