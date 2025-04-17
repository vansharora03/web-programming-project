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
        image: string;
    };
}

function SearchBar() {
    const [recipe, setRecipes] = useState<APIRecipe[]>([]);
    const [search, setSearchTerm] = useState('');

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }
    /*
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`https://api.edamam.com/api/recipes/v2/?type=public&q=${query}&app_id=35b6401b&app_key=%2041191a205a196f9830c5d43ffd55a9d8%09`);

                const data = await response.json();
                setRecipes(data.recipes);
                console.log(query)
            } catch (error) {
                console.log('Error');
            }
        };
        fetchRecipes();
    }, []); */

    const searchClick = () => {
        fetch(`https://api.edamam.com/api/recipes/v2/?type=public&q=${search}&app_id=35b6401b&app_key=%2041191a205a196f9830c5d43ffd55a9d8%09`)
            .then((response) => response.json())
            .then((json) => { setRecipes(json.hits); console.log(json) })
            .catch((error) => console.error('Error: ', error));
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
            <Button className={styles.button} onClick={searchClick} text='Search' />

            <div>
                {recipe.map((item, k) => {
                    const newRecipe = item.recipe;

                    const format = {
                        _id: k,
                        label: newRecipe.label,
                        ingredientLines: newRecipe.ingredientLines.join(', '),
                        calories: Math.round(newRecipe.calories),
                        image: newRecipe.image,
                        url: newRecipe.url,
                    };
                    return (
                        <Recipe
                            key={k}
                            recipe={format}
                            addToFavorites={format}
                            isFavorite={false}
                            isLoggedIn
                        />
                    );
                })}
            </div>

        </div>
    );
};

export default SearchBar;



