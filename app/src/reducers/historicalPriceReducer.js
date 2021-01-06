const initialState = {
    historicalPrices: [],
    isFetching: false,
    error: ''
}

export const historicalPriceReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHING_HISTORICAL_PRICES_START":
        return {
          ...state,
          isFetching: true
        }
        case "FETCHING_HISTORICAL_PRICES_SUCCESS":
            return {
            ...state,
            isFetching: false,
            error: "",
            historicalPrices: action.payload
            }
        case "FETCHING_HISTORICAL_PRICES_ERROR":
            return {
            ...state,
            isFetching: false,
            error: action.payload,
            }
      default:
        return state;
    }
  }