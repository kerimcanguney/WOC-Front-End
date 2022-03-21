import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    background: rgba(0,0,255,0.25);

    align-items:center;
    display: grid;
    justify-content:center;
`
export const Wrapper = styled.div`
    background: rgba(0,0,0,0.4);

`
export const Form = styled.form`
    align-items: center;
    justify-content: center;
    display:grid;

    width: 100%;
    height: 250px;
    
    margin-top: 20px;

`
export const Button = styled.button`
    background-color: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    color: #24292E;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 16px;
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    touch-action: manipulation;

    &:hover{
        background-color: #F3F4F6;
        text-decoration: none;
        transition-duration: 0.1s;
    }
    &:active{
        background-color: #EDEFF2;
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
        transition: none 0s;
    }

    margin-bottom: 10px;
    
    &:disabled{
        background-color: rgba(27, 31, 35, 0.3);
        color: rgba(27, 31, 35, 0.3);
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
        transition: none 0s;
    }
`
export const FormH1 = styled.h1`
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    align-self: flex-end;
`
export const InputWrapper = styled.div`
    justify-content: space-around;
`
export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 400px;
    height: 475px;
    background: white;
    
    font-family: 'Mukta Malar', Arial;
    border-radius: 5%;

    display: grid;
    justify-content: center;
`
export const Input = styled.input`
    display: block;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    color: black;
    border: 1px solid #CDD9ED;
    background: white;
    transition: border .3s ease;


    width: 300px;
    height: 30px;
    margin-top: 20px;

    &::placeholder {
        color: #CBD1DC;
    }
    &:focus {
        outline: none;
        border-color: #275EFE;
    }


`
export const TextArea = styled.textarea`
    display: block;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    color: black;
    border: 1px solid #CDD9ED;
    background: white;
    transition: border .3s ease;


    width: 300px;
    height: 30px;
    margin-top: 20px;

    &::placeholder {
        color: #CBD1DC;
    }
    &:focus {
        outline: none;
        border-color: #275EFE;
    }
`
export const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`