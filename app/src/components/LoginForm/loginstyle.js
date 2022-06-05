import styled from 'styled-components'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLock} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'

export const Wrapper = styled.div`
	user-select: none;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dde5f4;
    height: 100vh;
`

export const Button = styled.button`
    background-color: #1652F0;
    border: 1px solid #1652F0;
    border-radius: 14px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.15;
    overflow: visible;
    padding: 12px 16px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: all 80ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    padding: 1em 2.5em 1em 2.5em;
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
export const MailIcon = styled(AiOutlineMail)`
    color: #4d4d4d;
`
export const LockIcon = styled(AiOutlineLock)`
    color: #4d4d4d;
`
export const EyeIcon = styled(AiOutlineEye)`
    color: #4d4d4d;
`
export const Card = styled.form`
    background: #f1f7fe;
    padding: 3em 2em 3em 2em;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 0 2em #e6e9f9;
    gap: 1em;

    width: 20rem;
    height: 23rem;

    
`

export const Input = styled.input`
    outline:none;
    border:none;
    transition: .3s;
    &:focus{
        border-bottom: 1px solid blue;
    }

    &::placeholder{
        text-align: left;
    }

    margin-left: 1em;
`

export const InputWrapper = styled.div`
    background: white;
    box-shadow: 0 0 2em #e6e9f9;
    padding: 1em 2em 1em 2em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 20px;
    color: #4d4d4d;
`
export const Header = styled.p`
    font-size: 24px;
    margin-bottom: 0em;
`
export const Footer = styled.div`
    display:flex;
`
export const Span = styled.a`
    display: flex;
    font-size: 1em;
    color: #5e5e5e;
    text-decoration: none;
`