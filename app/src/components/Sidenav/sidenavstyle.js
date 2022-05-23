import styled from 'styled-components'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {AiOutlineHome, AiOutlineInbox, AiOutlineClose} from 'react-icons/ai'
import {VscHome} from 'react-icons/vsc'
export const Container = styled.nav`
    position: fixed;
    left: 0;
    z-index: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    height: 100vh;
    background: rgba(80,120,255,1);
`
export const SideContainer = styled.nav`
    position: fixed;
    left: 0;
    z-index: 0;
    width: ${props => props.info ? '200px' : '0px'};
    display: flex;
    flex-direction: column;
    gap: 0px;
    height: 100vh;
    background: rgba(80,120,255,1);
    margin-left: 200px;
    transition: .2s;
`

export const Item = styled.a`
    top: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    display: table;
    justify-content: flex-start;
    vertical-align: end;
    width: 80%;
    cursor: pointer;
    transition: .2s;
    &:active{
        transition: .2s;
        color: darkslateblue;
    }
`
export const HomeIcon = styled(VscHome)`
    font-size: 35px;
`
export const WorkspaceIcon = styled(MdOutlineWorkOutline)`
    font-size: 35px;
`
export const MailIcon = styled(AiOutlineInbox)`
    font-size: 35px;
`
export const ItemSlot = styled.div`
    width:100%;
    height: 80px;
    border-top: 1px solid black;
    border-bottom: ${props => props.last ? '1px solid black' : 'none'};
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    text-align: center;
`
export const Title = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    display:flex;
    align-self: center;
    color: white;
`
export const Input = styled.input`
    display: flex;
    width: 85%;
    line-height: 25px;
    height: 18px;
    font-size: 14px;
    border-radius: 6px;
    color: black;
    border: 1px solid #CDD9ED;
    background: white;
    transition: border .3s ease;
    margin:auto;
    &::placeholder {
        color: gray;
    }
    &:focus {
        outline: none;
        border-color: #275EFE;
    }

`
export const CrossIcon = styled(AiOutlineClose)`
    cursor: pointer;
    display:flex;
    position: absolute;
    font-size: 1em;
    top:5px;
    right:5px;
`

export const ItemContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`