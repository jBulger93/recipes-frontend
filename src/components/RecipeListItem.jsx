import React from 'react'

function RecipeListItem (props) {
  return (
    <div className="recipies-list-item">
      <a href={'/recipes/' + props.recipe._id}>{props.recipe.name}</a>
    </div>
  )
}

export default RecipeListItem