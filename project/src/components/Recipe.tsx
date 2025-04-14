
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Card from "./Card";
import styles from "./Card.module.css";

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

  return (
    <Card>
      <div className={styles.content}>
        <h1 className={styles.title}>{recipe.title}</h1>
        <p className={styles.description}>{recipe.calories} calories</p>
        <p className={styles.description}>{recipe.ingredientLines}</p>
        <p className={styles.favorite} onClick={handleClick}>
          {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
        </p>
      </div>
      <div className={styles.imgwrapper}>
        <Image
          src={recipe.url}
          alt={recipe.title}
          fill
          className={styles.img}
          sizes="(max-width:770px) 100px, 150px"
        />
      </div>
    </Card>
  );
};

export default Recipe;
