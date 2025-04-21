'use client'
import styles from './Card.module.css'
import Button from './Button';
import React, { useState } from 'react';
import Recipe from './Recipe';

type APIRecipe = {
    recipe: {
        label: string;
        ingredientLines: string[];
        calories: number;
        url: string;
        yield: number;
        image: string;
    };
}

function SearchBar() {
    const [recipe, setRecipes] = useState<APIRecipe[]>([]);
    const [search, setSearchTerm] = useState('');
    const [nextPage, setNextPage] = useState<string | null>(null);

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }


    const searchClick = () => {
        fetch(`https://api.edamam.com/api/recipes/v2/?type=public&q=${search}&app_id=35b6401b&app_key=%2041191a205a196f9830c5d43ffd55a9d8%09`)
            .then((response) => response.json())
            .then((json) => {
                setRecipes(json.hits);
                setNextPage(json._links?.next?.href || null);
            })
            .catch((error) => console.error('Error: ', error));
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
            })
    };

    const goBack = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search Recipes or Ingredients"
                value={search}
                onChange={handleInput}
                className={styles.search}
            />
            <Button className={styles.searchButton} onClick={searchClick} text='Search' />

            <div>
                {recipe.map((item, k) => {

                    const format = {
                        _id: k,
                        label: item.recipe.label,
                        ingredientLines: item.recipe.ingredientLines || [],
                        calories: Math.round(item.recipe.calories),
                        yield: item.recipe.yield,
                        image: item.recipe.image,
                        url: item.recipe.url,
                    };
                    return (
                        <Recipe
                            key={k}
                            recipe={format}
                            addToFavorites={() => {}}
                            removeFromFavorites={() => {}}
                            isFavorite={false}
                            isLoggedIn={false}
                        />
                    );
                })}
                {nextPage && (

                <div className={styles.link}>
                    <Button text = "Show More" onClick={loadMore}/>
                </div>
                )}
                {nextPage && (
                 <div className={styles.link}>
                    <Button text = "Go to Search" onClick={goBack}/>
                </div>
                )}
            </div>

        </div>
    );
};

export default SearchBar;



