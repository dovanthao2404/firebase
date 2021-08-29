import React, { Component } from 'react';
import CardAccordion from './CardAccordion';

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
        const title = data[note].title;
        const content = data[note].content;
        arrayData.push({ key, title, content })
      }
      this.setState({ listNote: arrayData })
    });

  }

  componentWillMount = () => {
    this.getData()
  }


  renderCardAccordion = () => {
    const { listNote } = this.state;
    return listNote.map((value, id) => {
      return <CardAccordion
        key={id}
        id={value.key}
        title={value.title}
        content={value.content}
        note={value}
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

export default Content;