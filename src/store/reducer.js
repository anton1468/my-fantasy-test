import * as types from './types'
const initialState = {
  dress: null,
  bag: null,
  accessory: null
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
    case types.CHOOSE_ACCESSORY_CHOKER:
      return {
        ...state,
        accessory: state.accessory = "choker"
      }
    case types.CHOOSE_ACCESSORY_GLASSES:
      return {
        ...state,
        accessory: state.accessory = "glasses"
      }
    case types.CHOOSE_ACCESSORY_PENDANT:
      return {
        ...state,
        accessory: state.accessory = "pendant"
      }
    default: return state

  }
}


export default reducer;