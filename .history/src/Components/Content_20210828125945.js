import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardAccordion from './CardAccordion';
import analytics from "./../firebaseConnect"
import { getDatabase, ref, push, onValue } from "firebase/database";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNote: []
    }
  }

  getData = () => {
    const db = getDatabase();
    const starCountRef = ref(db);
    onValue(starCountRef, (snapshot) => {
      let arrayData = []
      let data = snapshot.val()
      for (let note in data) {
        const key = note;
        const noteTitle = data[note].title;
        const noteContent = data[note].content;
        arrayData.push({ key, noteTitle, noteContent })
      }
      this.setState({ listNote: arrayData })
    });

  }

  componentWillUnmount = () => {
    this.getData()
  }


  renderCardAccordion = () => {
    const { listNote } = this.state;
    return listNote.map((note, id) => {
      return <CardAccordion
        key={id}
        id={note.key}
        title={note.noteTitle}
        content={note.noteContent}
      />;
    })
  }

  render() {
    return (
      <div className="accordion" id="accordionExample">
        {this.renderCardAccordion()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    listNote: state.listNote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);