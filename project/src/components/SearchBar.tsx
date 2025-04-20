"use client";
import styles from "./Card.module.css";
import Button from "./Button";
import React, { useState } from "react";
import Recipe from "./Recipe";

type APIRecipe = {
  recipe: {
    label: string;
    ingredientLines: string[];
    calories: number;
    yield: number;
    url: string;
    image: string;
  };
};

function SearchBar() {
  const [recipe, setRecipes] = useState<APIRecipe[]>([]);
  const [search, setSearchTerm] = useState("");
  const [nextPage, setNextPage] = useState<string | null>(null);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchClick = () => {
    setRecipes([]);
    fetch(
      `https://api.edamam.com/api/recipes/v2/?type=public&q=${search}&app_id=35b6401b&app_key=%2041191a205a196f9830c5d43ffd55a9d8%09`
    )
      .then((response) => response.json())
      .then((json) => {
        setRecipes(json.hits);
        setNextPage(json._links?.next?.href || null);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const loadMore = () => {
    if (!nextPage) {
      return;
    }

    fetch(nextPage)
      .then((response) => response.json())
      .then((json) => {
        setRecipes((prev) => [...prev, ...json.hits]);
        setNextPage(json._links?.next.href || null);
      });
  };

  const goBack = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <>
      <div className={styles.searchcontainer}>
        <input
          type="text"
          placeholder="Search recipes or ingredients"
          value={search}
          onChange={handleInput}
          className={styles.search}
        />
        <Button className={styles.button} onClick={searchClick} text="Search" />
      </div>

      <div className={styles.container}>
        {recipe.map((item, k) => {
          const newRecipe = item.recipe;

          const format = {
            _id: k,
            label: newRecipe.label,
            ingredientLines: newRecipe.ingredientLines,
            calories: Math.round(newRecipe.calories),
            yield: newRecipe.yield,
            image: newRecipe.image,
            url: newRecipe.url,
          };
          return (
            <Recipe
              key={k}
              recipe={format}
              addToFavorites={() => {}}
              isFavorite={false}
              isLoggedIn={true} //for testing
            />
          );
        })}
        {nextPage && (
          <div className={styles.link}>
            <Button text="Show more recipes" onClick={loadMore} />
          </div>
        )}
        {nextPage && (
          <div className={styles.link}>
            <Button text="Scroll to top" onClick={goBack} />
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
