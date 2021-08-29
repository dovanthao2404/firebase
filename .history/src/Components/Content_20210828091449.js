import React, { Component } from 'react';
import CardAccordion from './CardAccordion';

class Content extends Component {
  render() {
    return (
      <div className="accordion" id="accordionExample">
        <CardAccordion></CardAccordion>
        <CardAccordion></CardAccordion>
        <CardAccordion></CardAccordion>

      </div>
    );
  }
}

export default Content;