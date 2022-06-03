import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'
import { useParams } from 'react-router-dom'

import './style.css'
// react hook dynamisch generaten in map
// [title,2,3,4]
export default function EditProduct() {
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
  const [formInfo, SetFormInfo] = useState("empty");
  console.log(formInfo)
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
                      <div onChange={(e)=> e.target.SetFormInfo("a") }>
                        {item.info.map((info, index) =>
                          <div key={index}>
                            <label>{info.name}</label>
                            <input value={info.value} type="text" />
                          </div>
                        )}
                      </div>
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

function updateProduct(id){
  var jsonobj = {
  "id": "602d2149e773f2a3990b47f5",
  "name": "Banaan",
  "category": "Food",
  "type": "Fruit",
  "info": [
      {
        "name": "Calorieen",
        "value": "10kcal"
      },
      {
        "name": "Gewicht",
        "value": "100g"
      },
      {
        "name": "Fresg",
        "value": "ja"
      }
    ]
  }
  fetch(`https://localhost:5001/Product?id=${id}`,{
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(jsonobj)
  })

}