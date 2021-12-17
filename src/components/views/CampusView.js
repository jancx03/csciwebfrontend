/* eslint-disable */
import { Link } from 'react-router-dom';
import { instanceOf, object, func } from 'prop-types'
 

const CampusView = ({ campus, handleDeleteCampus, handleEditCampus}) => {
   if (!campus) {
    return <h1>Loading...</h1>
  }

  const students = () => {
    if (campus.students === undefined || !campus.students.length)
    {
      return <p>No Students</p>

    }else{
      return campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
            <Link to={`/student/${student.id}`} key={student.id}>{name}</Link>
          </li>
        );
      })
    } 
  }

  return (
    <div>      
      <h1 style={{ display: 'inline-block', marginRight: '.3rem' }}>{campus.name}</h1>
      <button onClick={handleEditCampus}>Edit</button>
      <button onClick={handleDeleteCampus}>X</button>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <img src={campus.imageUrl} />
      <ul>
        {students()}
      </ul>
    </div>
  );
 

};

  CampusView.propTypes = {
    campus: instanceOf(Object),
    handleDeleteCampus: func,
    handleEditCampus: func
  }

export default CampusView;
