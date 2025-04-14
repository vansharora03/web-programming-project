"use client";

import React, { useState, useEffect } from "react";
import RecipeItems from "@/RecipeItems.json";
import Recipe from "./Recipe";
import { isLoggedInTestBool } from "@/app/utils/isLoggedInTestBool";
import AddRecipe from "./AddRecipe";

const Recipes = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [recipeItems, setRecipeItems] = useState<any[]>(RecipeItems);
  const isLoggedIn = isLoggedInTestBool.val; // PLACEHOLDER FOR TESTING

  //placeholder
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleAddRecipe = (recipe: any) => {
    setRecipeItems((prevItems) => [...prevItems, recipe]);
  }

  const addToFavorites = (recipe: any) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav._id === recipe._id)) {
      updatedFavorites = favorites.filter((fav) => fav._id !== recipe._id);
    } else {
      updatedFavorites = [...favorites, recipe];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <section>
      <div className="container-xl lg-container m-auto px-4 py-6">
        {recipeItems.length === 0 ? (
          <p>No Recipe Items available</p>
        ) : (
          <div className="flex flex-col gap-6">
            {recipeItems.map((recipe) => (
              <Recipe
                key={recipe._id}
                recipe={recipe}
                addToFavorites={addToFavorites}
                isFavorite={favorites.some((fav) => fav._id === recipe._id)}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </div>
        )}
      </div>
      {isLoggedIn ? <AddRecipe handleAddRecipe={handleAddRecipe} /> : <></>}
    </section>
  );
};

export default Recipes;
