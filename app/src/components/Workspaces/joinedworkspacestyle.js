import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    text-decoration: none;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 80px;
    transition: .2s;

    &:active{
        transition: .2s;
        color: darkslateblue;
    }
`
export const Logo = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    position: absolute;
    left: 5px;
    border: 1px solid black;
`

export const Title =  styled.h1`
    width: 130px;
    position: absolute;
    right: 5px;
    height: 40px;
    font-size: 1.5rem;
    display: flex;
` 