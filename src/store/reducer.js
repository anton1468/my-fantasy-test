import * as types from './types'
const initialState = {
  dress: null,
  bag: null
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
    case types.CHOOSE_BAG_ORANGE:
      return {
        ...state,
        bag: state.bag = true
      }
    case types.CHOOSE_BAG_BLUE:
      return {
        ...state,
        bag: state.bag = false
      }
    default: return state

  }
}


export default reducer;