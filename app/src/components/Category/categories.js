import * as React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([])  
    const [currentcategory, setcurrentcategory] = useState([]) 

    useEffect(() => {
    fetch(("https://localhost:5001/categories/"),{
    })
        .then((data) => data.json())
        .then((data) => setCategories(data))
    }, [])
    console.log(categories)
    useEffect(() => {
        setcurrentcategory(categories[0])
    })
    console.log(currentcategory)
    /////////////////////////////
    //Category dropdowns with select
    const SelectCategory = (e) => {
        e.preventDefault();
        var categorydropdown = document.getElementsByName('selectCategories')[0]
    
        console.log(categorydropdown.value);
        for (let index = 0; index < categories.length; index++) {
            if (categories[index].name == categorydropdown.value) {
                setcurrentcategory(categories[index])
            }
        }
    }
    const SelectType = (e) => {
        e.preventDefault();
        var typesdropdown = document.getElementsByName('selectTypes')[0]
    
        console.log(typesdropdown.value);
    }
    ////////////////////////////// 

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
            {//////////////////////////
            //Category dropdowns with select
            }
                <div>
                    <select name="selectCategories" onChange={ e => SelectCategory(e)}>
                        {categories.map((category) => (
                        <option value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    {
                    (currentcategory !== undefined && currentcategory.types !== undefined) ?
                    <select name="selectTypes" onChange={ e => SelectType(e)}>
                        {currentcategory.types.map((type, index) => 
                        <option value={type.name}>{type.name}</option>
                        )}
                    </select>
                    : <div>
                        <h3>no types found</h3>
                        </div>
                    }
                </div>
                {//////////////////////////
                }
        </div>
    )
}
export default Categories