import React from "react";
import Recipes from "@/components/Recipes";
import SearchBar from "@/components/SearchBar";

const RecipesPage = () => {
    return (
        <div>
            <SearchBar />
            <Recipes />
        </div>
    );
}

export default RecipesPage;