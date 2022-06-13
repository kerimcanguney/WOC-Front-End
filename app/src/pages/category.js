import React,{useState} from 'react'
import Category from '../components/Category/category'
import Navbar from '../components/Navbar/index'
import Sidenav from '../components/Sidenav/index'
import Sidenav2 from '../components/Sidenav/index2'
import styled from 'styled-components'
function Index() {
  const [info, setSidebarInfo] = useState(null);
  return (
    <div className='Container'>
        <Navbar/>
        <Sidenav setSidebarInfo={setSidebarInfo}/>
        <Sidenav2 setSidebarInfo={setSidebarInfo} info={info}/>
        <Container info={info}>
          <Category/>
        </Container>
  </div>
  )
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: lightcyan;
  
  /* border: 5px solid black; */
  margin-left: ${props => props.info ? "400px" : "200px"};
  transition: .2s;
`

export default Index