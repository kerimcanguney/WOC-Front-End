import React, {useEffect, useState} from 'react'
import { ProductItem } from './productItem'

import './style.css'

export default function ProductGrid() {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
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
              <ProductItem id={item.id} title={item.name} progress={100/item.email.length*10+"%"} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}


