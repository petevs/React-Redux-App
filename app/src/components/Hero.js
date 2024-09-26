import React from 'react'
import styled from 'styled-components'

export default function Hero() {
    return (
        <Wrapper>
            <Title>How Much is My Bitcoin Worth?</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    min-height: 100px;
    align-items: center;
`

const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 3.5rem;
`