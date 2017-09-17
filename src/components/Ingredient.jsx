import React from 'react'

function Ingredient (props) {
const ingredients = props.recipe.ingredients.map((ingredient,index) =>{
  return (
    <div className="ingredients-recipe">
      <ul className="ingredients">
        <li className="ingredients-list"{ingredients.name}{ingredients.quantity}{ingredients.unit}></li>
      </ul>
    </div> 
  )
})

export default Ingredient