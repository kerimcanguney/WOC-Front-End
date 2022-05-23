import React from 'react'
import WorkspaceItem from '../Workspaces/index'
const index = () => {
  return (
    <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
        <WorkspaceItem/>
        <WorkspaceItem/>
        <WorkspaceItem/>
        <WorkspaceItem/>
    </div>
  )
}

export default index