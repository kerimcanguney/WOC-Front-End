import React, { useEffect, useState } from 'react'
import WorkspaceItem from '../components/Workspaces/index'
function Dashboard () {
  const [requests, setRequests] = useState(null);
  const arr = [0,1,2];

  useEffect(() => {
    const url = "https://localhost:44310/Workspace/JoinRequests"
    fetch(url)
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        setRequests(data)
      })
  }, []);


  return (
    <div>
      { requests !== null &&
        <p>you have <strong>{requests.length}</strong> new request(s)</p>
      }

      { requests !== null &&
        requests.map((index) =>{
          console.log(index)
          return (
            <WorkspaceItem key={index}
              Company={index.workspace.name}
              Workspace={index.workspace.name}
              Host={undefined}
              Time={undefined}
              Image={undefined}
            />)
        })
      }
      
    </div>
  )
}

export default Dashboard