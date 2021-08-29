import React, { Component } from 'react';

class CardAccordion extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" id={"heading" + this.props.id}>
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={"#" + this.props.id} aria-expanded="true" aria-controls={this.props.id}>
              {this.props.title}
            </button>
          </h2>
        </div>

        <div id={this.props.id} className="collapse show" aria-labelledby={"heading" + this.props.id} data-parent="#accordionExample">
          <div className="card-body">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default CardAccordion;