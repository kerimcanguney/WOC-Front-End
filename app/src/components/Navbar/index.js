import React,{useEffect, useState} from 'react'
import { useHref } from 'react-router-dom'
import logo from '../../images/blueLogo.png'
import {
    Nav, NavbarContainer, NavLogo, UserLogoWrapper,SearchWrapper,SearchBox,UserLogo, SearchIcon, IconWrapper, WelkomText,LogOutLink
} from './navbarstyle'
function Index () {
    const [username, Setusername] = useState("...")
    useEffect(() => {
      fetch(`https://localhost:50958/Account/Info?token=${JSON.parse(localStorage.getItem("WOCTOKEN")).token}`)
        .then(res=> {
            return res.json();
        })
        .then(data =>{
            Setusername(data.name)
        })
    }, [])
    
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo src={logo} />

            <SearchWrapper>
                <SearchBox placeholder='search' type="text"></SearchBox>
                <SearchIcon/>
            </SearchWrapper>

            <UserLogoWrapper>
                <WelkomText>welkom {username}</WelkomText>
                <LogOutLink onClick={() => logOut()}>logout</LogOutLink>
                
            </UserLogoWrapper>
        </NavbarContainer>
    </Nav>
  )
}
function logOut(){
    localStorage.removeItem('WOCTOKEN')
    window.location.href= "/"
}


export default Index