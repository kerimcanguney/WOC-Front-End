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
    console.log("test add type");
    window.location.reload(true);
}
const RemoveType = (e,categoryid,type) => {
    e.preventDefault();
    console.log(type);
    let fetchUrl = 'https://localhost:5001/removetypefromcategory?categoryid='+categoryid+'&type='+type;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test removetype");
    window.location.reload(true);
}
const AddInfoToType = (e,categoryid,type,info) => {
    e.preventDefault();
    console.log(info,type);
    let fetchUrl = 'https://localhost:5001/addinfototypeincategory?categoryid='+categoryid+'&type='+type+'&name='+info;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test add info to type");
    window.location.reload(true);
}
const RemoveInfoFromType = (e,categoryid,type,info) => {
    e.preventDefault();
    console.log(info,type);
    let fetchUrl = 'https://localhost:5001/removeinfofromtypeincategory?categoryid='+categoryid+'&type='+type+'&name='+info;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test remove info from type");
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
                      <input defaultValue={category.name} type="text" />
                    </div>
                    <div>
                      <br />
                      <h4>Types</h4>
                      <div>
                            <label>New attribute name: </label>
                            <input name="newattributename" type="text" id="newattributename"/>
                            <br />
                            <br />
                        </div>
                      {(category.types !== undefined) ?
                      category.types.map((type, index) =>
                        <div key={index}>
                            <input type="submit" value="Remove Type" onClick={ e => RemoveType(e,category.id,type.name)}/>
                            <label>Name: </label>
                            <input defaultValue={type.name} type="text" id="currenttype" key={index}/>
                            {(type.info !== null) ?
                            type.info.map((info, idx) =>
                                <div key={idx}>
                                <input type="submit" value="Remove Attribute" onClick={ e => RemoveInfoFromType(e,category.id,type.name,info.name)}/>
                                <label>Attribute {idx}: </label>
                                <input defaultValue={info.name} type="text" />
                            </div>
                            ):
                            <div>
                                no attributes found
                            </div>
                            }
                            <input type="submit" value="Add New Attribute" onClick={ e => AddInfoToType(e,category.id,type.name,document.getElementById("newattributename").value)}/>
                            <br />
                            <br />
                        </div>
                      )
                      : <div>
                        <h3>no types found</h3>
                      </div>
                        }
                    <br />
                    <br />
                      <input name="newtypename" type="text" id="newtypename"/>
                      <input type="submit" value="New Type" onClick={ e => AddType(e,category.id,document.getElementById("newtypename").value)}/>
                    </div>
                    
                    <br />
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