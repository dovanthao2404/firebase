import React, { Component } from 'react';
import CardAccordion from './CardAccordion';

class Content extends Component {

  renderCardAccordion = () => {
    let lisCard = [];
    for (let key in this.props.listNote) {
      let html = <CardAccordion
        key={key}
        title={this.props.listNote[key].title}
        content={this.props.listNote[key].content}
      />
    }
    return lisCard
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