import * as React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewCategory = (e,category) => {
    e.preventDefault();
    let fetchUrl = 'https://localhost:5001/addcategory?name='+category;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test add category");
    window.location.reload(true);
}

const Categories = () => {
    const [categories, setCategories] = useState([])  

    useEffect(() => {
    fetch(("https://localhost:5001/categories/"),{
    })
        .then((data) => data.json())
        .then((data) => setCategories(data))
    }, [])
    console.log(categories)
if (categories !== undefined){
    return(
        <div>
            <div
        style={{ 
            width: "900px", 
            display: "flex", 
            justifySelf: "center",
            marginLeft: '15%',
        }}>
            <table id='category-table'>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th># Types</th>
                    <th></th>
                </tr>
                {categories.map((category) => (
                <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    {(category.types !== undefined && category.types !== null) ?
                    <td>{category.types.length}</td>
                    : 
                    <td>0</td>
                    }
                    <td><Link to={`/category/${category.id}`}><button class="block">Edit</button></Link></td>
                </tr>
                ))}
            </table>
            </div>
            <div>
                <input name="newcategory" type="text" id="newcategory"/>
                <input type="submit" value="New category" onClick={ e => NewCategory(e,document.getElementById("newcategory").value)}/>
            </div>
        </div>
    )
    }
    else return null;
}
export default Categories