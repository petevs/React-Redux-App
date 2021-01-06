import React, { useState, useEffect } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import axios from 'axios'
import { connect } from "react-redux";
import styled from 'styled-components'
import { fetchHistoricalPrice } from '../actions/index'

const Chart = ({fetchHistoricalPrice, historicalPrice}) => {


    // const [data, setData] = useState()


    // useEffect(() => {
    //     axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=90&interval=daily')
    //         .then(({data}) => setData(data['prices'].map(item => {
    //             const newItem = {...item}
    //             const itemDate = new Date(newItem[0])
    //             return ({date: itemDate, price: Math.round(newItem[1])})
    //         }
    //         )))
    //         .catch(err => console.log(err))
    // },[])

    useEffect(() => {
        fetchHistoricalPrice()
    },[fetchHistoricalPrice])

    return (
        <Wrapper>
            <ChartWrapper>
                <LineChart
                    width={1000}
                    height={300}
                    data={historicalPrice}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={tick => {return '$' + tick}}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ChartWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template: 1fr;
    justify-items: center;
`

const ChartWrapper = styled.div`
    width: 1080px;
    padding: 2rem;
    background: #fff;
`

const mapStateToProps = (state) => {
    return {
      historicalPrice: state.historicalPriceReducer.historicalPrices,
    }
  }

const mapDispatchToProps = { fetchHistoricalPrice }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Chart);