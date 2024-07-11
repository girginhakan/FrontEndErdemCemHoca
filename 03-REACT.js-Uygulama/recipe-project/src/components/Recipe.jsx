import React from 'react'
import '../assets/style/recipe.scss'
import DefaultRecipeImage from '../assets/img/default-recipe.jpg'

const Recipe = ({recipe,recipeSil}) => {
  return (
    <div className='card'>
      <img src={recipe.image?recipe.image:DefaultRecipeImage} alt={recipe.title+"_kapak"} />

      <div className="card-body">
       
        <h4>{recipe.title}</h4>

        <p>{recipe.description.substring((0,recipe.description).substring(0,30).lastIndexOf(" "))+"..."}</p>
        <div className="button-group">
        <button onClick={()=>recipeSil(recipe.id)} className='delete'>Sil</button>
        <button className='edit'>Düzenle</button>
        </div>
      </div>
    </div>
  )
}

export default Recipe