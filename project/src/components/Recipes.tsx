"use client";

import React, { useState, useEffect } from "react";
import RecipeItems from "@/RecipeItems.json";
import Recipe from "./Recipe";
import { isLoggedInTestBool } from "@/app/utils/isLoggedInTestBool";
import AddRecipe from "./AddRecipe";

const Recipes = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [recipeItems, setRecipeItems] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        if (!localStorage.getItem('token')) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, 500);
    return () => clearInterval(interval);
}, []);

  //placeholder
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);


  const addToFavorites = async (recipe: any) => {
    const send: any = recipe;
    send.userId = localStorage.getItem("userId");
    try {
      const res = await fetch(`/backend/favorites`, {
        method: "POST", //update the above path
        headers: {
          "Content-Type": "applications/json",
          "Authorization": `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ send }),
      });

      if (!res.ok) throw new Error("Failed to update favorites");

      const data = await res.json();
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
      <div className="container-xl lg-container m-auto px-1 py-6 text-center font-bold">
        {recipeItems.length === 0 ? (
          <p>No Recipe Items Available, Search Again</p>
        ) : (
          <div className="container-xl lg-container m-auto px-4 py-6">
            
          </div>
        )}
      </div>
    </section>
  );
};

export default Recipes;
