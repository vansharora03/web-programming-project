"use client";

import React, { useState } from "react";
import Recipes from "@/components/Recipes";
import SearchBar from "@/components/SearchBar";
import RecipeItems from "@/RecipeItems.json";

const RecipesPage = () => {
  const [recipeItems, setRecipeItems] = useState<any[]>(RecipeItems);

  return (
    <div>
      <SearchBar setRecipeItems={setRecipeItems} />
      <Recipes recipeItems={recipeItems} setRecipeItems={setRecipeItems} />
    </div>
  );
};

export default RecipesPage;
