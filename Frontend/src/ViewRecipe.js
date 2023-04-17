import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UpdateRecipe from "./UpdateRecipe"
import "./viewRecipe.css";

const ViewRecipe = (props) => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipes/${params.id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.recipeId]);

  const handleUpdate = () => {
    console.log(params.id)
    navigate(`/updateRecipe/${params.id}`)
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/recipes/${params.id}`)
      .then(() => {
        // handle success
        console.log('Recipe deleted successfully.');
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
      navigate("/");
  };

  return (
    <div className="view-recipe">
      <div className="view-recipe-header">
        <h2>{recipe.name}</h2>
        
      </div>
      <div className="view-recipe-body">
        <div className="view-recipe-details">
          <h3>Description:</h3>
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
          </ul>
          <h3>Steps:</h3>
          <ol>
            {recipe.steps &&
              recipe.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <h3>Time Taken:</h3>
          <p>{recipe.timeTaken} mins</p>
        </div>
      </div>
      <div className="view-recipe-actions">
      <h4><button onClick={handleUpdate}>Update</button></h4>
       <h4><button onClick={handleDelete}>Delete</button></h4>
      </div>
    </div>
  );
};

export default ViewRecipe;
