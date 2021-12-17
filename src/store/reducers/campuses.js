import * as Type from '../constants'

const campuses = (state = [], action = {}) => {
  switch(action.type) {
    case Type.GET_ALL_CAMPUSES:
      return action.payload
    case Type.ADD_CAMPUS:
      return [ ...state, action.payload ]
    case Type.EDIT_CAMPUS:
      return state.map((campus) => {
        if (campus.id === action.payload.id)
          return action.payload
        else
          return campus
      })
    case Type.DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.payload)
      // return state
      default:
        return state
  }
}

export default campuses