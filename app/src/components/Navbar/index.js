import React from 'react'
import logo from '../../images/blueLogo.png'
import {
    Nav, NavbarContainer, NavLogo, UserLogoWrapper,SearchWrapper,SearchBox,UserLogo, SearchIcon, IconWrapper
} from './navbarstyle'
const index = () => {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo src={logo}/>

            <SearchWrapper>
                <SearchBox placeholder='search' type="text"></SearchBox>
                <SearchIcon/>
            </SearchWrapper>

            <UserLogoWrapper>
                <UserLogo>USER</UserLogo>
            </UserLogoWrapper>
        </NavbarContainer>
    </Nav>
  )
}

export default index