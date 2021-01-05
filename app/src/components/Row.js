import React from 'react'
import styled from 'styled-components'

export default function Row(props) {
    return (
        <MyRow>
            <Title>{props.title}</Title>
            <Value>{props.value}</Value>
        </MyRow>
    )
}

const MyRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: space-between;
`

const Title = styled.h4`
`

const Value = styled.h4`
    justify-self: end;
    font-weight: 400;
`