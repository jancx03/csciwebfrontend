/* eslint-disable */

import React, { Component } from "react";
import { connect } from "react-redux";
import { func, object } from 'prop-types'
import { fetchCampus, deleteCampus } from '../../store/thunk'
import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDeleteCampus = async (e) => {
    await this.props.deleteCampus(this.props.campus.id)
    this.props.history.replace('/campuses')
  }

  editCampus = () => {
    const { id } = this.props.match.params
    
    this.props.history.push(`/campus/edit/${id}`)
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        handleDeleteCampus={this.handleDeleteCampus}
        handleEditCampus={this.editCampus}
      />
    );
  }
}

CampusContainer.propTypes = {
  fetchCampus: func,
  campus: object,
  match: object,
  deleteCampus: func,
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};


// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampus(id)),
    deleteCampus: (id) => dispatch(deleteCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);