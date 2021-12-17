import { Link } from "react-router-dom";
import { arrayOf, object, func } from "prop-types"

const AllStudentsView = (props) => {
  const {students, deleteStudent, editStudent} = props;

  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`student/new`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1 style={{ display: 'inline-block', margin: '1rem' }}>{name}</h1>
          </Link>
          <button onClick={() => editStudent(student.id) }>Edit</button>
          <button onClick={() => deleteStudent(student.id)}>X</button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};

AllStudentsView.propTypes = {
  students: arrayOf(object), 
  deleteStudent: func,
  editStudent: func
}

export default AllStudentsView;