import styles from './Card.module.css'
/* import React, { useState } from 'react';

function SearchBar ({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInput = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); 
    };

    return (
        <input 
        type="text"
        placeholder="Search Recipes or Ingredients"
        value={query}
        onChange={handleInput} 
        className={styles.search}
        />
    );
}
    */
 const SearchBar = () => {
    return (
        <div className={styles.search}>
            Search Bar
        </div>
    )
 }

export default SearchBar;