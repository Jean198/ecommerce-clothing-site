import React from 'react'
import './CategoryItem.scss'

export default function CategoryItem({category}) {
  return (
    
        <div className='category-container' >
        <img src="" alt="" />
        <div className='background-image' style={{backgroundImage:`url(${category.imageUrl})`}}>
        </div>
        <div className='category-body-container'>
          <h2>{category.title}</h2>
          <p>Shop now</p>
        </div>
        </div>
      
    
  )
}
