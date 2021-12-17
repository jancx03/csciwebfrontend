import * as Types from './constants'

// CAMPUSES

export const fetchAllCampuses = () => async (dispatch) => {
  fetch('http://localhost:5000/api/campuses')
    .then((res) => res.json())
    .then((data) => { console.log(data); dispatch({type: Types.GET_ALL_CAMPUSES, payload: data})})
}

export const fetchCampus = (id) => (dispatch) => {
    fetch(`http://localhost:5000/api/campuses/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch({type: Types.GET_CAMPUS, payload: data}))
}

export const addCampus = (campus) => (dispatch) => {
  fetch(`http://localhost:5000/api/campuses/`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(campus)
  })
    .then((res) => res.json())
    .then((payload) => { console.log(payload); dispatch({type: Types.ADD_CAMPUS, payload})})
}

export const editCampus = (campus) => (dispatch) => {
  fetch(`http://localhost:5000/api/campuses/${campus.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(campus)
  })
    .then((res) => res.json())
    .then((payload) => { console.log(payload); dispatch({type: Types.EDIT_CAMPUS, payload})})
}

export const deleteCampus = (id) => (dispatch) => {
  fetch(`http://localhost:5000/api/campuses/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "DELETE",
  })

  dispatch({type: Types.DELETE_CAMPUS, payload: id})
}

// STUDENTS

export const fetchAllStudents = () => (dispatch) => {
    fetch(`http://localhost:5000/api/students/`)
    .then((res) => res.json())
    .then((payload) => { console.log(payload); dispatch({type: Types.GET_STUDENTS, payload})})
}

export const fetchStudent = (id) => (dispatch) => {
    fetch(`http://localhost:5000/api/students/${id}`)
    .then((res) => res.json())
    .then((payload) => dispatch({type: Types.GET_STUDENT, payload}))
}

export const addStudent = (student) => (dispatch) => {
  return fetch(`http://localhost:5000/api/students/`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(student)
    
  })
    .then((res) => res.json())
    .then((payload) => { dispatch({type: Types.ADD_STUDENT, payload }); return payload})
}

export const editStudent = (student) => (dispatch) => {
  fetch(`http://localhost:5000/api/students/${student.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(student)
    
  })
    .then((res) => res.json())
    .then((payload) => dispatch({type: Types.EDIT_STUDENT, payload}))
}

export const deleteStudent = (id) => (dispatch) => {
    fetch(`http://localhost:5000/api/students/${id}`,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "DELETE",
    })

    dispatch({type: Types.DELETE_STUDENT, payload: id})
   
}