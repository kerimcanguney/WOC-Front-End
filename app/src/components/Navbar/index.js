import React from 'react'
import { useHref } from 'react-router-dom'
import logo from '../../images/blueLogo.png'
import {
    Nav, NavbarContainer, NavLogo, UserLogoWrapper,SearchWrapper,SearchBox,UserLogo, SearchIcon, IconWrapper
} from './navbarstyle'
const index = () => {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo src={logo} />

            <SearchWrapper>
                <SearchBox placeholder='search' type="text"></SearchBox>
                <SearchIcon/>
            </SearchWrapper>

            <UserLogoWrapper>
                <UserLogo onClick={() => logOut()}>USER</UserLogo>
            </UserLogoWrapper>
        </NavbarContainer>
    </Nav>
  )
}
function logOut(){
    localStorage.removeItem('WOCTOKEN')
    window.location.href= "/"
}
export default index