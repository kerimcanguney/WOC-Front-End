import React from 'react'
import { Container, HomeIcon, Item, ItemSlot, MailIcon, WorkspaceIcon } from './sidenavstyle'

function Categories(){
  window.location.href = "/categories"
}

const index = ({setSidebarInfo}) => {
  return (
    <Container>
        <ItemSlot>
            <HomeIcon/>
            <Item href='/' onClick={() => setSidebarInfo('')}>Home</Item>
        </ItemSlot>
        <ItemSlot>
            <WorkspaceIcon/>
            <Item href='#workspaces' onClick={() => setSidebarInfo('Workspace')}>Workspace</Item>
        </ItemSlot>
        <ItemSlot >
            <MailIcon/>
            <Item href='#inbox' onClick={() => setSidebarInfo('')}>Inbox</Item>
        </ItemSlot>
        <ItemSlot last={true}>
            <MailIcon/>
            <Item href='/categories' onClick={() => Categories()}>Categories</Item>
        </ItemSlot>
    </Container>
  )
}

export default index