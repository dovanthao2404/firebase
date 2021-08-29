import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardAccordion from './CardAccordion';

class Content extends Component {

  renderCardAccordion = () => {
    console.log(this.props.listNote)
    let lisCard = [];
    for (let key in this.props.listNote) {
      let html = <CardAccordion
        key={key}
        id={key}
        title={this.props.listNote[key].title}
        content={this.props.listNote[key].content}
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
      dispatch(actionCreator)
    }
  }
}

export default connect(mapStateToProps)(Content);