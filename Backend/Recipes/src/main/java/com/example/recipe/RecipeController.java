package com.example.recipe;

//import org.bson.types.ObjectId;
//import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/recipes")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;
    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipes() {
        return new ResponseEntity<List<Recipe>>(recipeService.allRecipes(), HttpStatus.OK);
    }
   

    
    @PostMapping
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
    Recipe newRecipe = recipeService.createRecipe(recipe);
    return new ResponseEntity<Recipe>(newRecipe, HttpStatus.CREATED);
}


// Get recipes with timeTaken less than or equal to a value


@GetMapping("/{name}")
public ResponseEntity<Optional<Recipe>> getByName(@PathVariable String name) {
    return new ResponseEntity<Optional<Recipe>>(recipeService.getRecipeByName(name), HttpStatus.OK);
}
@DeleteMapping("/{name}")
public ResponseEntity<Void> deleteByName(@PathVariable String name) {
recipeService.deleteRecipeByName(name);
return ResponseEntity.noContent().build();
}

@PutMapping("/{name}")
public ResponseEntity<Recipe> updateByName(@PathVariable String name, @RequestBody Recipe updatedRecipe) {
Recipe savedRecipe = recipeService.updateRecipeByName(name, updatedRecipe);
return ResponseEntity.ok(savedRecipe);
}



}
