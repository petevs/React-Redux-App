const initialState = {
    price: 41924,
    bitcoin: 9.02273849,
    value() {
        return Math.round(this.price * this.bitcoin)
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRICE":
        return {
          ...state
        }
      default:
        return state;
    }
  }