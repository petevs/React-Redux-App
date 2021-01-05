const initialState = {
    price: 0,
    bitcoin: 9.02273849,
    isFetching: false,
    error: "",
    value() {
        return Math.round(this.price * this.bitcoin)
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHING_PRICE_START":
        return {
          ...state,
          isFetching: true
        }
        case "FETCHING_PRICE_SUCCESS":
        return {
          ...state,
          isFetching: false,
          error: "",
          price: action.payload
        }
        case "FETCHING_PRICE_ERROR":
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        }
      default:
        return state;
    }
  }