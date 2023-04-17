import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import ViewRecipe from './ViewRecipe';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const splitRecipes = (recipes) => {
    const sections = {};
    recipes.forEach(recipe => {
      if (sections[recipe.section]) {
        sections[recipe.section].push(recipe);
      } else {
        sections[recipe.section] = [recipe];
      }
    });
    return sections;
  };

  const handleAddRecipeClick = () => {
    navigate('/addrecipe');
  };

  const handleView = (e) => {
    console.log(e);
    navigate(`/viewRecipe/${e}`);
  };

  const handleAddRecipeClose = () => {
    setShowAddRecipe(false);
  };

  const sections = splitRecipes(recipes);

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="navbar-brand">My Recipe App</h1>
        <button className="add-recipe-button" onClick={handleAddRecipeClick}>Add Recipe</button>
      </nav>
      <div className="section-container">
        {Object.keys(sections).map(section => (
          <div key={section} className="recipe-section">
            <h2>All Recipes</h2>
            <div className="recipe-card-container">
              {sections[section].map((recipe) => {
                return (
                  <div key={recipe.id} className="recipe-card">
                    <h3>{recipe.name}</h3>
                    <p><strong>Time Taken:</strong> {recipe.timeTaken}</p>
                    <p><strong>Description:</strong> {recipe.description}</p>
                    <div className="icon-container">
                      <button id={recipe.name} className="view-recipe-button" onClick={() => handleView(recipe.name)}>View Recipe</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
