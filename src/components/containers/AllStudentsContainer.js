import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { func, arrayOf, object, instanceOf} from 'prop-types'

import { 
  fetchAllStudents,
  deleteStudent
} from '../../store/thunk';

import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
    componentDidMount() {
      this.props.fetchAllStudents();
    }

    editStudent = (id) => {
      this.props.history.push(`/student/${id}/edit`)
    }

    render(){
        return(
            <div>
                <AllStudentsView 
                  students={this.props.students}
                  editStudent={this.editStudent}
                  deleteStudent={this.props.deleteStudent}
                />
            </div>
        )
    }
}

AllStudentsContainer.propTypes = {
  fetchAllStudents: func,
  deleteStudent: func,
  students: arrayOf(object),
  history: instanceOf(Object)
}

// Map state to props;
const mapState = (state) => {
  return {
    students: state.students,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudents()),
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));