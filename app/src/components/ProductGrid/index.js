import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'

import './style.css'
function cutId (str){
  return str.substring(0,4) + "...";
}
export default function ProductGrid() {
  const [items, setItems] = useState();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://localhost:5001/Product')
    .then(res=> {
      return res.json();
    })
    .then(data=>{
      setItems(data);
    })
  }, []);

  useEffect(() => {
    fetch(("https://localhost:5001/categories/"),{
    })
        .then((data) => data.json())
        .then((data) => setCategories(data))
    }, []);
    console.log(categories)
    const SelectType = (e) => {
      e.preventDefault();
      var typedropdown = document.getElementsByName('selectType')[0]
  
      console.log(typedropdown.value);
    }
    const NewProduct = (e,product) => {
      e.preventDefault();
      var type = document.getElementsByName('selectType')[0].value;
      var category;
      for (let index = 0; index < categories.length; index++) {
        for (let index2 = 0; index2 < categories[index].types.length; index2++) {
          if (categories[index].types[index2].name == type) {
              category = categories[index].name
          }
        }
      }
      let fetchUrl = 'https://localhost:5001/post?name='+product+'&category='+category+'&type='+type;
      console.log(fetchUrl);
      fetch(fetchUrl,{
          method: 'POST',
          credentials: 'include',
          headers:{   
              'accept': 'text/plain'
          }
      });
      console.log("test add product");
      window.location.reload(true);
    }

if (categories !== undefined || categories !== null){
  return (
    <><div
      style={{
        width: "900px",
        display: "flex",
        justifySelf: "center",
        marginLeft: '15%',
      }}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Type</th>
            <th>Title</th>
            <th>Progress</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items !== undefined &&
            items.map((item) => <ProductItem id={cutId(item.id)} productId={item.id} title={item.name} category={item.category} type={item.type} progress={"20%"} />
            )}
        </tbody>
      </table>
    </div>
    <div>
        <label>Name</label>
        <input name="newproduct" type="text" id="newproduct" />

        {(true) ?
          <><label>Type</label>
          <select name="selectType" onChange={e => SelectType(e)}>
            {categories.map((category) => (

            category.types.map((type,index) => 
            <option value={type.name} key={index}>{type.name}</option>
            )
            ))}
          </select></>
        :
        <label>No types found</label>}
        <input type="submit" value="New Product" onClick={e => NewProduct(e, document.getElementById("newproduct").value)} />
    </div></>
  )
}
else return null;
}


