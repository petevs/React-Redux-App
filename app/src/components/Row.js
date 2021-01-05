import React from 'react'
import styled from 'styled-components'

export default function Row(props) {
    return (
        <MyRow>
            <Title>{props.title}</Title>
            <Value className={props.classes}>{props.value}</Value>
        </MyRow>
    )
}

const MyRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: space-between;
    align-items: baseline;
`

const Title = styled.h4`
    padding: .25rem;
`

const Value = styled.h4`
    justify-self: end;
    font-weight: 400;
    padding: .25rem;

    &.underline {
        border-bottom: 1px solid black;
    }

    &.double {
        border-bottom: 3px double black;
    }

`