import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'
import { useParams } from 'react-router-dom'

import './style.css'
function cutId (str){
  return str.substring(0,4) + "...";
}
export default function EditProduct() {
/*function removeAttribute(e, id) {
  e.preventDefault();

  document.getElementById(id).remove();
}*/

const removeAttribute = (e) => {
  console.log(items);
  e.preventDefault();
  const name = e.target.getAttribute("name");
  console.log("name" + name);
  setItems(items.filter(item => item.info.name !== name));
  console.log(items);


};

  const { productId } = useParams();

  const [items, setItems] = useState();
  useEffect(() => {
    fetch('https://localhost:5001/Product')
    .then(res=> {
      return res.json();
    })
    .then(data=>{
      setItems(data);
      console.log(items)
    })
  }, []);

  return (
    <div>
      { items !== undefined &&
        items.map((item) => 
          item.id === productId ? ( //Show correct hero information
              <div>
                <h3>Edit {item.name}</h3>

                <div>
                  <form>
                    <div>
                      <label>Name</label>
                      <br />
                      <input value={item.name} type="text" />
                    </div>
                    <div>
                      <label>Category</label>
                      <br />
                      <input value={item.category} type="text" />
                    </div>
                    <div>
                      <label>Type</label>
                      <br />
                      <input value={item.type} type="text" />
                    </div>
                    <div>
                      <br />
                      <h4>Attributes</h4>
                      {item.info.map((info, index) =>
                        <div key={index}>
                          <label>{info.name}</label>
                          <input value={info.value} type="text" />
                        </div>
                      )}
                    </div>

                    <input type="submit" value="Save" />
                  </form>
                </div>
              </div>
          ) : (
              null
          )
        )
      }
    </div>
  );
}