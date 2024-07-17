import React, { useContext } from 'react'
import Recipe from './Recipe'
import DataContext from '../context/DataContext'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


const RecipeList = () => {
  const {recipes} =useContext(DataContext);
  return (
    <>
    <SearchBar/>
    <div className="card-list">
    {
      recipes.map((recipe) => 
        <Link to={recipe.id} key={recipe.id}>
          !recipe.isDeleted &&
          <Recipe recipe={recipe}   key={recipe.id} />
        </Link>
        
      )
    }
    </div>
    </>
  )
}

export default RecipeList