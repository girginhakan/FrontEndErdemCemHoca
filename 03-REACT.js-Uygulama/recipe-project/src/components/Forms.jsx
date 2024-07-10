import React from 'react'
import '../assets/style/forms.scss'

const Forms = ({recipeEkle,recipes}) => {
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    const [image,setkImage]= useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        recipeEkle({
            id:(Number(recipes[recipes.length-1].id)+1).toString(),
            title:title,
            description:description,
            image:image,
        });
        setTitle("");
        setDescription("");
        setkImage("");
        
        
      }
    
  return (
    <div class="form-container">
  <form onSubmit={handleSubmit}>
    <div class="form-group">
      <input value={title} onChange={e=>setTitle(e.target.value)} type="text" id="recipe-title" placeholder='Recipe Title' name="recipe-title" />
    </div>
    <div class="form-group">
      <textarea value={description} onChange={e=>setDescription(e.target.value)} id="recipe-description" placeholder='Recipe Description' name="recipe-description" rows="5"></textarea>
    </div>
    <div class="form-group">
      <input value={image} onChange={e=>setkImage(e.target.value)} type="url" placeholder='Image URL' id="image-url" name="image-url" />
    </div>
    <button type="submit" class="form-button">Add Recipe</button>
  </form>
</div>
  )
}

export default Forms