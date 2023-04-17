import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './updateRecipe.css';

const RecipeUpdateForm = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [timeTaken, setTimeTaken] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      name,
      description,
      ingredients,
      steps,
      imageUrl,
      timeTaken,
    };
    console.log(updatedRecipe);
    axios
      .put(`http://localhost:8080/recipes/${params.id}`, updatedRecipe)
      .then(() => {
        console.log('Recipe updated successfully.');
        alert('Your file is being uploaded!');
      })
      .catch((error) => {
        console.log(error);
      });

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="update-recipe-form-container">
      <div className="update-recipe-form-group">
      <h2>---------------------------------------------------------------------------</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="update-recipe-form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="update-recipe-form-group">
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value.split('\n'))}
        ></textarea>
      </div>
      <div className="update-recipe-form-group">
        <label htmlFor="steps">Steps:</label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value.split('\n'))}
        ></textarea>
      </div>
      <div className="update-recipe-form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="update-recipe-form-group">
        <label htmlFor="timeTaken">Time Taken:</label>
        <input
          type="number"
          id="timeTaken"
          value={timeTaken}
          onChange={(e) => setTimeTaken(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default RecipeUpdateForm;
