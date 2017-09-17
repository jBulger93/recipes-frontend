import React, { Component } from 'react'
import './Recipes.css'
import request from 'superagent'
import RecipesList from './components/RecipesList'
import Recipe from './components/Recipe'

class Recipes extends Component {
  constructor ()  {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount () {
    request.get('http://localhost:3001/recipes').end((error,response) => {
      if(!error) {
        this.setState({recipes:response.body})
      }
    })
  }

  render () {
    return (
      <div className="recipes-container">
      <RecipesList recipes={this.state.recipes} />
      </div>
    )
  }

  render () {
  const recipe = (this.state.recipes.length > 0) ? <Recipe recipe={this.state.recipes[0]} /> : ''

  return (
    <div className="recipes-container">
      <RecipesList recipes={this.state.recipes} />
      {recipe}
    </div>
  )
  }
}



export default Recipes
