import React, { Component } from 'react';

class CardAccordion extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" id={"heading" + this.props.key}>
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={"#" + this.props.key} aria-expanded="true" aria-controls={this.props.key}>
              Collapsible Group Item #1
            </button>
          </h2>
        </div>

        <div id={this.props.key} className="collapse show" aria-labelledby={"heading" + this.props.key} data-parent="#accordionExample">
          <div className="card-body">
            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
          </div>
        </div>
      </div>
    );
  }
}

export default CardAccordion;