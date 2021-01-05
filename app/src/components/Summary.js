import React from 'react'
import Row from './Row'
import styled from 'styled-components'
import { connect } from "react-redux";
import {numberWithCommas} from './formatters/numberWithCommas'
import axios from 'axios'

const Summary = ({price, bitcoin, value}) => {

    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=en')
    .then(({data}) => console.log(data.market_data.current_price.cad))
    
    return (
        <SummaryBox>
            <Row title='Bitcoin' value={'$' + numberWithCommas(price)}/>
            <Row title='Current Price' value={bitcoin}/>
            <Row title='Total Value' value={'$' + numberWithCommas(value)}/>
        </SummaryBox>
    )
}

const SummaryBox = styled.div`
    display: grid;
    grid-template-columns: 250px;
    justify-content: center;
    font-size: 1.6rem;
    gap: .5rem;
    margin: 2rem 0;
`


const mapStateToProps = (state) => {
    return {
      price: state.price,
      bitcoin: state.bitcoin,
      value: state.value()
    }
  }
  
  export default connect(mapStateToProps)(Summary);