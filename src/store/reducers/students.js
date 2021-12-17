import * as Type from '../constants'

export const students = (state = [], action = {}) => {
  switch(action.type) {
    case Type.GET_STUDENTS:
      return action.payload
    case Type.ADD_STUDENT:
      return [ ...state, action.payload ]
    case Type.EDIT_STUDENT:
      return state.map((student) => {
        if (student.id === action.payload.id)
          return action.payload
        else 
          return student
      })
    case Type.DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload)
    default:
      return state
  }
}

export default students;
