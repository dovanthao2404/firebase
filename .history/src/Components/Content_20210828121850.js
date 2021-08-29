import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardAccordion from './CardAccordion';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNote: {}
    }
  }

  componentDidMount = () => {

  }


  renderCardAccordion = () => {
    const { listNote } = this.state;
    console.log(listNote)
    let lisCard = [];
    for (let key in listNote) {
      let html = <CardAccordion
        key={key}
        id={key}
        title={listNote[key].title}
        content={listNote[key].content}
      />;
      lisCard.push(html);
    }
    return lisCard;
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