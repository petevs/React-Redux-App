import React, {useEffect} from 'react'
import Row from './Row'
import styled from 'styled-components'
import { connect } from "react-redux";
import {numberWithCommas} from './formatters/numberWithCommas'
import {fetchPrice} from '../actions/index'

const Summary = ({price, bitcoin, value, fetchPrice}) => {
    
    useEffect(() => {
        fetchPrice()
    }, [])

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

const mapDispatchToProps = { fetchPrice }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Summary);