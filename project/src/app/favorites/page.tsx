"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/components/AddRecipes.module.css";
import AddRecipe from "@/components/AddRecipe";

interface Recipe {
  _id: number;
  label: string;
  ingredientLines: string[];
  calories: number;
  image: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [updateCounter, setUpdateCounter] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await fetch(`/backend/favorites/get`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ userId: localStorage.getItem("userId") }),
        });

        if (!res.ok) throw new Error("Failed to fetch favorites");
        const data = await res.json();
        setFavorites(data);
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };

    fetchFavorites();
  }, []);

  const handleDelete = async (recipeId: number) => {
    try {
      const res = await fetch(`/backend/favorites`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          recipeId,
        }),
      });

      if (!res.ok) throw new Error("Failed to delete favorite");

      setFavorites((prevFavorites) =>
        prevFavorites.filter((recipe) => recipe._id !== recipeId)
      );
    } catch (err) {
      console.error("Error deleting favorite:", err);
    }
  };

  const handleEdit = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    if (!currentRecipe) return;

    try {
      const res = await fetch(`/backend/favorites`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          recipeId: currentRecipe._id,
          label: currentRecipe.label,
          ingredientLines: currentRecipe.ingredientLines,
          calories: currentRecipe.calories,
          image: currentRecipe.image,
        }),
      });

      if (!res.ok) throw new Error("Failed to edit favorite");

      setIsEditing(false);
      setCurrentRecipe(null);

      // Reload favorites
      const fetchFavorites = async () => {
        const res = await fetch(`/backend/favorites/get`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ userId: localStorage.getItem("userId") }),
        });

        if (!res.ok) throw new Error("Failed to fetch favorites");
        const data = await res.json();
        setFavorites(data);
      };

      fetchFavorites();
    } catch (err) {
      console.error("Error editing favorite:", err);
    }
  };
  const handleAddRecipe = async (recipe: Recipe) => {
    const send: any = recipe;
    send.userId = localStorage.getItem("userId");
    send.ingredientLines = recipe.ingredientLines.join(", ");
    send.label = recipe.label;
    send.calories = recipe.calories;
    try {
      const res = await fetch(`/backend/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ send }),
      });

      if (!res.ok) throw new Error("Failed to add recipe");
      setUpdateCounter((prev) => prev + 1);
    } catch (err) {
      console.error("Error adding recipe:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Favorite Recipes</h1>
      <div className={styles.content}>
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div key={recipe._id} className={styles.card}>
              <img
                src={recipe.image}
                alt={recipe.label}
                width={300}
                height={200}
                className={styles.imgwrapper}
              />
              <h2 className={styles.title}>{recipe.label}</h2>
              <p className={styles.description}>
                Calories:{" "}
                {typeof recipe.calories === "number"
                  ? recipe.calories.toFixed(2)
                  : "N/A"}
              </p>
              <ul className={styles.ingredients}>
                {recipe.ingredientLines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(recipe)}
                  className={styles.edit}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className={styles.delete}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No favorite recipes found.</p>
        )}
      </div>
      <Link href="/recipes" className="mt-4 text-blue-500 hover:underline">
        Back to Recipes
      </Link>
      <AddRecipe handleAddRecipe={handleAddRecipe}></AddRecipe>

      {isEditing && currentRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Recipe</h2>
            <label className="block mb-2">
              Label:
              <input
                type="text"
                value={currentRecipe.label}
                onChange={(e) =>
                  setCurrentRecipe({ ...currentRecipe, label: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
              />
            </label>
            <label className="block mb-2">
              <input
                type="text"
                value={currentRecipe.ingredientLines}
                onChange={(e) =>
                  setCurrentRecipe({
                    ...currentRecipe,
                    ingredientLines: e.target.value,
                  })
                }
                className="w-full border rounded px-2 py-1"
              />
            </label>
            <label className="block mb-2">
              Calories:
              <input
                type="number"
                value={currentRecipe.calories}
                onChange={(e) =>
                  setCurrentRecipe({
                    ...currentRecipe,
                    calories: parseFloat(e.target.value),
                  })
                }
                className="w-full border rounded px-2 py-1"
              />
            </label>
            <label className="block mb-2">
              Image URL:
              <input
                type="text"
                value={currentRecipe.image}
                onChange={(e) =>
                  setCurrentRecipe({ ...currentRecipe, image: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
              />
            </label>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
