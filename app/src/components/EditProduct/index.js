import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'
import { useParams } from 'react-router-dom'

import './style.css'
// react hook dynamisch generaten in map
// [title,2,3,4]
const DeleteProduct = (e,productid) => {
  e.preventDefault();
  let fetchUrl = 'https://localhost:5001/product?id='+productid;
  console.log(fetchUrl);
  fetch(fetchUrl,{
      method: 'DELETE'
  });
  console.log("test delete product");
  window.location.href = '/';
}
export default function EditProduct() {
  const { productId } = useParams();
  const [categories, setCategories] = useState([])  
  const [item, setItems] = useState();
  useEffect(() => {
    fetch(`https://localhost:5001/getbyid?id=${productId}`)
    .then(res=> {
      return res.json();
    })
    .then(data=>{
      setItems(data);
      // UpdateTypeField(setTypes,data.category)
    })
  }, []);
  useEffect(() => {
    fetch(("https://localhost:5001/categories/"),{
    })
        .then((data) => data.json())
        .then((data) => setCategories(data))
    }, []);
  
  const SelectCategory = (e) => {
    e.preventDefault();
    var categorydropdown = document.getElementsByName('selectCategories')[0]
    var categoryid;

    console.log(categorydropdown.value);
    for (let index = 0; index < categories.length; index++) {
      if (categories[index].name == categorydropdown.value) {
          categoryid = categories[index].id
      }
    }
    console.log(categoryid)
    fetch(`https://localhost:5001/updateCategoryOfProduct?productid=${productId}&categoryid=${categoryid}`,{
    method: 'PUT'
  })
  .then((res) =>{
    console.log("Changed category")
    window.location.reload()
  })
}
const SelectType = (e) => {
    e.preventDefault();
    var typesdropdown = document.getElementsByName('selectTypes')[0]
    var categorydropdown = document.getElementsByName('selectCategories')[0]
    var categoryid;

    console.log(categorydropdown.value);
    for (let index = 0; index < categories.length; index++) {
      if (categories[index].name == categorydropdown.value) {
          categoryid = categories[index].id
      }
    }
    console.log(categoryid)
    console.log(typesdropdown.value);
    fetch(`https://localhost:5001/updateTypeOfProduct?productid=${[item.id]}&categoryid=${[categoryid]}&type=${[typesdropdown.value]}`,{
    method: 'PUT'
    })
  .then((res) =>{
    console.log("Changed type")
    window.location.reload()
  })
}
  // console.log(item)
  if (item !== undefined && categories !== undefined){
    return (
      <div>
        <div>
          <h3>Edit {item.name}</h3>
          <div>
            <form id='main'>
              <div>
                <label>Name</label>
                <br />
                <input defaultValue={item.name} type="text" />
              </div>
              <div>
                <label>Category</label>
                <br />
                <select name="selectCategories" value={item.category} onChange={ e => SelectCategory(e)}>
                        {categories.map((category) => (
                        <option value={category.name}>{category.name}</option>
                        ))}
                </select>
              </div>
              <div>
                <label>Type</label>
                <br />
                {
                  (true) ?
                  <select name="selectTypes" value={item.type} onChange={ e => SelectType(e)}>
                      {categories.map((category) => (

                        (item.category === category.name) ?
                        
                          category.types.map((type,index) => 
                          <option value={type.name} key={index}>{type.name}</option>
                          )
                        :null
                        ))}
                  </select>
                  : <div>
                      <h3>no types found</h3>
                      </div>
                  }

                    {/* (currentcategory !== undefined && currentcategory.types !== undefined) ?
                    <select name="selectTypes" onChange={ e => SelectType(e)}>
                        {currentcategory.types.map((type,index) => 
                        <option value={type.name} key={index}>{type.name}</option>
                        )}
                    </select>
                    : <div>
                        <h3>no types found</h3>
                        </div>
                    } */}
              </div>
              <div>
                <br />
                <h4>Attributes</h4>
                <div id='attributes'>
                  {item.info.map((info, index) =>
                    <div key={index}>
                      <label>{info.name}</label>
                      <input defaultValue={info.value} type="text" />
                    </div>
                  )}
                </div>
              </div>
              <br />
                    <input type="submit" value="Delete" onClick={ e => DeleteProduct(e,productId)}/>
              <br />
              <br />

              <input type="submit" onClick={(e)=>  updateProduct(e,getNodesMain(e),getNodes(e), item)} value="Save" />
            </form>
          </div>
        </div>
      </div>
    );
  }
  else return null;
}

function getNodes(e,item){
  e.preventDefault();
  var item = document.getElementById('attributes').childNodes
  var arr = []
  item.forEach(x => {
    arr.push(x.childNodes[1].value)
  });
  return arr;
}

function getNodesMain(e){
  e.preventDefault();
  var item = document.getElementById('main').childNodes
  var arr = []
  for (let index = 0; index < item.length; index++) {
    var curitem = item[index].childNodes[2]
    if (curitem){
      if (curitem.value !== undefined)
        arr.push(curitem.value);    
    }
  }
  return arr;
}

function updateProduct(e,main,arr,jsonobj){
  
  e.preventDefault();

  jsonobj.name = main[0]
  jsonobj.category = main[1]
  jsonobj.type = main[2]
  

  for (let index = 0; index < jsonobj.info.length; index++) {
    jsonobj.info[index].value = arr[index];
  }

  console.log(jsonobj)


  fetch(`https://localhost:5001/Product?id=${jsonobj.id}`,{
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(jsonobj)
  })

}