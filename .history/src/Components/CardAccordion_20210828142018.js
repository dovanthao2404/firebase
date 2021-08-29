import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardAccordion extends Component {

  twoActionButton = () => {
    this.props.changeIsEdit();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header" id={"heading" + this.props.id}>
          <h2 className="mb-0 d-flex">
            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={"#" + this.props.id} aria-expanded="false" aria-controls={this.props.id}>
              {this.props.title}
            </button>
            <button className="btn btn-warning" onClick={this.twoActionButton}>Sua</button>
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

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeIsEdit: () => {
      dispatch({ type: "CHANGE_IS_EDIT" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAccordion)