"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Card from "./Card";
import styles from "./Card.module.css";
import Link from "next/link";

interface RecipeProps {
  recipe: {
    label: string;
    ingredientLines: string[];
    calories: number;
    yield: number;
    url: string;
    image: string;
  };
  addToFavorites: (recipe: {
    label: string;
    ingredientLines: string[];
    calories: number;
    yield: number;
    url: string;
    image: string;
  }) => void;

  removeFromFavorites: (recipe: {
    _id: number;
    label: string;
    ingredientLines: string[];
    calories: number;
    yield: number;
    url: string;
    image: string;
  }) => void;

  isFavorite: boolean;
  isLoggedIn: boolean;
}

const Recipe = ({
  recipe,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  isLoggedIn,
}: RecipeProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!isLoggedIn) {
      alert("Log in to add favorites.");
      router.push("/loginpage");
    } else {
      if (isFavorite) {
        removeFromFavorites(recipe);
      } else {
        addToFavorites(recipe);
      }
    }
  };

  const secureUrl = recipe.image.replace("/http:/", "https:");

  return (
    <Card>
      <div className={styles.content}>
        <Link href={recipe.url} target='_blank' className={styles.title}>{recipe.label}</Link>
        <p className={styles.description}>{recipe.calories} calories</p>
        <ul className={styles.ingredients}>
          {recipe.ingredientLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <p className={styles.favorite} onClick={handleClick}>
          {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
        </p>
      </div>
      <div className={styles.imgwrapper}>
        <Image
          src={recipe.image}
          alt={recipe.label}
          fill
          className={styles.img}
          sizes="(max-width:770px) 100px, 150px"
        />
      </div>
    </Card>
  );
};

export default Recipe;
