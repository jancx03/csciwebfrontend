import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { func, instanceOf, arrayOf } from 'prop-types'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const NewStudentView = ({editStudent, studentRef, campuses}) => {
  const [student, setStudent] = useState({})
  const classes = useStyles();

  useEffect(() => {
    setStudent(studentRef)
  }, [studentRef])

  const handleChange = (e) => {
    setStudent({...student, [e.target.name]: e.target.value})
  }

  const listCampuses = () => {
    if (!campuses.length) {
      return <option value={null}>No campus found!</option>
    }

    return campuses.map((campus) => (
      <option key={campus.id} value={campus.id}>{campus.name}</option>
    ))
  }

  const validateGPA = () => {
    const {gpa} = student ?? null

    if (gpa !== null && (gpa < 0.0 || gpa > 4.0)) {
      return <p style={{color:'red', fontSize: '12px'}}>GPA can only be between 0 and 4!</p>
    }
    return 
        
  }

  if (!studentRef.firstname)
    return <h1>Loading...</h1>

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Student
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => editStudent(student, e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input 
            type="text"
            name="firstname" 
            value={student.firstname ?? ''} 
            onChange={(e) => handleChange(e)}
            required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input 
            type="text"
            name="lastname"
            value={student.lastname ?? ''}
            onChange={(e)=> handleChange(e) } 
            required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input 
            type="text" 
            name="email"
            value={student.email ?? ''}
            onChange={(e) => handleChange(e)} 
            required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Image Url: </label>
          <input 
            type="text" 
            name="imageUrl"
            value={student.imageUrl ?? ''} 
            onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <select 
            name="campusId"
            value={student.campusId ?? ''}
            onChange={(e) => handleChange(e)}>
              <option value=''>None</option>
              {listCampuses()}
          </select>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input 
            type="number" 
            name="gpa"
            value={student.gpa ?? ''}
            onChange={(e) => handleChange(e)} />
          {validateGPA()}
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

NewStudentView.propTypes = {
  handleChange: func, 
  editStudent: func,
  studentRef: instanceOf(Object),
  campuses: arrayOf(Object)
}

export default NewStudentView;