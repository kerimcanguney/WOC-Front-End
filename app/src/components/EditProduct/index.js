import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'
import { useParams } from 'react-router-dom'

import './style.css'
// react hook dynamisch generaten in map
// [title,2,3,4]
export default function EditProduct() {
  const { productId } = useParams();
  const [categorys, setCategorys] = useState();
  const [types, setTypes] = useState();
  const [item, setItems] = useState();
  const [currentCat, setCurrentCat] = useState();
  useEffect(() => {
    fetch(`https://localhost:5001/getbyid?id=${productId}`)
    .then(res=> {
      return res.json();
    })
    .then(data=>{
      setItems(data);
      // UpdateTypeField(setTypes,data.category)
    })
    
    fetch("https://localhost:5001/categories")
    .then(res =>{
      return res.json();
    })
    .then(data=>{
      var catarr = [];
      console.log(data)
      console.log(item)

      data.forEach(category => {
        catarr.push(category)
        if(category.name == item.category){
          setCurrentCat(category[0])
          console.log(currentCat)
        }
        
      });
      setCategorys(catarr)
    })
    
    
  }, []);
  // console.log(item)
  if (item !== undefined){
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
                <select id='category-field' defaultValue={currentCat} onChange={(e) => UpdateTypeField(setTypes,e.target.value)}  >
                  { categorys !== undefined &&
                    categorys.map((item) => 
                      <option value={item.id} key={item.id}>{item.name}</option>
                    )
                  }
                </select>
              </div>
              <div>
                <label>Type</label>
                <br />
                <select DefaultValue={item.type} onChange={(e) => updateTypeOfProduct(item, e.target.value)}>
                  { types !== undefined &&
                      types.map((opt) =>
                        <option value={opt.name} key={opt.id}>{opt.name}</option>
                      )
                  }
                </select>
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

function UpdateTypeField(setTypes,e){
   fetch(`https://localhost:5001/getcategorybyid?id=${e}`)
    .then((res) =>{
      return res.json()
    })
    .then((data) =>{
      var total = []
      data.types.forEach(element => {
        total.push(element)
      });
      setTypes(total)
    })
}

function updateTypeOfProduct(product, type){
  var e = document.getElementById('category-field')
  var categoryid = e.value
  if (product.type == type) {
    return null;
  }

  fetch(`https://localhost:5001/updateCategoryOfProduct?productid=${product.id}&categoryid=${categoryid}`,{
    method: 'PUT'
  })
  .then((res) =>{
    console.log("Changed category")
  })
  
    
  fetch(`https://localhost:5001/updateTypeOfProduct?productid=${[product.id]}&categoryid=${[categoryid]}&type=${[type]}`,{
    method: 'PUT'
  })
  .then((res) =>{
    console.log("Changed type")
    // window.location.reload()
  })
}