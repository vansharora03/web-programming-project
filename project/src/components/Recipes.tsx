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
  };

  const addToFavorites = async (recipe: any) => {
    try {
      const res = await fetch(`/backend/users/favorites/${userId}`, {
        method: "PUT", //update the above path
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({ recipe }),
      });

      if (!res.ok) throw new Error("Failed to update favorites");

      const data = await res.json();
      setFavorites(data.favorites);
    } catch (err) {
      console.error("Error updating favorites:", err);
    }
  };

  const removeFromFavorites = async (recipe: any) => {
    try {
      const res = await fetch(`/backend/users/favorites/${userId}`, {
        method: "DELETE", //update the above path
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({ recipeId: recipe._id }),
      });

      if (!res.ok) throw new Error("Failed to remove from favorites");

      const data = await res.json();
      setFavorites(data.favorites);
    } catch (err) {
      console.error("Error removing from favorites:", err);
    }
  };

  return (
    <section>
      <div className="container-xl lg-container m-auto px-1 py-6">
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
