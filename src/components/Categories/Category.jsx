import React from 'react'
import "./Categories.css"
const Category = ({img,categoryTitle}) => {
  return (
    <div className='category-item'><img src={img} alt="" /><h5>{categoryTitle}</h5></div>
  )
}

export default Category