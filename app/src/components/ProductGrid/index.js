import React from 'react'
import { ProductItem } from './productItem'

import './style.css'

export default class ProductGrid extends React.Component {
    render() {
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
                  <th>ID</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Progress</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <ProductItem progress={"50%"} title={"appels"} />
                <ProductItem progress={"50%"} />
              </tbody>
            </table>
          </div>
        );
    }
}


