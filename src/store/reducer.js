import * as types from './types'
const initialState = {
  dress: null,
  shirt: false
}
const reducer = (state = initialState, action) => {
  console.log({ state, action });






  switch (action.type) {

    case types.CHOOSE_DRESS:
      return {
        ...state,
        dress: state.dress = true
      }
    case types.CHOOSE_SHIRT:
      return {
        ...state,
        dress: state.dress = false
      }
    default: return state

  }
}


export default reducer;