package com.example.recipe;

import org.bson.types.ObjectId;
//import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;
    public List<Recipe> allRecipes() {
        return recipeRepository.findAll();
    }
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }
    public Optional<Recipe> singleRecipe(String  imdbId) {
        return recipeRepository.findRecipeByName(imdbId);
    }
    public List<Recipe> findByName(String name) {
        return recipeRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Recipe> findByTimeTakenLessThan(int timeTaken) {
        return recipeRepository.findByTimeTakenLessThan(timeTaken);
    }
    public Recipe updateRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }
    public void deleteRecipe(ObjectId id) {
        recipeRepository.deleteById(id);

    }
    public Optional<Recipe> singleRecipeById(ObjectId id) {
        return recipeRepository.findById(id);
    }
    public Recipe updateRecipeById(ObjectId id, Recipe recipe) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe existingRecipe = optionalRecipe.get();
            existingRecipe.setName(recipe.getName());
            existingRecipe.setDescription(recipe.getDescription());
            existingRecipe.setIngredients(recipe.getIngredients());
            existingRecipe.setSteps(recipe.getSteps());
            existingRecipe.setImageUrl(recipe.getImageUrl());
            recipeRepository.save(existingRecipe);
        }
        return recipe;
    }

    public void deleteRecipeById(ObjectId id) {
        recipeRepository.deleteById(id);
    }
    public Optional<Recipe> getRecipeByName(String id) {
        return recipeRepository.findByName(id);
    }
    public Recipe updateRecipeByName(String id, Recipe recipe) {
        Optional<Recipe> optionalRecipe = recipeRepository.findByName(id);
        if (optionalRecipe.isPresent()) {
            Recipe existingRecipe = optionalRecipe.get();
            existingRecipe.setName(recipe.getName());
            existingRecipe.setDescription(recipe.getDescription());
            existingRecipe.setIngredients(recipe.getIngredients());
            existingRecipe.setSteps(recipe.getSteps());
            existingRecipe.setImageUrl(recipe.getImageUrl());
            recipeRepository.save(existingRecipe);
        }
        return recipe;
    }

    public void deleteRecipeByName(String id) {
        recipeRepository.deleteByName(id);
    }
}

    
    
    
   

