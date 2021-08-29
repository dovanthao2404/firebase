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

  function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}

componentDidMount = () => {
  this.getData();
}

handleAddNote = (name, value) => {

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
