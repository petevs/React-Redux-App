import axios from 'axios'

axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=en')
.then(({data}) => console.log(data.market_data.current_price.cad))

export const fetchPrice = () => (dispatch) => {

    //dispatching fetching bitcoin price start action
    dispatch({ type: "FETCHING_PRICE_START"});

    // Hit the api, with success and failure cases dispatching appropriate actions
    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=en')
        .then(({data}) => {
            const currentPrice = data.market_data.current_price.cad
            dispatch({type: "FETCHING_PRICE_SUCCESS", payload: currentPrice})
            console.log(currentPrice)
        })
        .catch(err => {
            dispatch({type: "FETCHING_PRICE_ERROR", payload: err})
            console.log(err)
        })

}