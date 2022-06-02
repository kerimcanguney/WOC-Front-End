import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const UpdateCategory = (e,category) => {
    e.preventDefault();
    /*
    let fetchUrl = 'https://localhost:5001/Novel/;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });*/
    console.log("test");
    window.location.reload(true);
}
const AddType = (e,categoryid,type) => {
    e.preventDefault();
    let fetchUrl = 'https://localhost:5001/addtypetocategory?categoryid='+categoryid+'&type='+type;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test");
    window.location.reload(true);
}

export default function Category(){
    const { id } = useParams();
    const [category, setCategory] = useState(); 
    
    useEffect(() => {
        fetch('https://localhost:5001/getcategorybyid?id='+id)
         .then((response) => response.json())
         .then(response=>setCategory(response))
    }, [id]);
    console.log(category)
    

    return(
        <div>
            {(category !== undefined) ? 
                <div style={{marginTop: '25px',marginLeft: '15%'}}>
                    <h3>Category: {category.Name}</h3>
                  <form>
                    <div>
                      <label>Name: </label>
                      <input value={category.name} type="text" />
                    </div>
                    <div>
                      <br />
                      <h4>Types</h4>
                      {(category.types !== undefined) ?
                      category.types.map((type, index) =>
                        <div key={index}>
                            <label>Name: </label>
                            <input value={type.name} type="text" />
                            {(type.info !== null) ?
                            type.info.map((info, idx) =>
                                <div key={idx}>
                                <label>Attribute {idx}: </label>
                                <input value={info.name} type="text" />
                            </div>
                            ):
                            <div>
                                no attributes found
                            </div>
                            }
                        </div>
                      )
                      : <div>
                        <h3>no types found</h3>
                      </div>
                        }
                      <input name="newtypename" type="text" id="newtypename"/>
                      <input type="submit" value="New Type" onClick={ e => AddType(e,category.id,document.getElementById("newtypename").value)}/>
                    </div>
                    
                    
                    <input type="submit" value="Save" onClick={ e => UpdateCategory(e,category)}/>
                  </form>
                </div>
            : 
            <div>
                <h3>Error loading category</h3>
            </div>
            }
        </div>
    )
}