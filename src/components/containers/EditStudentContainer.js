import { useEffect } from "react";
import EditStudentView from '../views/EditStudentView'
import { fetchAllCampuses, fetchStudent, editStudent } from '../../store/thunk'
import { connect } from 'react-redux'
import { instanceOf, func } from 'prop-types'

const EditStudentContainer = ({ 
  history, 
  match, 
  fetchCampuses,
  fetchStudent,
  campuses,
  student,
  editStudent
}) => {

  useEffect(() => {
    fetchCampuses()
    fetchStudent(match.params.id)
  }, [])

  const handleEditStudent = async (student, e) => {
    e.preventDefault()
    if (student.campusId === '') {
      student.campusId = null
    }

    if (student.gpa < 0 || student.gpa > 4) {
      return
    }

    await editStudent(student)
    history.push(`/student/${student.id}`)
  }

  return (
    <EditStudentView 
      studentRef={student} 
      editStudent={handleEditStudent} 
      campuses={campuses} />
  )
}

EditStudentContainer.propTypes = {
  history: instanceOf(Object),
  match: instanceOf(Object),
  fetchCampuses: func.isRequired,
  campuses: instanceOf(Object),
  student: instanceOf(Object),
  editStudent: func,
  fetchStudent: func
}

const mapState = (state) => ({
  campuses: state.campuses,
  student: state.student
})

const mapDispatch = (dispatch) => ({
  fetchCampuses: () => dispatch(fetchAllCampuses()),
  fetchStudent: (id) => dispatch(fetchStudent(id)),
  editStudent: (payload) => dispatch(editStudent(payload))
})

export default connect(mapState, mapDispatch)(EditStudentContainer)