import React from 'react'
import { Container, HomeIcon, Item, ItemSlot, MailIcon, WorkspaceIcon } from './sidenavstyle'

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
        <ItemSlot last={true}>
            <MailIcon/>
            <Item href='#inbox' onClick={() => setSidebarInfo('')}>Inbox</Item>
        </ItemSlot>
    </Container>
  )
}

export default index