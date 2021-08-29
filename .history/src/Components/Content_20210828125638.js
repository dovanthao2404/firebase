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

  componentDidMount = () => {
    // this.getData()
  }


  renderCardAccordion = () => {
    const { listNote } = this.state;


    return listNote.map(() => {
      return <CardAccordion
        key={key}
        id={key}
        title={listNote[key].title}
        content={listNote[key].content}
      />;
    })
  }

  render() {
    return (
      <div className="accordion" id="accordionExample">
        {/* {this.renderCardAccordion()} */}
        {this.getData()}
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