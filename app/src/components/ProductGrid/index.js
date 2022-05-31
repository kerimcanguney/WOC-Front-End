import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'

import './style.css'
function cutId (str){
  return str.substring(0,4) + "...";
}
export default function ProductGrid() {
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
    <div
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
          { items !== undefined &&
            items.map((item) => 
              <ProductItem id={cutId(item.id)} productId={item.id} title={item.name} category={item.category} type={item.type} progress={"20%"} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}


