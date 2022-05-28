import React,{useEffect, useState} from 'react'
import WorkspaceItem from './index'
function giveUnansweredCount(arr){
    console.log(arr)
    let count = 0
    arr.forEach(element => {
      console.log(element)
      if (element.isAccepted === false){
        count++
      }
    });
    return count
}

function Itemcollection (){
    const [requests, setRequests] = useState(null);

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
        <p>you have <strong>{giveUnansweredCount(requests)}</strong> new request(s)</p>
      }

      { requests !== null &&
        requests.map((index) =>{
          return (
            <WorkspaceItem key={index}
              Company={index.workspace.name}
              Workspace={index.workspace.name}
              Host={undefined}
              Time={undefined}
              Image={undefined}

              accountId={index.account.id}
              workspaceId={index.workspace.id}
              Accepted={index.isAccepted}
            />)
        })
      }
      
    </div>
  )
}
export default Itemcollection