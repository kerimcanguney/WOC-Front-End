import React from 'react'
import ProductItem from '../components/ProductGrid/index'
const home = () => {
  return (
    <div style={{boxSizing: 'border-box', padding: 0, margin:0}}>
      <ProductItem progress={'100%'} />
    </div>
  )
}

export default home