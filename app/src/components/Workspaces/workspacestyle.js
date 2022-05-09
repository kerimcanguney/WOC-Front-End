import styled from 'styled-components'
import {BsCheckLg} from 'react-icons/bs'

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-height: 100px;
    max-height: 150px;
    
    width: 850px;

    background: white;
    border-radius: 5%;

    position: absolute;
    display: grid;
    grid-template-columns: 150px 650px 50px; 
`
export const ImgWrapper = styled.div`
    height: 100%;
    width: 150px;
    text-align: center;
    align-items: center;

    display:grid;
`
export const Img = styled.h1` //<img
    font-size: 20px;
    font-weight: bold;
`
export const TextWrapper = styled.div`
    display: grid;
`
export const TopText = styled.p`
    font-size: 1.1em;
    font-weight: bold;
`
export const BodyText = styled.p`
    font-size: .95em;
`
export const FooterText = styled.p`
    font-size: .75em;
`
export const Button = styled.button`
    width: 100%;
    height: 50%;

    background-color: #1652F0;
    border: 1px solid #1652F0;
    border-radius: 14px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 14px;
    padding: 14px 16px;
    position: relative;
    text-align: center;
    width: fit-content;
    &:disabled {
    opacity: .5;
    }
    &:focus {
    outline: 0;
    }
    &:hover {
    background-color: #0A46E4;
    border-color: #0A46E4;
    }
    &:active {
    background-color: #0039D7;
    border-color: #0039D7;
    }
`
export const CheckIcon = styled(BsCheckLg)`
    color: white;
    width: fit-content;
    display:flex;

`
export const ButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    display: flex;
    margin-left: -10px;
`