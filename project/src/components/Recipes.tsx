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
      const res = await fetch(`/api/favorites`, {
        method: "PUT",
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
      const res = await fetch(`/api/favorites`, {
        method: "DELETE",
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
          <div className="container-xl lg-container m-auto px-4 py-6"></div>
        )}
      </div>
      {isLoggedIn ? <AddRecipe handleAddRecipe={handleAddRecipe} /> : <></>}
    </section>
  );
};

export default Recipes;
