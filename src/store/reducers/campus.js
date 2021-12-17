import * as Type from '../constants'

const campus = (state = {}, action = {}) => {
  switch(action.type) {
    case Type.GET_CAMPUS:
      return action.payload
    default:
      return state
  }
}

export default campus