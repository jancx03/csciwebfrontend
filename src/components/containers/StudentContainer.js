import React, { Component } from "react";
import { connect } from "react-redux";
import { StudentView } from "../views";
import { fetchStudent, deleteStudent } from '../../store/thunk'
import { func, instanceOf } from 'prop-types'

class StudentContainer extends Component {
  componentDidMount() {
    // getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  editStudent = () => {
    this.props.history.push(`/student/${this.props.student.id}/edit`)
  }

  handleDeleteStudent = async () => {
    await this.props.deleteStudent(this.props.student.id)
    this.props.history.replace('/students')
  }

  render() {
    return (
      <StudentView 
        student={this.props.student}
        editStudent={this.editStudent}
        deleteStudent={this.handleDeleteStudent}
      />
    );
  }
}

StudentContainer.propTypes = {
  fetchStudent: func,
  match: instanceOf(Object),
  student: instanceOf(Object),
  history: instanceOf(Object),
  deleteStudent: func,
}

// map state to props
const mapState = (state) => {   
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudent(id)),
    deleteStudent: (id) => dispatch(deleteStudent(id))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);