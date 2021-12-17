import * as Type from '../constants'

const student = (state = {}, action = {}) => {
  switch(action.type) {
    case Type.GET_STUDENT:
      return action.payload
    default:
      return state
  }
}

export default student