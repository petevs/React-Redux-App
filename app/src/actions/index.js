import axios from 'axios'

export const fetchPrice = () => (dispatch) => {

    //dispatching fetching bitcoin price start action
    dispatch({ type: "FETCHING_PRICE_START"});

    // Hit the api, with success and failure cases dispatching appropriate actions
    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=en')
        .then(({data}) => {
            const currentPrice = data.market_data.current_price.cad
            dispatch({type: "FETCHING_PRICE_SUCCESS", payload: currentPrice})
        })
        .catch(err => {
            dispatch({type: "FETCHING_PRICE_ERROR", payload: err})
            console.log(err)
        })

}

export const fetchHistoricalPrice = () => (dispatch) => {

    dispatch({type: "FETCHING_HISTORICAL_PRICES_START"})

    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=90&interval=daily')
            .then(({data}) => {
                const historical = data['prices'].map(item => {
                    const newItem = {...item}
                    const itemDate = new Date(newItem[0])
                    return ({date: itemDate, price: Math.round(newItem[1])})
                })
                dispatch({type: "FETCHING_HISTORICAL_PRICES_SUCCESS", payload: historical})
            })
            .catch(err => {
                dispatch({type: "FETCHING_HISTORICAL_PRICES_ERROR", payload: err})
                console.log(err)
            })
}