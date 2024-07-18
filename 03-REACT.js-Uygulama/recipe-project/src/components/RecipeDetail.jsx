import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

const RecipeDetail = () => {
  const {recipes}=useContext(DataContext);
  const params =useParams();
  const parametre =params.recipeId;
  return (
    <div className='detail'>
        <img src={recipes[parametre-1].image} alt="" />
        <h3>{recipes[parametre-1].title}</h3>
        <p>{recipes[parametre-1].description}</p>
        <Link to="/recipe-app/recipelist">Return All Recipes</Link>
    </div>
  )
}

export default RecipeDetail