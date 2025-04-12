import Image from "next/image";
import Card from "./Card";

interface RecipeProps {
    recipe: {
        _id: number;
        title: string;
        ingredientLines: string;
        url: string;
    };
}

const Recipe =({recipe}:RecipeProps) => {
    return (
        <Card>
            <div className='w-full h-68 relative'>
                <Image
                src={recipe.url}
                alt={recipe.title}
                fill
                className='object-cover rounded-md'/>
            </div>
            <h1 className='text-lg font-bold mt-2'>
                {recipe.title}
            </h1>
            <p className='text-black-600'>
                {recipe.ingredientLines}
            </p>
        </Card>
    )
}

export default Recipe;