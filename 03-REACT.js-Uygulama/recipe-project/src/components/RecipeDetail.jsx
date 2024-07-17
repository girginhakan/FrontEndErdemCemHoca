import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

const RecipeDetail = ({recipe}) => {
  // const { setTitle,
  //   setDescription,
  //   setImage}=useContext(DataContext);
  // const params =useParams();
  // const parametre =params.recipesId;
  return (
    <div className='detail'>
        <img src={recipe.image} alt="" />
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <Link to="/recipe-app/recipelist">Return All Recipes</Link>
    </div>
  )
}

export default RecipeDetail