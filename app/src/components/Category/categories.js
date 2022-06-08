import * as React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([])  

    useEffect(() => {
    fetch(("https://localhost:5001/categories/"),{
    })
        .then((data) => data.json())
        .then((data) => setCategories(data))
    }, [])
    console.log(categories)

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
                    <td>{category.types.length}</td>
                    <td><Link to={`/category/${category.id}`}><button class="block">Edit</button></Link></td>
                </tr>
                ))}
            </table>
            </div>
        </div>
    )
}
export default Categories