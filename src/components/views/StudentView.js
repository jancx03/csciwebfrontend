import { Link } from 'react-router-dom'
import { instanceOf, func } from 'prop-types'

const StudentView = ({student, editStudent, deleteStudent}) => {
  if (!student) {
    return <h3>Loading...</h3>
  }

  const studentCampus = () => {
    if (!student.campus) {
      return 'No Campus Enrrolled'
    } else {
      return <Link to={`/campus/${student.campusId}`}>{student.campus.name}</Link>
    }
  }



  return (
    <div>
      <h1 style={{ display: 'inline-block', marginRight: '.3rem' }}>
        {student.firstname} {student.lastname}
      </h1>
      <button onClick={editStudent}>Edit</button>
      <button onClick={deleteStudent}>X</button>
      <h3>{student.email}</h3>
      <img src={student.imageUrl} width='400px' />
      <h4>Campus: {studentCampus()}</h4>
      <h4>GPA: {student.gpa}</h4>
    </div>
  );
};

export default StudentView;

StudentView.propTypes = {
  student: instanceOf(Object),
  match: instanceOf(Object),
  editStudent: func,
  deleteStudent: func
}