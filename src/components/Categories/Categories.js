import React from 'react'
import './Categories.scss'
import CategoryItem from '../CategoryItem/CategoryItem'

export default function Categories({categories}) {
  return (
    <div className="categories-container">
      {categories.map((category)=>(
        
       <CategoryItem category={category} key={category.id}/>
        
        
      ))}
    </div>
  )
}
