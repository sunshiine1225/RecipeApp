package com.example.recipe;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, ObjectId> {
    Optional<Recipe> findRecipeByName(String name);
    Optional<Recipe> findById(ObjectId id);
    void deleteById(ObjectId id);
    void deleteByName(String id);

    Optional<Recipe> findByName(String name);
    List<Recipe> findByNameContainingIgnoreCase(String name);
    List<Recipe> findByTimeTakenLessThan(int timeTaken);



}
