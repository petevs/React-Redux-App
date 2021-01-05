import React, {useEffect} from 'react'
import Row from './Row'
import styled from 'styled-components'
import { connect } from "react-redux";
import {numberWithCommas} from './formatters/numberWithCommas'
import {fetchPrice} from '../actions/index'

const Summary = ({price, bitcoin, value, fetchPrice, amountInvested}) => {
    
    useEffect(() => {
        fetchPrice()
    }, [])

    return (
        <Wrapper>
            <SummaryBox>
                <Row title='Current Price' value={'$' + numberWithCommas(price)}/>
                <Row title='Bitcoin' value={bitcoin} classes={'underline'}/>
                <Row title='Total Value' value={'$' + numberWithCommas(value)}/>
                <Row title='Amount Invested' value={'( $' + numberWithCommas(amountInvested) + ' )'} classes={'underline'} />
                <Row title='Gross Profit' value={`$${numberWithCommas(value-amountInvested)}`}  classes={'double'}/>
            </SummaryBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

const SummaryBox = styled.div`
    display: grid;
    grid-template-columns: 300px;
    padding: 2rem;
    font-size: 1.6rem;
    gap: .5rem;
    margin: 2rem 0;
    background-color: #fff;
    box-shadow: 
        rgba(42, 51, 83, 0.12) 0px 15px 35px 0px, 
        rgba(0, 0, 0, 0.06) 0px 5px 15px;
    
`


const mapStateToProps = (state) => {
    return {
      price: state.price,
      bitcoin: state.bitcoin,
      value: state.value(),
      amountInvested: state.amountInvested
    }
  }

const mapDispatchToProps = { fetchPrice }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Summary);