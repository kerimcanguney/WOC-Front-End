import React from 'react'
import Joinedworkspaces from '../Workspaces/joinedworkspaces'
import { Container, CrossIcon, Header, Input, Title, ItemContainer, SideContainer} from './sidenavstyle'

const index = ({info, setSidebarInfo}) => {
  return (
    <SideContainer info={info} style={{borderLeft: '1px solid black'}}>
      <Header>
        <Title>{info && info}</Title>
        <CrossIcon onClick={() => setSidebarInfo('')}/>
      </Header>
      <Input placeholder='workspace'/>
      <ItemContainer>
        <Joinedworkspaces/>
      </ItemContainer>
    </SideContainer>
  )
}

export default index