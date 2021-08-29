import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardAccordion from './CardAccordion';

class Content extends Component {

  renderCardAccordion = () => {
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
    prop: state.prop
  }
}

export default Content;