import { useEffect } from "react";
import CampusFormView from '../views/CampusFormView'
import { fetchCampus, editCampus, fetchAllStudents, editStudent } from '../../store/thunk'
import { connect } from 'react-redux'
import { instanceOf, func, arrayOf } from 'prop-types'

const EditCampusContainer = ({ 
  history, 
  match, 
  fetchCampus, 
  editCampus, 
  campus, 
  students, 
  fetchStudents,
  editStudent
}) => {

  useEffect(() => {
    fetchCampus(match.params.id)
    fetchStudents()
  }, [])

  const handleEditCampus = (campus) => { 
    editCampus(campus)
    history.replace(`/campus/${match.params.id}`)
  }

  const handleEditStudent = ({id, value}) => {
    const student = students.find((student) => student.id == id)
    student.campusId = value

    editStudent(student)
    // fetchStudents()
  }

  return (
    <CampusFormView 
      campusToEdit={campus} 
      editCampus={handleEditCampus} 
      students={students} 
      editStudent={handleEditStudent} />
  )
}

EditCampusContainer.propTypes = {
  history: instanceOf(Object),
  match: instanceOf(Object),
  fetchCampus: func.isRequired,
  editCampus: func.isRequired,
  campus: instanceOf(Object),
  students: arrayOf(Object),
  editStudent: func,
  fetchStudents: func
}

const mapState = (state) => ({
  campus: state.campus,
  students: state.students
})

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampus(id)),
  editCampus: (payload) => dispatch(editCampus(payload)),
  fetchStudents: () => dispatch(fetchAllStudents()),
  editStudent: (payload) => dispatch(editStudent(payload))
})

export default connect(mapState, mapDispatch)(EditCampusContainer)