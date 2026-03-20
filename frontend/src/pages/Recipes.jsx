import React,{useContext} from 'react'
import { RecipeContext } from '../context/RecipeContext'


const Recipes = () => {
const {Data} = useContext(RecipeContext)


const renderRecipes = Data.map((recipe)=>{
  return <div key={recipe.id} className='recipe'>
  
    <img src= {recipe.image} alt="" />
  <h1>{recipe.title}</h1>
  <p>{recipe.ingredients
}</p>
  <h4>{recipe.category}</h4>

  </div>

})
  return (
    <div>{renderRecipes}</div>
  )
}

export default Recipes