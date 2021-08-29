import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardAccordion extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" id={"heading" + this.props.id}>
          <h2 className="mb-0 d-flex">
            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={"#" + this.props.id} aria-expanded="false" aria-controls={this.props.id}>
              {this.props.title}
            </button>
            <button className="btn btn-warning" onClick={this.props.changeIsEdit}>Sua</button>
            <button className="btn btn-danger">Xoa</button>
          </h2>
        </div>

        <div id={this.props.id} className="collapse" aria-labelledby={"heading" + this.props.id} data-parent="#accordionExample">
          <div className="card-body">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeIsEdit: () => {
      dispatch(actionCreator)
    }
  }
}

export default connect(mapDispatchToProps)(CardAccordion)