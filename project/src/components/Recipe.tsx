"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Card from "./Card";

interface RecipeProps {
  recipe: {
    _id: number;
    title: string;
    ingredientLines: string;
    calories: number;
    url: string;
  };
  addToFavorites: (recipe: {
    _id: number;
    title: string;
    ingredientLines: string;
    calories: number;
    url: string;
  }) => void;
  isFavorite: boolean;
  isLoggedIn: boolean;
}

const Recipe = ({
  recipe,
  addToFavorites,
  isFavorite,
  isLoggedIn,
}: RecipeProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!isLoggedIn) {
      alert("Log in to add favorites.");
      router.push("/loginpage");
    } else {
      addToFavorites(recipe);
    }
  };

  console.log(recipe);

  return (
    <Card>
      <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-1">{recipe.calories} calories</p>
      <p className="text-gray-600 mb-4">{recipe.ingredientLines}</p>
      <p
        className={`cursor-pointer text-sm ${
        isFavorite ? "text-red-500" : "text-blue-500"
        }`}
        onClick={handleClick}
      >
        {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
      </p>
      </div>
      <div className="relative w-full h-60">
      <Image
        src={recipe.url}
        alt={recipe.title}
        fill
        className="object-cover rounded-md"
        sizes="(max-width: 20px) 100px, 400px"
      />
      </div>
    </Card>
  );
};

export default Recipe;
