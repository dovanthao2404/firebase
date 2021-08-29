import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardAccordion from './CardAccordion';

class Content extends Component {

  renderCardAccordion = () => {

    console.log(this.props.listNote)
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

export default connect(mapStateToProps)(Content);