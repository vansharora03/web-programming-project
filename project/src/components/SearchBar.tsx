'use client'
import styles from './Card.module.css'
import Button from './Button';
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

function SearchBar() {
    const [query, setRecipes] = useState('');
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
            .then((response) => response.json()).then((json) => console.log(json));
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
                hello
            </div>
        </div>
    );
};
/*
function Search() {
    const [results, setResults] = useState{ []};

    const handleSearch = async (query) => {
        try {
            const response = await fetch(``);
        }
        catch (error) {
            console.error("error");
        };

    };
    return (
        <div>
            <Search onSearch={handleSearch} />
        </div>
    )

}
*/
export default SearchBar;



