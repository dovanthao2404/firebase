import React, { Component } from 'react';
import CardAccordion from './CardAccordion';

class Content extends Component {

  renderCardAccordion = () => {

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