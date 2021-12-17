import * as Types from './constants'

// Campuses
export const getAllCampuses = (campuses) => ({
  type: Types.GET_ALL_CAMPUSES,
  payload: campuses
})

// CAMPUS
export const addCampus = (campus) => ({
  type: Types.ADD_CAMPUS,
  payload: campus
})

export const fetchCampus = (campus) => ({
type: Types.GET_CAMPUS,
payload: campus
})

export const editCampus = (campus) => ({
  type: Types.EDIT_CAMPUS,
  payload: campus
})

export const deleteCampus = (id) => ({
 type: Types.DELETE_CAMPUS,
 payload: id
})

// STUDENT
export const getAllStudents = (students) => ({
  type: Types.GET_STUDENTS,
  payload: students
})

export const addStudent = (student) => ({
  type: Types.ADD_STUDENT,
  payload: student
})

export const fetchStudent = (student) => ({
  type: Types.GET_STUDENT,
  payload: student
})

export const editStudent = (student) => ({
  type: Types.EDIT_STUDENT,
  payload: student
})

export const deleteStudent = (id) => ({
  type: Types.DELETE_STUDENT,
  payload: id
})
  