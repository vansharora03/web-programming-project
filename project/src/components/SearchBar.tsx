'use client'
import styles from './Card.module.css'
import Button from './Button';
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInput = (event) => {
        setQuery(event.target.value);
    };

    const searchClick = () => {
        onSearch(query);
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search Recipes or Ingredients"
                value={query}
                onChange={handleInput}
                className={styles.search}
            />
            <Button className={styles.button} onClick={handleInput} text='Search' />
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



