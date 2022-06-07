import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const UpdateCategory = (e,category) => {
    e.preventDefault();
    
    var id = category.id
    var name = category.name
    var jsonobj = {
        "id": id,
        "name": name,
        "types": [
          
        ]
    }

    // console.log(jsonobj)
    var typefield = document.getElementsByName('types')
    typefield.forEach(field => {
        var typejsonobj = {
            name: "",
            info: []
        }
        field.childNodes.forEach(child =>{
            
            if (child.id == "currenttype") 
            {
                typejsonobj.name = child.value
            }
            
            if (child.childNodes.length > 1){
                var div = child.childNodes
                console.log(div[2].value)
                typejsonobj.info.push(
                    {
                        name: div[2].value,
                        value: ""
                    }
                )
            }
            
        })
        jsonobj.types.push(typejsonobj)

    });
    console.log(jsonobj)
    console.log('finished')

    let fetchUrl = `https://localhost:5001/updateCategory?id=${id}`;

    fetch(fetchUrl,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonobj)
    })
    // window.location.reload(true);
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
    const [changedcategory, setChangedCategory] = useState(); 
    
    useEffect(() => {
        fetch('https://localhost:5001/getcategorybyid?id='+id)
         .then((response) => response.json())
         .then(response=>setCategory(response))
    }, [id]);
    useEffect(() => {
        setChangedCategory(category)
    })
    
    const onChangeName = (e) => {
        e.preventDefault();
        var categorynameinput = document.getElementsByName('categoryname')[0]
    
        var changes = changedcategory;
        changes.name = categorynameinput.value;
        setChangedCategory(changes);
        console.log(changedcategory)
    }
    const onChangeAttributeName = (e,index) => {
        e.preventDefault();

        //Type should be current value of text box 
        //Get element with modules and take the displayed value

        var changes = changedcategory;
        var attributenameinput = document.getElementsByName('types')[0]

        changes.types[index].name = attributenameinput.value;
        setChangedCategory(changes);
        // console.log(changedcategory)
        // console.log(index)
        // console.log(attributenameinput.value)
        // console.log(changes.types[index].name)
    }
    return(
        <div>
            {(category !== undefined) ? 
                <div style={{marginTop: '25px',marginLeft: '15%'}}>
                    <h3>Category: {category.Name}</h3>
                  <form>
                    <div>
                      <label>Name: </label>
                      <input name="categoryname" defaultValue={category.name} onChange={ e => onChangeName(e)} type="text" />
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
                        <div id="type-field" key={index} name="types" style={{border:'1px solid black', marginTop:'8px'}}>
                            <input type="submit" value="Remove Type" onClick={ e => RemoveType(e,category.id,type.name)}/>
                            <label>Name: </label>
                            <input defaultValue={type.name} type="text" onChange={ e => onChangeAttributeName(e,index)} id="currenttype" key={index}/>
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