import React, { useState } from 'react';
import "./addRecipe.css"
import { useNavigate } from "react-router-dom";
import Home from './home';

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [timeTaken, setTimeTaken] = useState(0);
    const navigate = useNavigate();
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleIngredientsChange = (event) => {
      setIngredients(event.target.value.split(','));
    };
  
    const handleStepsChange = (event) => {
      setSteps(event.target.value.split(','));
    };
  
    const handleImageUrlChange = (event) => {
      setImageUrl(event.target.value);
    };
  
    const handleTimeTakenChange = (event) => {
      setTimeTaken(parseInt(event.target.value));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const recipe = { name, description, ingredients, steps, imageUrl, timeTaken };
      // TODO: send recipe data to backend API to add the new recipe to the database
     fetch('http://localhost:8080/recipes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(recipe)
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed.');
})
.then(data => {
  console.log(data); // do something with the response data
})
.catch(error => {
  console.log(error);
});
navigate("/");

    };
  
    return (
      <div className="add-recipe-container">
        <h2>Add a New Recipe</h2>
        <form >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
  <br></br>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
  <br></br>
          <label htmlFor="ingredients">Ingredients (separated by commas):</label>
          <textarea type="text" id="ingredients" value={ingredients.join(',')} onChange={handleIngredientsChange} />
  <br></br>
          <label htmlFor="steps">Steps (separated by commas):</label>
          <textarea type="text" rows="4" cols ="50" id="steps" value={steps.join(',')} onChange={handleStepsChange} />
  <br></br>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
  <br></br>
          <label htmlFor="timeTaken">Time Taken (in minutes):</label>
          <input type="number" id="timeTaken" value={timeTaken} onChange={handleTimeTakenChange} />
  <br></br>
          <button type="submit" onClick={handleSubmit}>Add Recipe</button>
        </form>
      </div>
    );
  };
  
  export default AddRecipe;
  