import styled from 'styled-components'
import {FaSearch, FaUserCircle} from 'react-icons/fa'
export const SearchIcon = styled(FaSearch)`
    font-size: 1em;
    text-align: center;
    cursor: pointer;
    position:absolute;
    margin-left: 470px;
`
export const Nav = styled.nav`
    /* background: linear-gradient(#0175e4,#178af8, #0e82f2,#097ded, #1e91ff); */
    background: rgba(80,120,255,1);
    height: 80px;
    min-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 3px 0px 0 rgba(0,0,0,0.35);
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`

export const SearchWrapper = styled.div`
    display:flex;
    width: 500px;
    height: 80px;

    align-items: center;
`

export const SearchBox = styled.input`
    display: flex;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    height: 15px;
    font-size: 14px;
    border-radius: 6px;
    color: black;
    border: 1px solid #CDD9ED;
    background: white;
    transition: border .3s ease;
    &::placeholder {
        color: gray;
    }
    &:focus {
        outline: none;
        border-color: #275EFE;
    }

`


export const UserLogoWrapper = styled.div`
    display: flex;
    justify-self: flex-end;
    align-items: center;
    margin-right: 0px;
`

export const UserLogo = styled(FaUserCircle)`
    font-size: 2.25rem;
    color: white;
    cursor: pointer;

`

export const NavLogo = styled.img`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-left: 0px;
    min-width: 80px;
    background-image: url(${props => props.src});

    -webkit-filter: invert(1);
    filter: invert(1);
`;
export const WelkomText = styled.p`

`

export const LogOutLink = styled.p`
    cursor: pointer;
    margin-left: 1em;
    &:active{
        color:black;
    }

    &:hover{
        color: white;
    }
`