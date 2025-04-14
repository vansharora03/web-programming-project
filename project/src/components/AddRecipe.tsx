import React from 'react';
import { useState } from 'react';

type AddRecipeProps = { handleAddRecipe: (recipe: any) => void };

const AddRecipe = ({handleAddRecipe}: AddRecipeProps) => {
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState(0);
    const [ingredients, setIngredients] = useState('');
    const [imageUrl, setImageUrl] = useState(''); // Added imageUrl state

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Add Recipe</h1>
            <form>
            <div className="mb-4">
                <label htmlFor="recipeName" className="block text-gray-700 font-medium mb-2">Title:</label>
                <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                type="text" 
                id="recipeName" 
                name="recipeName" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="calories" className="block text-gray-700 font-medium mb-2">Calories:</label>
                <input 
                value={calories} 
                onChange={(e) => setCalories(parseInt(e.target.value))} 
                type="number" 
                id="calories" 
                name="calories" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients:</label>
                <textarea 
                value={ingredients} 
                id="ingredients" 
                onChange={(e) => setIngredients(e.target.value)} 
                name="ingredients" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">Image URL:</label>
                <input 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                type="text" 
                id="imageUrl" 
                name="imageUrl" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                onClick={(e) => {
                e.preventDefault();
                handleAddRecipe({
                    "_id": 1,
                    "owner": 2,
                    "title": title,
                    "ingredientLines": ingredients,
                    "calories": calories,
                    "url": imageUrl
                });
                setTitle('');
                setCalories(0);
                setIngredients('');
                setImageUrl('');
                }}
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Add Recipe
            </button>
            </form>
        </div>
    );
};

export default AddRecipe;