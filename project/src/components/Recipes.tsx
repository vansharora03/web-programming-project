import RecipeItems from '@/RecipeItems.json';
import Recipe from './Recipe';

const Recipes = () => {
    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg-container m-auto px-4 py-6'>
                {RecipeItems.length === 0 ? (
                    <p> No Recipe Items available</p>
                ) : (
                    <div className='flex flex-direction-column gap-6'>
                        {RecipeItems.map((recipe) => (
                            <Recipe key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Recipes;