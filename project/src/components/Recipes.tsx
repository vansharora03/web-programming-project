"use client";

import React, { useState, useEffect } from "react";
import RecipeItems from "@/RecipeItems.json";
import Recipe from "./Recipe";
import { isLoggedInTestBool } from "@/app/utils/isLoggedInTestBool";
import AddRecipe from "./AddRecipe";
import SearchBar from "./SearchBar";

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
          <div className="container-xl lg-container m-auto px-4 py-6">
            
          </div>
        )}
      </div>
      {isLoggedIn ? <AddRecipe handleAddRecipe={handleAddRecipe} /> : <></>}
    </section>
  );
};

export default Recipes;
