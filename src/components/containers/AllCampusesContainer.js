import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampuses, addCampus, deleteCampus } from "../../store/thunk";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        addCampus={this.props.addCampus}
        deleteCampus={this.props.deleteCampus}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.campuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampuses()),
    addCampus: (payload) => dispatch(addCampus(payload)),
    deleteCampus: (id) => dispatch(deleteCampus(id))
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  addCampus: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
