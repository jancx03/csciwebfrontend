import { useState, useEffect } from 'react'
import { instanceOf, func, arrayOf } from 'prop-types'

const CampusFormView = ({ campusToEdit, editCampus, addCampus, editStudent, students })=> {
    const [campus, setCampus] = useState({
        name: '',
        description: '',
        address: '',
        imageUrl: '',
        students: []
    })

    useEffect(() => {
        if (campusToEdit) {
            setCampus(campusToEdit)
        }
    }, [campusToEdit])

    const submit = (e) => {
        e.preventDefault()
        
        const handler = editCampus ?? addCampus

        handler(campus)

    }    

    const addStudent = (e) => {
        e.preventDefault()
        if (e.target.value == 'null') {
            return
        }

        editStudent({id: e.target.value, value: campus.id})
    }

    const removeStudent = (e, studentId) => {
        e.preventDefault()
        editStudent({id: studentId, value: null})
    }

    const enrrolledStudents = () => {
        const campusStudents = students.map((student)=>{
            if (student !== undefined && student.campusId === campus.id) {
                return (
                    <li key={student.id}>
                        <p>
                            Name: {student.firstname} {student.lastname} 
                            <button onClick={(e) => removeStudent(e, student.id)}>
                                X
                            </button> 
                        </p>  
                    </li>
                )
            }
        }).filter((student) => student !== undefined)

        console.log(!campusStudents.length, campusStudents)

        if (!campusStudents.length) {
            return <li>No enrolled students.</li>
        }

        return campusStudents
    }

    const nonEnrolledStudents = () => {
        return students.map((student) => {
            if (student !== undefined && student.campusId === null)
                return (
                    <option 
                        key={student.id} 
                        value={student.id}>
                            {student.firstname} {student.lastname} 
                    </option>
                )
        })
    }

    if (!students || !campusToEdit.name) {
        return <h1>Loading...</h1>
    }

    console.log(campus)

    return(
       <div>
           <h1>Edit Campus</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={campus.name} 
                    onChange={(e) => setCampus({...campus, name: e.target.value })}
                    required
                />
                <label>Description</label>
                <input 
                    type="text"
                    name="description" 
                    value={campus.description} 
                    onChange={(e)=>setCampus({...campus, description: e.target.value})}
                    required
                    />
                <label>Address</label>
                <input 
                    type="text" 
                    name="address"
                    value={campus.address} 
                    onChange={(e) => setCampus({...campus, address: e.target.value })}
                    required
                />
                <label>Image URL</label>
                <input 
                    type="text" 
                    name="image"
                    value={campus.imageUrl} 
                    onChange={(e) => setCampus({...campus, imageUrl: e.target.value })}
                />
                <div>
                    <h4>Enrolled Students</h4>
                    <ul>
                        {enrrolledStudents()}
                    </ul>
                    <h3>Students</h3>
                    <select onChange={addStudent} defaultValue={'null'}>
                        <option value="null">Select Student</option>
                        {nonEnrolledStudents()}
                    </select>
                </div>
                <button>Submit</button>
          </form>
       </div>
       
    );
};

CampusFormView.propTypes = {
    campusToEdit: instanceOf(Object), 
    editCampus: func, 
    addCampus: func,
    students: arrayOf(Object),
    editStudent: func
}

export default CampusFormView;